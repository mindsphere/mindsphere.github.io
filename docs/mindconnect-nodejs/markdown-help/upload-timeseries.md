---
title: MindSphere CLI -  mdsp upload-timeseries Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp upload-timeseries Command

Syntax:

```bash
mdsp upload-timeseries
```

Alternative form:

```bash
mc upload-timeseries
```

(The CLI was using `mc` as default command name in older versions)

## Description

parse .csv file with timeseriesdata and upload the timeseries data to mindsphere

## Usage

List of all parameters and their description:

```text
Usage: mc upload-timeseries|ts [options]

parse .csv file with timeseriesdata and upload the timeseries data to mindsphere

Options:
  -c, --config        config file with agent configuration (default: "agentconfig.json")
  -r, --cert [privatekey]          required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -f, --file   csv file containing the timeseries data to upload to mindsphere
  -s, --size                 max records per http post (default: "200")
  -n, --no-validation              switch validation off (only if you are sure that the timeseries upload works)
  -y, --retry              retry attempts before giving up (default: "3")
  -v, --verbose                    verbose output
  -h, --help                       display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc ts -f timeseries.csv 					 upload timeseries from the csv file to mindsphere 
    mc upload-timeseries --file timeseries.csv  --size 100  	 use http post size of 100 records 

  Data Format: (use your own data point ids from mindsphere)

  timestamp, dataPointId, qualityCode, value
  2022-04-20T18:16:25.898Z, DP-Temperature ,0, 20.34
  2022-04-20T18:16:26.898Z, DP-Humidity, 0, 70
  2022-04-20T18:16:27.898Z, DP-Pressure, 0, 1012.3

  Make sure that the timestamp is in ISO format. The headers and the casing (timestamp, dataPointId) are important.
  The values must correspond with data types configured in mindsphere (in example: DP-Humidity must be an integer)

  Important:

    You have to configure the data source and data mappings in mindsphere asset manager before you can upload the data
    See also: https://documentation.mindsphere.io/resources/html/asset-manager/en-US/116404525451.html

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.