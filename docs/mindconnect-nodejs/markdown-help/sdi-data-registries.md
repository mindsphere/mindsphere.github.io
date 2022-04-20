---
title: MindSphere CLI -  mdsp sdi-data-registries Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp sdi-data-registries Command

Syntax:

```bash
mdsp sdi-data-registries
```

Alternative form:

```bash
mc sdi-data-registries
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data registries for SDI *

## Usage

List of all parameters and their description:

```text
Usage: mc sdi-data-registries|sdr [options]

manage data registries for SDI *

Options:
  -m, --mode [list|create|update|template|info|delete]  list | create | update | template | info | delete (default: "list")
  -d, --dataregistry                      data registry file with definition for --mode create or update command
  -i, --registryid                          the dataregistry id for --mode info, update or delete command
  -o, --overwrite                                       overwrite template file if it already exists
  -k, --passkey                                passkey
  -y, --retry                                   retry attempts before giving up (default: "3")
  -v, --verbose                                         verbose output
  -h, --help                                            display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc sdi-data-registries --mode list 		 list all sdi dataregistries
    mc sdi-data-registries --mode template 	 create template file
    mc sdi-data-registries --mode create --dataregistry  	 create sdi data registry
    mc sdi-data-registries --mode update --dataregistry  --registryid                                                                                               		 update sdi data registry
    mc sdi-data-registries --mode info --registryid    		 get sdi data registry info
    mc sdi-data-registries --mode delete --registryid  		 delete sdi data registry

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.