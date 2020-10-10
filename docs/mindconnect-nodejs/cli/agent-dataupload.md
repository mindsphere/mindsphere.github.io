---
title: MindConnect-NodeJS - CLI - Uploading Data to MindSphere
next:
  - title: Overview
    link: index
  - title: Setting up the CLI
    link: setting-up-the-cli
---

<!-- @format -->

# MindConnect-NodeJS - CLI - <small>Uploading Data to MindSphere</small>

## Introduction

The MindConnect APIs provide the agents with the possibility to

- ingest timeseries data (`mc upload-timeseries`)
- create events in the MindSphere (`mc create-event`)
- upload files to the the MindSphere (`mc upload-file`)

All these commands use the agent credentials. Take a look at [Agent Management](./agent-management.md) part of the documentation for instructions how to acquire them.

## Ingesting Time Series Data via MindConnect (`mc upload-timeseries`)

<!-- prettier-ignore-start -->
<i class="fas fa-exclamation-triangle"></i>
    This commands are provided for testing/working with the MindConnect (Agent) interfaces. IF you want to use this CLI to import historical data please take a look to the [uploading historical data](./bulk-uploads.md) part of the documentation.
<!-- prettier-ignore-end-->

This command offers to the user a way to import the .csv files through MindConnect (Agent) API.

```text
mc upload-timeseries --help

Usage: upload-timeseries|ts [options]

parse .csv file with timeseriesdata and upload the timeseries data to mindsphere

Options:
  -c, --config <agentconfig>       config file with agent configuration (default: "agentconfig.json")
  -r, --cert [privatekey]          required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -f, --file <timeseriesdata.csv>  csv file containing the timeseries data to upload to mindsphere
  -s, --size <size>                max records per http post (default: 200)
  -n, --no-validation              switch validation off (only if you are sure that the timeseries upload works)
  -y, --retry <number>             retry attempts before giving up (default: 3)
  -v, --verbose                    verbose output
  -h, --help                       output usage information

  Examples:

    mc ts -f timeseries.csv        upload timeseries from the csv file to mindsphere
    mc upload-timeseries --file timeseries.csv  --size 100  use http post size of 100 records

  Data Format: (use your own data point ids from mindsphere)

  timestamp, dataPointId, qualityCode, value
  2019-05-16T14:50:53.048Z, DP-Temperature ,0, 20.34
  2019-05-16T14:50:54.048Z, DP-Humidity, 0, 70
  2019-05-16T14:50:55.048Z, DP-Pressure, 0, 1012.3

  Make sure that the timestamp is in ISO format. The headers and the casing (timestamp, dataPointId) are important.
  The values must correspond with data types configured in mindsphere (in example: DP-Humidity must be an integer)

  Important:

    You have to configure the data source and data mappings in mindsphere asset manager before you can upload the data
    See also: https://documentation.mindsphere.io/resources/html/asset-manager/en-US/116404525451.html
```

## Example

The timeseries data for the upload must match your DataSourceConfiguration in the MindSphere.
For example: if you have the data source configuration from the
development example the csv file should look like in the documentation below.

Make sure that the timestamp is in ISO format. The headers and the casing (timestamp, dataPointId) are important.
The values must correspond with data types configured in MindSphere (in example: DP-Humidity must be an integer)

```csv
timestamp, dataPointId, qualityCode, value
2019-05-16T15:58:37.626Z, DP-Temperature ,0, 20.34
2019-05-16T15:58:38.626Z, DP-Humidity, 0, 70
2019-05-16T15:58:39.626Z, DP-Pressure, 0, 1012.3
```

Running the command

```bash
mc upload-timeseries --file timeseries.csv --size 100 --config agentconfig.json
```

will upload the data to MindConnect API in batches of 100 messages.

## Creating events (`mc create-event`)

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    This command can also be used with app or service credentials.
<!-- prettier-ignore-end -->

```text
mc create-event --help
Usage: mc create-event|ce [options]

create an event in the mindsphere (optional: passkey) *

Options:
  -c, --config <agentconfig>     config file with agent configuration
  -r, --cert [privatekey]        required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -i, --assetid <assetid>        asset id from the mindsphere  (default: send event to the agent)
  -y, --sourceType <sourceType>  Source Type (default: "MindConnect-Agent")
  -S, --sourceId <sourceId>      Source Id (default: "md1ru58c")
  -O, --source <source>          Source (default: "MindConnect-NodeJs CLI")
  -V, --severity <severity>      Severity (20:Error, 30:Warning , 40:information) (default: "20")
  -d, --desc <description>       Event description (default: "CLI created event")
  -t, --timestamp <timestamp>    Timestamp (default: "2020-10-04T03:51:46.916Z")
  -y, --retry <number>           retry attempts before giving up (default: "3")
  -p, --passkey <passkey>        passkey (optional, event creation uses service credentials *)
  -v, --verbose                  verbose output
  -h, --help                     display help for command

  Examples:

    mc create-event                              create error event with default values and current timestamp
    mc ce --desc Warning! --severity 30          create warning with description warning
    mc ce --desc "custom event" --i 123....4     create error event for asset with id 123....4
```

### Example

```bash
mc create-event --desc "This is a custom event" --severity 40
```

This will create event in the agent asset. You can add the --assetid {assetid} if you want to send the event to a different asset.

**Severity levels:**

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    - 20: Error
    - 30: Warning
    - 40: Information
<!-- prettier-ignore-end -->

## Uploading files (`mc upload-file`)

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    This command can also be used with service credentials instead.
<!-- prettier-ignore-end -->

The upload-file command can upload the files to MindSphere. If the files are bigger then 8MB you can use --chunked option which will switch the uploading of data to the multipart upload instead. The mime type of the file is automatically determined but it can be overridden in the MindSphere.

```text
Usage: upload-file|uf [options]

upload the file to the mindsphere file service (optional: passkey) *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -f, --file <fileToUpload>   file to upload to the file service
  -h, --filepath <filepath>   file path in the mindsphere
  -l, --parallel <number>     parallel chunk uploads (default: 3)
  -i, --assetid [assetid]     asset id from the mindsphere  (default: upload to the agent)
  -m, --mime [mime-type]      mime type of the file (default: automatic recognition)
  -d, --desc [description]    description
  -k, --chunked               Use chunked upload
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -p, --passkey <passkey>     passkey (optional, file upload uses service credentials *)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc uf -f CHANGELOG.md        upload file CHANGELOG.md to the agent
    mc upload-file --file  CHANGELOG.md  --assetid 5...f --mime text/plain    upload file to a specified asset with custom mime type
    mc upload-file --file  CHANGELOG.md  --chunked     upload file using experimental chunked upload
```

### Example

The following command will upload the file to the MindSphere using multipart upload and 5 parallel threads.

```bash
mc upload-file --file simulationdata.zip --chunked --parallel 5
```

The command returns the md5 hash of the uploaded file.
