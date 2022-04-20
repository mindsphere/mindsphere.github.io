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

Alternative form:

```bash
mc oe-device-status
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, get, or update (open edge) device status information *

## Usage

List of all parameters and their description:

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

These are some examples of how to use the command. 

```text

  Examples:

    mc oe-device-status --mode list --deviceid 
                            list all installed software on the device
    mc oe-device-status --mode list --deviceid 12345... --softwaretype APP
                             list all apps installed on the device
    mc oe-device-status --mode info --target health --deviceid 
                             get the device health status
    mc oe-device-status --mode info --target health-config-data --deviceid 
                             get the device health config data
    mc oe-device-status --mode info --target inventory --deviceid 
                             get the software inventory of the device
    mc oe-device-status --mode info --target connection-status --deviceid 
                             get the device connection status
    mc oe-device-status --mode template --target inventory
                             create template file for software inventory
    mc oe-device-status --mode template --target connection-status 
                             create template file for connection status
    mc oe-device-status --mode update --target inventory --file openedge.inventory.mdsp.json --deviceid 
                             update the software inventory of the device
    mc oe-device-status --mode update --target connection-status --deviceid 
                             send a heartbeat to the device

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.