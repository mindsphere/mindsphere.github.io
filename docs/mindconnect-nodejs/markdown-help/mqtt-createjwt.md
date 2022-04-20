---
title: MindSphere CLI -  mdsp mqtt-createjwt Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp mqtt-createjwt Command

Syntax:

```bash
mdsp mqtt-createjwt
```

Alternative form:

```bash
mc mqtt-createjwt
```

(The CLI was using `mc` as default command name in older versions)

## Description

creates a signed token for opcua pub sub authentication #

## Usage

List of all parameters and their description:

```text
Usage: mc mqtt-createjwt|jw [options]

creates a signed token for opcua pub sub authentication #

Options:
  -i, --clientid           MQTT ClientId (default: "cd26fda6-5601-4359-aecb-d67c029b6f98")
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

These are some examples of how to use the command. 

```text

  Examples:

    mc mqtt-createjwt --clientid "12345...ef" \
    --rootca path/to/root.cer.pem \
    --devicecrt path/to/device.cer.pem \
    --devicekey path/to/devicekey.pem \
    --passphrase "device key passphrase"  \
    --tenant yourtenant

  More Information: 

    https://developer.mindsphere.io/howto/howto-connect-via-mqtt.html#security-concept-onboarding-certificatebearer


```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.