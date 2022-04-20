---
title: MindSphere CLI -  mdsp sdi-data-lakes Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp sdi-data-lakes Command

Syntax:

```bash
mdsp sdi-data-lakes
```

Alternative form:

```bash
mc sdi-data-lakes
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data lakes for SDI *

## Usage

List of all parameters and their description:

```text
Usage: mc sdi-data-lakes|sdl [options]

manage data lakes for SDI *

Options:
  -m, --mode [list|create|update|template|info|delete]  list | create | update | template | info | delete (default: "list")
  -d, --datalake                              data lake file with definition for --mode create or update command
  -i, --datalakeid                          the datalake id for --mode info, update or delete command
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

    mc sdi-data-lakes --mode list 		 list all sdi datalakes
    mc sdi-data-lakes --mode template 		 create template file
    mc sdi-data-lakes --mode create --datalake  		 create sdi data lake
    mc sdi-data-lakes --mode update --datalake  --datalakeid                                                                                		 update sdi data lake
    mc sdi-data-lakes --mode info --datalakeid    		 get sdi data lake info
    mc sdi-data-lakes --mode delete --datalakeid  		 delete sdi data lake

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.