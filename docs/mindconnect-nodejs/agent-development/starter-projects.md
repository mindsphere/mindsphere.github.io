---
title: Mindconnect-NodeJS - Agent Development - Starter Projects
next:
  - title: Getting Started
    link: mindconnect-agent
  - title: Retrying the Operations
    link: retrying-operations
  - title: MindConnect Agent Methods
    link: mindconnect-agent-docs
  - title: Agent State Storage
    link: agent-state-storage
---

<!-- @format -->

# Mindconnect-NodeJS - Agent Development - <small>Starter Projects</small>

## Introduction

The easiest way to start the development is to use the CLI to generate the starter projects

## Prerequisites

You will need the [installed CLI](../cli/setting-up-the-cli.md).

## Step 1 - Create the project with help of the CLI

### Example

Use the CLI to setup a starter project called my-agent:

```bash
mc createts --dir my-agent
```

This will provide following output:

```text
Starter project in my-agent has been created.
Please run npm install in my-agent directory to install dependecies.
```

```bash
# after this we will install the required dependencies

cd my-agent
npm install
```

This should be the result of the installation

```text
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN mc-agent-ts@1.0.0 No repository field.
npm WARN mc-agent-ts@1.0.0 license should be a valid SPDX license expression

added 69 packages from 132 contributors and audited 88 packages in 24.888s
found 0 vulnerabilities
```

After this create the agentconfig.json with help of the CLI:

```bash
mc create-agent --passkey{your passkey} --config agentconfig.json
```

This will produce following output

```text
Configure your agent at:

        https://{yourtenant}-assetmanager.eu1.mindsphere.io/entity/{agentid}/plugin/uipluginassetmanagermclib
```

## Step 2 - Create the assets in MindSphere

Create aspect types, asset type and asset in MindSphere. Remember your asset id.

## Step 3 - Configure the agent

You can use the new automatic creation of DataSourceConfiguration and DataSourceMappings to configure your agent.

