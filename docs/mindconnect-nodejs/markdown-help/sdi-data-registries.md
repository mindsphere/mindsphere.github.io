---
title:  CLI -  mdsp sdi-data-registries Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp sdi-data-registries Command

Syntax:

```bash
mdsp sdi-data-registries
```

Help:

```bash
mdsp sdi-data-registries --help
```

Alternative form:

```bash
mc sdi-data-registries
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data registries for SDI *

## Usage

Parameter list:

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

Here are some examples of how to use the `mdsp sdi-data-registries` command:

```text

  Examples:

    mdsp sdi-data-registries --mode list 		 list all sdi dataregistries
    mdsp sdi-data-registries --mode template 	 create template file
    mdsp sdi-data-registries --mode create --dataregistry  	 create sdi data registry
    mdsp sdi-data-registries --mode update --dataregistry  --registryid                                                                                               		 update sdi data registry
    mdsp sdi-data-registries --mode info --registryid    		 get sdi data registry info
    mdsp sdi-data-registries --mode delete --registryid  		 delete sdi data registry

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
