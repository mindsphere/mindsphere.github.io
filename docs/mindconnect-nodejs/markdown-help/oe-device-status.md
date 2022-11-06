---
title: MindSphere CLI -  mdsp oe-device-status Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp oe-device-status Command

Syntax:

```bash
mdsp oe-device-status
```

Help:

```bash
mdsp oe-device-status --help
```

Alternative form:

```bash
mc oe-device-status
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, get, or update (open edge) device status information *

## Usage

Parameter list:

```text
Usage: mc oe-device-status|oeds [options]

list, get, or update (open edge) device status information *

Options:
  -m, --mode [list|info|update|template]                                list | info | update | template (default: "list")
  -i, --deviceid                                              the device id
  -t, --target [health|health-config-data|inventory|connection-status]  type of status information to retrieve or to update. [ health |
                                                                        health-config-data | inventory | connection-status] (default: "health")
  -w, --softwaretype [APP|FIRMWARE]                                     software type [ APP | FIRMWARE ]
  -s, --softwareid                                          software id
  -f, --file                                                      openedge.*.mdsp.json file with update information definition
  -o, --overwrite                                                       overwrite template file if it already exists
  -k, --passkey                                                passkey
  -y, --retry                                                   retry attempts before giving up (default: "3")
  -v, --verbose                                                         verbose output
  -h, --help                                                            display help for command

```

## Examples

Here are some examples of how to use the `mdsp oe-device-status` command:

```text

  Examples:

    mdsp oe-device-status --mode list --deviceid 
                            list all installed software on the device
    mdsp oe-device-status --mode list --deviceid 12345... --softwaretype APP
                             list all apps installed on the device
    mdsp oe-device-status --mode info --target health --deviceid 
                             get the device health status
    mdsp oe-device-status --mode info --target health-config-data --deviceid 
                             get the device health config data
    mdsp oe-device-status --mode info --target inventory --deviceid 
                             get the software inventory of the device
    mdsp oe-device-status --mode info --target connection-status --deviceid 
                             get the device connection status
    mdsp oe-device-status --mode template --target inventory
                             create template file for software inventory
    mdsp oe-device-status --mode template --target connection-status 
                             create template file for connection status
    mdsp oe-device-status --mode update --target inventory --file openedge.inventory.mdsp.json --deviceid 
                             update the software inventory of the device
    mdsp oe-device-status --mode update --target connection-status --deviceid 
                             send a heartbeat to the device

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.