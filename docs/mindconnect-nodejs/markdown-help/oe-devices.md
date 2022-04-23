---
title: MindSphere CLI -  mdsp oe-devices Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp oe-devices Command

Syntax:

```bash
mdsp oe-devices
```

Alternative form:

```bash
mc oe-devices
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete (open edge) devices *

## Usage

List of all parameters and their description:

```text
Usage: mc oe-devices|oed [options]

list, create or delete (open edge) devices *

Options:
  -m, --mode [list|create|delete|template|info]  list | create | delete | template | info (default: "list")
  -f, --file                               .mdsp.json file with device definition
  -n, --devicename                   device name
  -a, --assetid                         the id of the asset linked to the device
  -t, --typeid                           the device type id
  -d, --desc                               description (default: "created with mindsphere CLI")
  -s, --serialnumber               the id of the asset linked to the device
  -i, --id                                   the device id
  -o, --overwrite                                overwrite template file if it already exists
  -k, --passkey                         passkey
  -y, --retry                            retry attempts before giving up (default: "3")
  -v, --verbose                                  verbose output
  -h, --help                                     display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc oe-devices --mode list --assetid 	list all devices linked to the asset
    mc oe-devices --mode info --id 		get device details
    mc oe-devices --mode template 			create a template file for a new device
    mc oe-devices --mode delete --id 	delete the device with the specified id
    mc oe-devices --mode create --file openedge.device.mdsp.json 
                             create new device using the file openedge.device.mdsp.json

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.