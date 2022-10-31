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

Help:

```bash
mdsp sdi-data-lakes --help
```

Alternative form:

```bash
mc sdi-data-lakes
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data lakes for SDI *

## Usage

Parameter list:

```text
Usage: mdsp sdi-data-lakes|sdl [options]

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

Here are some examples of how to use the `mdsp sdi-data-lakes` command:

```text

  Examples:

    mc sdi-data-lakes --mode list 		 list all sdi datalakes
    mc sdi-data-lakes --mode template 		 create template file
    mc sdi-data-lakes --mode create --datalake  		 create sdi data lake
    mc sdi-data-lakes --mode update --datalake  --datalakeid                                                                                		 update sdi data lake
    mc sdi-data-lakes --mode info --datalakeid    		 get sdi data lake info
    mc sdi-data-lakes --mode delete --datalakeid  		 delete sdi data lake

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.