---
title: MindSphere CLI -  mdsp anomaly-detection Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp anomaly-detection Command

Syntax:

```bash
mdsp anomaly-detection
```

Help:

```bash
mdsp anomaly-detection --help
```

Alternative form:

```bash
mc anomaly-detection
```

(The CLI was using `mc` as default command name in older versions)

## Description

train anomaly detection models and detect timeseries anomalies *

## Usage

Parameter list:

```text
Usage: mdsp anomaly-detection|ad [options]

train anomaly detection models and detect timeseries anomalies *

Options:
  -m, --mode [template|train|detect]               mode [template | train | detect] (default: "train")
  -o, --on [data|asset]                            on [data | asset] (default: "data")
  -d, --data                                 time series data file (default: "timeseries.mdsp.json")
  -e, --epsilon                           threshold distance
  -s, --clustersize                   minimum cluster size
  -a, --algorithm [EUCLIDEAN|MANHATTAN|CHEBYSHEV]  distance measure algorithm [EUCLIDEAN | MANHATTAN | CHEBYSHEV]
  -n, --modelname                       human-friendly name of the model
  -i, --modelid                           mindsphere model id
  -i, --assetid                           mindsphere asset id
  -n, --aspectname                     mindsphere aspect name
  -f, --from                                 begining of the time range
  -u, --to                                     end of the time range
  -k, --passkey                           passkey
  -y, --retry                              retry attempts before giving up (default: "3")
  -v, --verbose                                    verbose output
  -h, --help                                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp anomaly-detection` command:

```text

  Examples:

    mc ad --mode template --data timeseries.data.mdsp.json 
                 creates a template for a time series data file
    mc ad --mode train --on data --data timeseries.data.mdsp.json --epsilon 0.5 

                trains a model on the timeserie specified in the data file
    mc ad --mode detect --on data --data timeseries.data.mdsp.json --modelid 
                 detects anomalities of the timeseries in the data file using the model with specified id
    mc ad --mode train --on asset --assetid  --aspectname Environment --epsilon 0.5
                trains a model on the time series of the aspect "Environment" of the asset with the id 
    mc ad --mode detect --on asset --modelid  --assetid  --aspectname Environment --epsilon 0.5
                detect anomalities of the timeseries on the specified asset and aspect with selected model

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.