---
title: MindSphere CLI -  mdsp subtenants Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp subtenants Command

Syntax:

```bash
mdsp subtenants
```

Help:

```bash
mdsp subtenants --help
```

Alternative form:

```bash
mc subtenants
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete subtenants *

## Usage

Parameter list:

```text
Usage: mdsp subtenants|st [options]

list, create or delete subtenants *

Options:
  -m, --mode [list|create|delete|template | info]  list | create | delete | template | info (default: "list")
  -f, --file                                 .mdsp.json file with subtenant definition
  -n, --subtenant                       the subtenant name
  -i, --subtenantid                   the subtenant id
  -k, --passkey                           passkey
  -y, --retry                              retry attempts before giving up (default: "3")
  -v, --verbose                                    verbose output
  -h, --help                                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp subtenants` command:

```text

  Examples:

    mc subtenants --mode list 					list all subtenants
    mc subtenants --mode template --subtenant  	create a template file for 
    mc subtenants --mode create --file  		create subtenant 
    mc subtenants --mode info --subtenantid  	subtenant info for specified id
    mc subtenants --mode delete --subtenantid  	delete subtenant with specified id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.