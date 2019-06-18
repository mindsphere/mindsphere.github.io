---
title: MindConnect-NodeJS - Agent Development - How to create a NodeJS MindSphere agent
---

# MindConnect-NodeJS - Agent Development - <small>How to create a NodeJS MindSphere agent</small>

## Introduction

The following steps describe the easiest way to test the library. You can of course create the required dependencies also programmatically via API calls.

### TypeScript vs JavaScript

All examples are in [typescript <i class="fa fa-external-link-alt"></i>](https://www.typescriptlang.org/). They can be converted to javascript by removing the types.

```javascript
// example in typescript
const i: number = 0;

// example in javascript
const i = 0;
```

### async/await vs Promises

The examples use the async/await syntax for the promisses (available in typescript and in javascript from EcmaScript8)

```javascript
try {
  await agent.OnBoard();
  console.log("agent was successfully onboarded");
} catch (err) {
  console.log(err);
}
```

But you can also write code like this using the classical promise syntax:

```javascript
agent.OnBoard()
    .then (function() {
        console.log("agent was successfully onboarded";
    )}
    ).error(function(err){
        console.log(err)
    });
```

### Step 0: Create an asset type and aspect types

Mindsphere V3 IoT model requires that you create an asset type and aspect types to describe your assets. For the example we will create an asset type of type Engine with two aspect types: Environment and Vibration. (Note that my tenant is called castidev, you will have to use your own tenant name)

![assetype](../images/types.png)

More information about [MindSphere Data Model](https://documentation.mindsphere.io/resources/html/asset-manager/en-US/116404525451.html).

### Step 1: Create an asset

Create an asset (In example it is called **AcmeMotor**) of type Engine in AssetManager for your data.

### Step 2: Create an agent of type MindConnectLib in Mindsphere

Create an agent in Asset Manager of type core.MindConnectLib create initial JSON token and store it to file (e.g. agentconfig.json)

```json
{
  "content": {
    "baseUrl": "https://southgate.eu1.mindsphere.io",
    "iat": "<yourtokenishere>",
    "clientCredentialProfile": ["SHARED_SECRET"],
    "clientId": "a3ac5ae889544717b02fa8282a30d1b4",
    "tenant": "<yourtenantishere>"
  },
  "expiration": "2018-04-06T00:47:39.000Z"
}
```

More Information about [core.MindConnectLib](https://documentation.mindsphere.io/resources/html/asset-manager/en-US/121145483915.html) configuration.

### Step 3 : Create an agent

Read the initial configuration from the config file and create the agent.
If you are using the **SHARED_SECRET** profile there is no need to setup the local certificate for the communication (recommended for smaller devices).

```javascript
const configuration = require("../../agentconfig.json");
const agent = new MindConnectAgent(configuration);
```

If you want to use the **RSA_3072** profile you must also set up the agent certificate.

```javascript
// you can create the private.key for example using openssl:
// openssl genrsa -out private.key 3072

agent.SetupAgentCertificate(fs.readFileSync("private.key"));
```

### Step 4: Onboard the agent

The first operation is onboarding of the agent. This creates a client secret which is used for the communication with mindshpere.

This data is stored by default in the .mc folder in your application if you don't change the base path in the constructor of the agent.

**Important**: Make sure that your folder with the configurations is not reachable from the internet as it contains the client_secret for the authentication.

```javascript
if (!agent.IsOnBoarded()) {
  await agent.OnBoard();
}
```

### Step 5: Configure the data model and data mappings to asset variables. (via UI)

In the mindsphere version 3 you can configure the data model and mappings to aspect variables in the UI of the asset manager as well. Just go to configuration of mindconnectlib and configure the data sources like this.

![datasources](../images/datasources.png)

![datasources](../images/mappings.png)

(it might be a bit tedious to click through all mappings).

After that you can pull the configuration from mindsphere.

```javascript
if (!agent.HasDataSourceConfiguration()) {
  await agent.GetDataSourceConfiguration();
}
```

### Step 6 After this you can send the data in the code

```javascript
for (let index = 0; index < 5; index++) {
  const values: DataPointValue[] = [
    {
      dataPointId: "DP-Temperature",
      qualityCode: "0",
      value: (Math.sin(index) * (20 + (index % 2)) + 25).toString()
    },
    {
      dataPointId: "DP-Pressure",
      qualityCode: "0",
      value: (Math.cos(index) * (20 + (index % 25)) + 25).toString()
    },
    {
      dataPointId: "DP-Humidity",
      qualityCode: "0",
      value: ((index + 30) % 100).toString()
    },
    {
      dataPointId: "DP-Acceleration",
      qualityCode: "0",
      value: (1000.0 + index).toString()
    },
    {
      dataPointId: "DP-Frequency",
      qualityCode: "0",
      value: (60.0 + index * 0.1).toString()
    },
    {
      dataPointId: "DP-Displacement",
      qualityCode: "0",
      value: (index % 10).toString()
    },
    {
      dataPointId: "DP-Velocity",
      qualityCode: "0",
      value: (50.0 + index).toString()
    }
  ];

  // there is an optional timestamp parameter if you need to use something else instead of Date.now()
  const result = await agent.PostData(values);
}
```

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    If you were using UI to configure data mappings you will have long integers instead of human-readable data point Ids.
<!-- prettier-ignore-end -->

### Step 6.1 using bulk upload

If you don't want to send the data points one by one, you can also use the bulkpostdata method

```javascript
const bulk: TimeStampedDataPoint[] = [
  {
    timestamp: "2018-08-23T18:38:02.135Z",
    values: [
      { dataPointId: "DP-Temperature", qualityCode: "0", value: "10" },
      { dataPointId: "DP-Pressure", qualityCode: "0", value: "10" }
    ]
  },
  {
    timestamp: "2018-08-23T19:38:02.135Z",
    values: [
      { dataPointId: "DP-Temperature", qualityCode: "0", value: "10" },
      { dataPointId: "DP-Pressure", qualityCode: "0", value: "10" }
    ]
  }
];

await agent.BulkPostData(bulk);
```

## Events

Events can now be created with the library. You can create events for your agent or for your entities. In order to create an event for your entity you need to know the asssetid of the asset.

```javascript
const configuration = require("../../agentconfig.json");
const agent = new MindConnectAgent(configuration);

if (!agent.IsOnBoarded()) {
  await agent.OnBoard();
}

const event: MindsphereStandardEvent = {
  entityId: configuration.content.clientId, // use assetid if you dont want to store event in the agent :)
  sourceType: "Event",
  sourceId: "application",
  source: "Meowz",
  severity: 20, // 0-99 : 20:error, 30:warning, 40: information
  timestamp: new Date().toISOString(),
  description: "Test"
};

// send event with current timestamp
await agent.PostEvent(event);
```

![events](../images/events.png)

## File Upload

Files can now be uploaded via the library. You can upload files for your agent or for your entities. In order to create an event for your entity you need to know the assetid of the asset.

Since version 3.5.1. the agents are using the multipart upload API of the MindSphere. This means that the agents can upload files also bigger > 8 MB, The
multipart upload must be switched on (chunk:true) if you want to activate this behavior. The parameter parallelUploads determine the maximal number of paraellel uploads. You can increase this on a powerfull computer to speed up the upload or decrease to prevent network congestion.

```javascript
const configuration = require("../../agentconfig.json");
const agent = new MindConnectAgent(configuration);

if (!agent.IsOnBoarded()) {
  await agent.OnBoard();
}

await agent.UploadFile(
  agent.ClientId(),
  "custom/mindsphere/path/package.json",
  "package.json",
  {
    retry: RETRYTIMES,
    description: "File uploaded with MindConnect-NodeJS Library",
    parallelUploads: 5,
    chunk: true
  }
);
```

![files](../images/files.png)

## Full Agent

Here is a demo agent implementation.

[![mindsphere-agent](https://img.shields.io/badge/mindsphere-agent-green.svg)](https://github.com/mindsphere/mindconnect-nodejs/blob/master/src/demoagent/test-agent.ts)

## Generating the documentation

You can always generate the current HTML documentation by running the command below.

```bash
#this generates a docs/ folder the with full documentation of the library.
npm run doc
```

## Proxy support

Set the http_proxy or HTTP_PROXY environment variable if you need to connect via proxy.

```bash
# set http proxy environment variable if you are using e.g. fiddler on the localhost.

export HTTP_PROXY=http://localhost:8888
```

## Data in the mindsphere

Environment data:

![Environment Data](../images/environmentdata.PNG)

Vibration data:

![Vibration Data](../images/vibrationdata.PNG)
