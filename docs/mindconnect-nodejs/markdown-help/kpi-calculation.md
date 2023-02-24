---
title:  CLI -  mdsp kpi-calculation Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp kpi-calculation Command

Syntax:

```bash
mdsp kpi-calculation
```

Help:

```bash
mdsp kpi-calculation --help
```

Alternative form:

```bash
mc kpi-calculation
```

(The CLI was using `mc` as default command name in older versions)

## Description

calculate kpi states or compute kpis @

## Usage

Parameter list:

```text
Usage: mc kpi-calculation|kp [options]

calculate kpi states or compute kpis @

Options:
  -f, --file             timeseries file (default: "timeseries-sample.json")
  -c, --calendar           timeseries with planned outages
  -e, --events               timeseries with control system events
  -m, --mode [direct|states|kpis]    mode see @ Additional Documentation
  -t, --target               target variable
  -f, --from                   timeseries begin  (used for direct state calculation)
  -o, --to                       timeseries end  (used for direct state calculation)
  -i, --assetid             Asset id  (used for direct state calculation)
  -a, --aspectname       Aspect name (used for direct state calculation )
  -n, --initialstate   Initial state [RSH, SH, POH, FOH] (default: "RSH")
  -d, --defaultstate   Default state [RSH, FOH] (default: "FOH")
  -h, --threshold         threshold parameter (default: "1.0")
  -s, --shutdown           shutdown threshold parameter in milliseconds (default: "5000")
  -y, --retry                retry attempts before giving up (default: "3")
  -p, --passkey             passkey
  -v, --verbose                      verbose output
  --help                             display help for command

```

## Examples

Here are some examples of how to use the `mdsp kpi-calculation` command:

```text

  Examples:

    mdsp kpi-calculation --mode states --file timeseries.mdsp.json --calendar calendar.mdsp.json  --target rpm --threshold 30 
 		calculate kpi states based on rpm
    mdsp kpi-calculation --mode direct --target rpm --assetid 123...ef --aspectname EngineParameters  --from  --to  
 		calculate kpi states based on asset data in {{site.productname}}
    mdsp kpi-calculation --mode kpis --file states.mdsp.json --target state 
 		calculate kpis for state timeseries

  State KPIs:

    No Data Hours (NoData), Period Hours (PH), Available Hours (AH) Service Hours (SH) 
    Reserve Shutdown Hours (RSH), Unavailble Hours (UH), Planned Outage Hours (POH) Forced Outage Hours (FOH) 

  Additional Documentation:

    https://developer.mindsphere.io/apis/analytics-kpicalculation/api-kpicalculation-basics-kpi.html

  Example Jupyter Notebook:

    https://github.com/mindsphere/analytics-examples/blob/master/kpi-calculation.ipynb

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
