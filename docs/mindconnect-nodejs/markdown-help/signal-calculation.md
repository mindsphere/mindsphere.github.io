---
title: MindSphere CLI -  mdsp signal-calculation Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp signal-calculation Command

Syntax:

```bash
mdsp signal-calculation
```

Help:

```bash
mdsp signal-calculation --help
```

Alternative form:

```bash
mc signal-calculation
```

(The CLI was using `mc` as default command name in older versions)

## Description

process timeseries data *

## Usage

Parameter list:

```text
Usage: mc signal-calculation|cal [options]

process timeseries data *

Options:
  -m, --mode [template|calculate]  template | calculate (default: "template")
  -o, --on [data|asset]            on [data | asset] (default: "data")
  -f, --template         .mdsp.json template file default: (signal.[template|templatedirect].mdsp.json)
  -u, --result             .mdsp.json with signal calculation result (default: "signal.result.mdsp.json")
  -i, --assetid           assetid for template creation
  -a, --aspect             aspect for template creation
  -r, --variable         variables for template creation
  -s, --size                 timeseries length for generated data (default: "5")
  -t, --timeseries     comma separated list of time series files (if data is not embedded)
  -o, --overwrite                  overwrite template file if it already exists
  -k, --passkey           passkey
  -y, --retry              retry attempts before giving up (default: "3")
  -v, --verbose                    verbose output
  -h, --help                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp signal-calculation` command:

```text

  Examples:

    mdsp signal-calculation --mode template 	 create template file for signal calculation
    mdsp signal-calculation --mode template --on asset --assetid  --aspect  --variable variable
                                            	 creates template for calculation using mindsphere timeseries data
    mdsp signal-calculation --mode calculate --template  
                                            	 calculates new signal from the timeseries specified in template file
    mdsp signal-calculation --mode calculate \
                     --template  \
                     --timeseries  \
                     --assetid  \
                     --aspect 
                                            	 calculates new signal from the timeseries specified in external file
    mdsp signal-calculation --mode calculate --on asset --template  
                                            	 calculates new signal from the mindsphere timeseries

  Operation List: 

    https://developer.mindsphere.io/apis/analytics-signalcalculation/api-signalcalculation-overview.html


```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.