---
title:  CLI -  mdsp spectrum-analysis Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp spectrum-analysis Command

Syntax:

```bash
mdsp spectrum-analysis
```

Help:

```bash
mdsp spectrum-analysis --help
```

Alternative form:

```bash
mc spectrum-analysis
```

(The CLI was using `mc` as default command name in older versions)

## Description

perform spectrum analysis on a sound file @

## Usage

Parameter list:

```text
Usage: mc spectrum-analysis|sp [options]

perform spectrum analysis on a sound file @

Options:
  -f, --file                             wav file to upload or json to analyze (default for threshold detection:
                                                       fft.spectrum.json)
  -m, --mode [fft|threshold]                           Fast Fourier Transformation or threshold detection (default: "fft")
  -t, --thresholds                     threshold json for threshold detection (default: "thresholds.spectrum.json")
  -t, --output                                output file (fft: fft.spectrum.json, threshold:
                                                       violations.spectrum.json)
  -w, --windowtype [flattop|hamming|hanning|blackman]  window type for the FFT (default: "flattop")
  -y, --retry                                  retry attempts before giving up (default: "3")
  -p, --passkey                               passkey
  -v, --verbose                                        verbose output
  -h, --help                                           display help for command

```

## Examples

Here are some examples of how to use the `mdsp spectrum-analysis` command:

```text

  Examples:

    mdsp spectrum-analysis -f machine.wav  	 Decomposes the sound file into frequency components
    mdsp spectrum-analysis -f machine.wav --windowtype blackman 	 use blackman window type for FFT preprocessing
    mdsp spectrum-analysis --mode threshold 	 detect threshold violations for thresholds stored in thresholds.spectrum.json

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
