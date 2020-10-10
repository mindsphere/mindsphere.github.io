---
title: MindConnect-NodeJS -CLI - Analysis Commands
next:
  - title: Overview
    link: index
  - title: Setting up the CLI
    link: setting-up-the-cli
---

<!-- @format -->

# MindConnect-NodeJS - CLI - <small>Analysis Commands</small>

## Introduction

The analytical functions of MindSphere like:

- Spectrum Analysis or
- Signal Validation

can be used with help of the CLI.

These commands require MindSphere app or service credentials.

## Spectrum Analysis (`mc spectrum-analysis`)

This command uses the [MindSphere Spectrum Analysis service](https://developer.mindsphere.io/apis/analytics-spectrumanalysis/api-spectrumanalysis-overview.html) to perform time domain to perform time domain and frequency domain analysis.
It provides functions to transform a time-domain signal into its frequency components (via Discrete Fourier Transform)
and to detect threshold breaches of their amplitudes.

```text
mc spectrum-analysis --help
Usage: mc spectrum-analysis|sp [options]

perform spectrum analysis on a sound file @

Options:
  -f, --file <fileToUpload>                            wav file to upload or json to analyze (default for threshold
                                                        detection: fft.spectrum.json)
  -m, --mode [fft|threshold]                           Fast Fourier Transformation or threshold detection (default: "fft")
  -t, --thresholds <thresholdsFile>                    threshold json for threshold detection (default: "thresholds.spectrum.json")
  -t, --output <results>                               output file (fft: fft.spectrum.json, threshold:
                                                        violations.spectrum.json)
  -w, --windowtype [flattop|hamming|hanning|blackman]  window type for the FFT (default: "flattop")
  -y, --retry <number>                                 retry attempts before giving up (default: "3")
  -p, --passkey <passkey>                              passkey
  -v, --verbose                                        verbose output
  -h, --help                                           display help for command

  Examples:

    mc spectrum-analysis -f machine.wav          Decomposes the sound file into frequency components
    mc spectrum-analysis -f machine.wav --windowtype blackman    use blackman window type for FFT preprocessing
    mc spectrum-analysis --mode threshold        detect threshold violations for thresholds stored in thresholds.spectrum.json

  Important:

  Authentication with service credentials or app credentials

        - append option [--passkey <your passkey>] to the command
        - create environment variable MDSP_PASSKEY with your current passkey

  Authentication with borrowed session cookie and xsrf-token cookie

        - create environment variables MDSP_HOST , MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies

  Full Documentation:

    https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/setting-up-the-cli.html
```

### Example

This will decompose the sound file into corresponding frequency components (using default flattop window.

```bash
mc spectrum-analysis -f machine.wav --passkey yourpasskey
```

Detecting threshold violations for thresholds stored in threshold.spectrum.json file :

```bash
mc spectrum-analysis --mode threshold --thresholds threshold.spectrum.json --passkey yourpasskey
```

## Signal Validation (`mc signal-validation`)

This command uses [MindSphere Signal Validation Service](https://developer.mindsphere.io/apis/analytics-signalvalidation/api-signalvalidation-overview.html)
to perform different checks on the time series data:

- Detect range violations
- Detect spikes
- Detect noise
- Detect jumps
- Detect/interpolate gaps
- Detect bias

The Signal Validation Service documentation provides the [full description](https://developer.mindsphere.io/apis/analytics-signalvalidation/api-signalvalidation-basics.html) of all checks the signal validation can perform.

```text
mc signal-validation --help
Usage: mc signal-validation|sv [options]

perform signal validation @

Options:
  -f, --file <timeseries>                                              timeseries file (default: "timeseries-sample.json")
  -o, --output <output>                                                result-file (signal-validation-mode.json)
  -m, --mode [testdata|range|spike|jumps|noise|gaps|interpolate|bias]  mode see @ Additional Documentation
  -n, --variablename [variablename]                                    this variable will be taken from timeseries (default: "variable1")
  -l, --lowerlimit [lowerlimit]                                        processing lower limit (for range)
  -u, --upperlimit [upperlimit]                                        processing upper limit (for range)
  -w, --windowsize [windowsize]                                        processing window size
  -r, --windowradius [windowradius]                                    processing window radius (for noise)
  -t, --threshold [threshold]                                          processing threshold
  -s, --step [step]                                                    processing step (for bias detection)
  -z, --size [size]                                                    generating test data size  (default: "100")
  -y, --retry <number>                                                 retry attempts before giving up (default: "3")
  -p, --passkey <passkey>                                              passkey
  -v, --verbose                                                        verbose output
  -h, --help                                                           display help for command

  Examples:

    mc signal-validation --mode range --lowerlimit  -1 --upperlimit 1    performes the range validation for range [-1..1]
    mc signal-validation -mode jumps --windowsize 12                     searches for jumps in the data
    mc signal-validation --mode interpolate --threshold 1000             interpolates a value for every gap > 1000ms

  Additional Documentation:

    https://developer.mindsphere.io/apis/analytics-signalvalidation/api-signalvalidation-basics.html

  Important:

  Authentication with service credentials or app credentials

        - append option [--passkey <your passkey>] to the command
        - create environment variable MDSP_PASSKEY with your current passkey

  Authentication with borrowed session cookie and xsrf-token cookie

        - create environment variables MDSP_HOST , MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies

  Full Documentation:

    https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/setting-up-the-cli.html
```

### Example

This will perform the [jump alert detection](https://developer.mindsphere.io/apis/analytics-signalvalidation/api-signalvalidation-basics.html#jump-alert)

![Jump Alert](https://developer.mindsphere.io/apis/analytics-signalvalidation/images/step-alert.png)

```bash
mc signal-validation -mode jumps --windowsize 12
```
