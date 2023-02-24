---
title:  CLI -  mdsp oe-devices Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp oe-devices Command

Syntax:

```bash
mdsp oe-devices
```

Help:

```bash
mdsp oe-devices --help
```

Alternative form:

```bash
mc oe-devices
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete (open edge) devices *

## Usage

Parameter list:

```text
Usage: mc oe-devices|oed [options]

list, create or delete (open edge) devices *

Options:
  -m, --mode [list|create|delete|template|info]  list | create | delete | template | info (default: "list")
  -f, --file                               .mdsp.json file with device definition
  -n, --devicename                   device name
  -a, --assetid                         the id of the asset linked to the device
  -t, --typeid                           the device type id
  -d, --desc                               description (default: "created with {{site.productname}} CLI")
  -s, --serialnumber               the id of the asset linked to the device
  -i, --id                                   the device id
  -o, --overwrite                                overwrite template file if it already exists
  -k, --passkey                         passkey
  -y, --retry                            retry attempts before giving up (default: "3")
  -v, --verbose                                  verbose output
  -h, --help                                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp oe-devices` command:

```text

  Examples:

    mdsp oe-devices --mode list --assetid 	list all devices linked to the asset
    mdsp oe-devices --mode info --id 		get device details
    mdsp oe-devices --mode template 			create a template file for a new device
    mdsp oe-devices --mode delete --id 	delete the device with the specified id
    mdsp oe-devices --mode create --file openedge.device.mdsp.json 
                             create new device using the file openedge.device.mdsp.json

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
