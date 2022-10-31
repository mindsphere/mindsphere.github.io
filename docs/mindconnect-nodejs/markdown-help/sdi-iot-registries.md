---
title: MindSphere CLI -  mdsp sdi-iot-registries Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp sdi-iot-registries Command

Syntax:

```bash
mdsp sdi-iot-registries
```

Help:

```bash
mdsp sdi-iot-registries --help
```

Alternative form:

```bash
mc sdi-iot-registries
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage iot data registries for SDI *

## Usage

Parameter list:

```text
Usage: mdsp sdi-iot-registries|sdt [options]

manage iot data registries for SDI *

Options:
  -m, --mode [list|create|template|info|delete]  list | create | template | info | delete (default: "list")
  -d, --iotregistry                 data registry file with definition for --mode create or update command
  -i, --registryid                   the iotregistry id for --mode info, update or delete command
  -o, --overwrite                                overwrite template file if it already exists
  -k, --passkey                         passkey
  -y, --retry                            retry attempts before giving up (default: "3")
  -v, --verbose                                  verbose output
  -h, --help                                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-iot-registries` command:

```text

  Examples:

    mc sdi-iot-registries --mode list 		 list all sdi dataregistries
    mc sdi-iot-registries --mode template 	 create template file
    mc sdi-iot-registries --mode create --iotregistry  	 create sdi iot registry
    mc sdi-iot-registries --mode update --iotregistry  --registryid                                                                                               		 update sdi iot registry
    mc sdi-iot-registries --mode info --registryid    		 get sdi iot registry info
    mc sdi-iot-registries --mode delete --registryid  		 delete sdi iot registry

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.