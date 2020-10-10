---
title: MindConnect-NodeJS - Agent Development - Retrying the operations
next:
    - title: Getting Started
      link: mindconnect-agent
    - title: MindConnect Agent Methods
      link: mindconnect-agent-docs
    - title: Starter Projects
      link: starter-projects
    - title: Agent State Storage
      link: agent-state-storage
---

<!-- @format -->

# MindConnect-NodeJS - Agent Development - <small>Retrying the operations</small>

## Making sure that the data arrives also with flaky internet connection

You can wrap all asynchronous object calls into the retry function which will automatically retry the operation for n times before throwing an exception.

```javascript
import {
    MindConnectAgent,
    MindsphereStandardEvent,
    retry,
    TimeStampedDataPoint,
} from "@mindconnect/mindconnect-nodejs";

// if you want to be more resillient you can wrap every async method
// in the retry function which will try to retry several times before throwing an exception

// onboarding over flaky connection
await retry(5, () => agent.OnBoard());

// bulk upload with 5 retries
const bulk: TimeStampedDataPoint[] = [
    {
        timestamp: "2018-08-23T18:38:02.135Z",
        values: [
            { dataPointId: "DP-Temperature", qualityCode: "0", value: "10" },
            { dataPointId: "DP-Pressure", qualityCode: "0", value: "10" },
        ],
    },
    {
        timestamp: "2018-08-23T19:38:02.135Z",
        values: [
            { dataPointId: "DP-Temperature", qualityCode: "0", value: "10" },
            { dataPointId: "DP-Pressure", qualityCode: "0", value: "10" },
        ],
    },
];

await retry(5, () => agent.BulkPostData(bulk));
```

## Uploading large files with multipart upload

For the large files upload you would typically want to retry only the upload operations of the chunks and not the whole multipart upload once an error occurs. Therefore the UploadFile method offers the possibility to retry only the chunked upload:

```javascript
// upload file
// the upload-file can be a multipart operation and therefore can be configured to
// retry the upload of the chunks instead the upload of the whole file.
// if you don't specify the type , the mimetype is automatically determined by the library
await agent.UploadFile(agent.ClientId(), "custom/mindsphere/path/package.json", "package.json", {
    retry: RETRYTIMES,
    description: "File uploaded with MindConnect-NodeJS Library",
    chunk: true, // the chunk parameter activates multipart upload
});
```
