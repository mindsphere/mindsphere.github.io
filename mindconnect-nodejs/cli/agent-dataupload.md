---
title: MindConnect-NodeJS - CLI - Uploading Data via MindConnect
hide_license_text: True
show_mit_license_text: True
---

# MindConnect-NodeJS - CLI - <small>Uploading Data via MindConnect</small>

The MindConnect APIs provide the agents with the possibility to 

- ingest timeseries data (```mc upload-timeseries```)
- create events in the Mindsphere (```mc create-event```)
- upload files to the the MindSphere (```mc upload-file```)

All these commands use the agent credentials. Take a look at [Agent Management](./agent-management.md) part of the documentation for instructions how to acquire them.

The mindconnect nodejs 

!!! warning
    This commands are provided for testing/working with the MindConnect (Agent) intefaces. IF you want to use this CLI to import historical data please take a look to the [uploading historical data](./uploading-historical-data) part of the documentation.


## Ingesting Time Series Data via MindConnect (```mc upload-timeseries```)

This command offers to the user a way to import the .csv files through MindConnect (Agent) API.

```text

mc upload-file --help

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

    mc ts -f timeseries.csv 					 upload timeseries from the csv file to mindsphere 
    mc upload-timeseries --file timeseries.csv  --size 100  	 use http post size of 100 records 

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


 
