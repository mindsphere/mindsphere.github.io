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

Help:

```bash
mdsp trend-prediction --help
```

Alternative form:

```bash
mc trend-prediction
```

(The CLI was using `mc` as default command name in older versions)

## Description

perform trend prediction (linear/polynomial) @

## Usage

Parameter list:

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

Here are some examples of how to use the `mdsp trend-prediction` command:

```text

  Examples:

    mdsp trend-prediction --mode list 				 lists all trend prediction models
    mdsp trend-prediction --mode get --modelid 12345..ef 		 retrieves the trend prediction model from the mindsphere
    mdsp trend-prediction --mode delete --modelid 12345..ef 	 deletes the trend prediction model from the mindsphere
    mdsp tp --mode trendandpredict 				 training and prediction in one single step (see parameters below)

    mdsp tp --mode train -f data.json -i "temp,vibration" -o "quality" -d 2 		   trains quadratic fit function for f(temp, vibration) = quality 
    mdsp tp --mode predict --modelid 12345..ef -i "temp,vibration" -o "quality" -p "30,0.01" predict the quality with temp=30, vibration=0.01 using trained model

  Additional Documentation:

    https://developer.mindsphere.io/apis/analytics-trendprediction/api-trendprediction-basics.html

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.