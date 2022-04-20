---
title: MindSphere CLI -  mdsp trend-prediction Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp trend-prediction Command

Syntax:

```bash
mdsp trend-prediction
```

Alternative form:

```bash
mc trend-prediction
```

(The CLI was using `mc` as default command name in older versions)

## Description

perform trend prediction (linear/polynomial) @

## Usage

List of all parameters and their description:

```text
Usage: mc trend-prediction|tp [options]

perform trend prediction (linear/polynomial) @

Options:
  -f, --file                                       timeseries file (default: "timeseries-sample.mdsp.json")
  -m, --mode [train|predict|trainandpredict|list|read|delete]  mode see @ Additional Documentation (default: "list")
  -o, --output                                         output variables
  -i, --input                                           input variables (comma separated)
  -e, --modelid                                       modelid of the stored model for prediction
  -r, --predict                                       regression parameters for prediction (comma separated)
  -c, --predictfile                               regression parameters for prediction as timeseries
  -d, --degree [degree]                                        degree for linear / polynomial regression  (default: "1")
  -y, --retry                                          retry attempts before giving up (default: "3")
  -p, --passkey                                       passkey
  -v, --verbose                                                verbose output
  -h, --help                                                   display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc trend-prediction --mode list 				 lists all trend prediction models
    mc trend-prediction --mode get --modelid 12345..ef 		 retrieves the trend prediction model from the mindsphere
    mc trend-prediction --mode delete --modelid 12345..ef 	 deletes the trend prediction model from the mindsphere
    mc tp --mode trendandpredict 				 training and prediction in one single step (see parameters below)

    mc tp --mode train -f data.json -i "temp,vibration" -o "quality" -d 2 		   trains quadratic fit function for f(temp, vibration) = quality 
    mc tp --mode predict --modelid 12345..ef -i "temp,vibration" -o "quality" -p "30,0.01" predict the quality with temp=30, vibration=0.01 using trained model

  Additional Documentation:

    https://developer.mindsphere.io/apis/analytics-trendprediction/api-trendprediction-basics.html

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.