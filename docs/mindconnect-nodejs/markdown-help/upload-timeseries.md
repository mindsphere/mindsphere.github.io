---
title:  CLI -  mdsp upload-timeseries Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp upload-timeseries Command

Syntax:

```bash
mdsp upload-timeseries
```

Help:

```bash
mdsp upload-timeseries --help
```

Alternative form:

```bash
mc upload-timeseries
```

(The CLI was using `mc` as default command name in older versions)

## Description

parse .csv file with timeseriesdata and upload the timeseries data to {{site.productname}}

## Usage

Parameter list:

```text
Usage: mc upload-timeseries|uts [options]

parse .csv file with timeseriesdata and upload the timeseries data to {{site.productname}}

Options:
  -c, --config        config file with agent configuration (default: "agentconfig.json")
  -r, --cert [privatekey]          required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -f, --file   csv file containing the timeseries data to upload to {{site.productname}}
  -s, --size                 max records per http post (default: "200")
  -n, --no-validation              switch validation off (only if you are sure that the timeseries upload works)
  -y, --retry              retry attempts before giving up (default: "3")
  -v, --verbose                    verbose output
  -h, --help                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp upload-timeseries` command:

```text

  Examples:

    mdsp ts -f timeseries.csv 					 upload timeseries from the csv file to {{site.productname}} 
    mdsp upload-timeseries --file timeseries.csv  --size 100  	 use http post size of 100 records 

  Data Format: (use your own data point ids from {{site.productname}})

  timestamp, dataPointId, qualityCode, value
  2022-11-06T01:51:14.192Z, DP-Temperature ,0, 20.34
  2022-11-06T01:51:15.192Z, DP-Humidity, 0, 70
  2022-11-06T01:51:16.192Z, DP-Pressure, 0, 1012.3

  Make sure that the timestamp is in ISO format. The headers and the casing (timestamp, dataPointId) are important.
  The values must correspond with data types configured in {{site.productname}} (in example: DP-Humidity must be an integer)

  Important:

    You have to configure the data source and data mappings in {{site.productname}} asset manager before you can upload the data
    See also: https://documentation.mindsphere.io/resources/html/asset-manager/en-US/116404525451.html

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
