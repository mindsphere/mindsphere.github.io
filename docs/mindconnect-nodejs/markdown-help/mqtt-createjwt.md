---
title:  CLI -  mdsp mqtt-createjwt Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp mqtt-createjwt Command

Syntax:

```bash
mdsp mqtt-createjwt
```

Help:

```bash
mdsp mqtt-createjwt --help
```

Alternative form:

```bash
mc mqtt-createjwt
```

(The CLI was using `mc` as default command name in older versions)

## Description

creates a signed token for opcua pub sub authentication #

## Usage

Parameter list:

```text
Usage: mc mqtt-createjwt|jw [options]

creates a signed token for opcua pub sub authentication #

Options:
  -i, --clientid           MQTT ClientId (default: "1cabd2d8-7b54-4ccd-b963-e3a0813375c1")
  -e, --expiration       time until the token is valid in seconds (default: "3600")
  -c, --rootca               path to CA root certificate (default: "CA-root.pem")
  -d, --devicecrt         path to device certificate (default: "device.crt.pem")
  -k, --devicekey         path to device certificate key (default: "device.key.pem")
  -p, --passphrase [passphrase]      passphrase for device certificate key
  -n, --intermediate [intermediate]  intermediate ca
  -t, --tenant [tenant]              tenant name
  -v, --verbose                      verbose output
  -h, --help                         display help for command

```

## Examples

Here are some examples of how to use the `mdsp mqtt-createjwt` command:

```text

  Examples:

    mdsp mqtt-createjwt --clientid "12345...ef" \
    --rootca path/to/root.cer.pem \
    --devicecrt path/to/device.cer.pem \
    --devicekey path/to/devicekey.pem \
    --passphrase "device key passphrase"  \
    --tenant yourtenant

  More Information: 

    https://developer.mindsphere.io/howto/howto-connect-via-mqtt.html#security-concept-onboarding-certificatebearer


```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
