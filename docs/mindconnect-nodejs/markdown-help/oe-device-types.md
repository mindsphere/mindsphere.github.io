---
title: MindSphere CLI -  mdsp oe-device-types Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp oe-device-types Command

Syntax:

```bash
mdsp oe-device-types
```

Help:

```bash
mdsp oe-device-types --help
```

Alternative form:

```bash
mc oe-device-types
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete device types (open edge) *

## Usage

Parameter list:

```text
Usage: mc oe-device-types|oedt [options]

list, create or delete device types (open edge) *

Options:
  -m, --mode [list|create|delete|template|info]  list | create | delete | template | info (default: "list")
  -f, --file                               .mdsp.json file with device type definition
  -t, --tenant                           tenant tenant of the device type definition
  -n, --devicetype                   the device type name
  -c, --code                               device type code
  -a, --assettype                     the device type associated asset type id
  -i, --id                                   the device type id
  -o, --overwrite                                overwrite template file if it already exists
  -k, --passkey                         passkey
  -y, --retry                            retry attempts before giving up (default: "3")
  -v, --verbose                                  verbose output
  -h, --help                                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp oe-device-types` command:

```text

  Examples:

    mc oe-device-types --mode list 			 list all device types
    mc oe-device-types --mode list --tenant siemens	 list all device types which belongs to the tenant "siemens"
    mc oe-device-types --mode info --id 	 get details of device type with the specified device id
    mc oe-device-types --mode template --devicetype board 
	create a template file for specified device type
    mc oe-device-types --mode create --file board.devicetype.mdsp.json 
	create device type board in MindSphere
    mc oe-device-types --mode delete --id 	 delete the device type with the device id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.