```javascript
import {
  DataPointValue,
  MindConnectAgent,
  MindsphereStandardEvent,
  retry,
  TimeStampedDataPoint,
} from "@mindconnect/mindconnect-nodejs";

(async function () {
  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  const configuration = require("../../agentconfig.json");
  const agent = new MindConnectAgent(configuration);
  const log = (text: any) => {
    console.log(`[${new Date().toISOString()}] ${text.toString()}`);
  };
  const RETRYTIMES = 5; // retry the operation before giving up and throwing exception

  // onboarding the agent
  // Check in the local agent state storage if agent is onboarded.
  // https://opensource.mindsphere.io/docs/mindconnect-nodejs/agent-development/agent-state-storage.html

  if (!agent.IsOnBoarded()) {
    // wrapping the call in the retry function makes the agent a bit more resillient
    // if you don't want to retry the operations you can always just call await agent.OnBoard(); instead.
    await retry(RETRYTIMES, () => agent.OnBoard());
    log("Agent onboarded");
  }

  // you can use agent.Sdk().GetAssetManagementClient() to get the asset id and asset type from mindsphere
  const targetAssetId = "1234567....";
  const targetAssetType = `${agent.GetTenant()}.Engine`;

  // create data sourceconfiguration and mappings

  // this generates a data source configuration from an asset type
  const config = await agent.GenerateDataSourceConfiguration(targetAssetType);

  // create/overwrite the data source configuration
  await agent.PutDataSourceConfiguration(config);

  // create mappings for asset id
  const mappings = await agent.GenerateMappings(targetAssetId);
  // store mappings in mindsphere
  await agent.PutDataMappings(mappings);

  // instead of creating the data source configuration and mappings separately
  // you can also just use the method below which takes care of everything
  // this is only used for 1:1 asset -> agent mappings
  // the method above can also map the data source configuration to multiple assets
  // just call GenerateMappings with different asset ids

  await agent.ConfigureAgentForAssetId(targetAssetId);

  // Check in the local agent state storage if agent has data source configuration.
  if (!agent.HasDataSourceConfiguration()) {
    await retry(RETRYTIMES, () => agent.GetDataSourceConfiguration());
    log("Configuration aquired");
  }

  for (let index = 0; index < 5; index++) {
    try {
      log(`Iteration : ${index}`);

      // if you have configred the data points in the mindsphere UI you will have to use the long integer values instead of descriptive dataPointIds.

      const values: DataPointValue[] = [
        {
          dataPointId: "DP-Temperature",
          qualityCode: "0",
          value: (Math.sin(index) * (20 + (index % 2)) + 25).toString(),
        },
        {
          dataPointId: "DP-Pressure",
          qualityCode: "0",
          value: (Math.cos(index) * (20 + (index % 25)) + 25).toString(),
        },
        {
          dataPointId: "DP-Humidity",
          qualityCode: "0",
          value: ((index + 30) % 100).toString(),
        },
        {
          dataPointId: "DP-Acceleration",
          qualityCode: "0",
          value: (1000.0 + index).toString(),
        },
        {
          dataPointId: "DP-Frequency",
          qualityCode: "0",
          value: (60.0 + index * 0.1).toString(),
        },
        {
          dataPointId: "DP-Displacement",
          qualityCode: "0",
          value: (index % 10).toString(),
        },
        {
          dataPointId: "DP-Velocity",
          qualityCode: "0",
          value: (50.0 + index).toString(),
        },
      ];

      // same like above, you can also just call  await agent.PostData(values) if you don't want to retry the operation
      // this is how to send the data with specific timestamp
      // await agent.PostData(values, new Date(Date.now() - 86400 * 1000));

      await retry(RETRYTIMES, () => agent.PostData(values));
      log("Data posted");
      await sleep(1000);

      const event: MindsphereStandardEvent = {
        entityId: agent.ClientId(), // use assetid if you want to send event somewhere else :)
        sourceType: "Event",
        sourceId: "application",
        source: "Meowz",
        severity: 20, // 0-99 : 20:error, 30:warning, 40: information
        timestamp: new Date().toISOString(),
        description: "Test",
      };

      // send event with current timestamp; you can also just call agent.PostEvent(event) if you don't want to retry the operation
      await retry(RETRYTIMES, () => agent.PostEvent(event));
      log("event posted");
      await sleep(1000);

      // upload file
      // the upload-file can be a multipart operation and therefore can be configured to
      // retry the upload of the chunks instead the upload of the whole file.
      // if you don't specify the type , the mimetype is automatically determined by the library
      await agent.UploadFile(
        agent.ClientId(),
        "custom/mindsphere/path/package.json",
        "package.json",
        {
          retry: RETRYTIMES,
          description: "File uploaded with MindConnect-NodeJS Library",
          chunk: true, // the chunk parameter activates multipart upload
        }
      );

      log("file uploaded");
      await sleep(1000);

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const bulk: TimeStampedDataPoint[] = [
        {
          timestamp: yesterday.toISOString(),
          values: [
            { dataPointId: "DP-Temperature", qualityCode: "0", value: "10" },
            { dataPointId: "DP-Pressure", qualityCode: "0", value: "10" },
          ],
        },
        {
          timestamp: new Date().toISOString(),
          values: [
            { dataPointId: "DP-Temperature", qualityCode: "0", value: "10" },
            { dataPointId: "DP-Pressure", qualityCode: "0", value: "10" },
          ],
        },
      ];

      await retry(RETRYTIMES, () => agent.BulkPostData(bulk));
      log("bulk data uploaded");
      await sleep(1000);
    } catch (err) {
      // add proper error handling (e.g. store data somewhere, retry later etc. )
      console.error(err);
    }
  }
})();
```

## Start the agent

```bash
npm start
```

This should produce the output like this:

```bash
> mc-agent-ts@1.0.0 start C:\git\my-agent
> tsc && node index.js

[2019-05-17T15:41:11.375Z] Iteration : 0
[2019-05-17T15:41:13.495Z] Agent onboarded
[2019-05-17T15:41:14.398Z] Configuration aquired
[2019-05-17T15:41:14.958Z] Data posted
[2019-05-17T15:41:16.409Z] event posted
[2019-05-17T15:41:18.285Z] bulk data uploaded
[2019-05-17T15:41:19.288Z] Iteration : 1
[2019-05-17T15:41:19.716Z] Data posted
[2019-05-17T15:41:21.325Z] event posted
[2019-05-17T15:41:23.445Z] bulk data uploaded
[2019-05-17T15:41:24.447Z] Iteration : 2
[2019-05-17T15:41:24.886Z] Data posted
[2019-05-17T15:41:26.289Z] event posted
[2019-05-17T15:41:30.744Z] bulk data uploaded
```
