---
title: MindSphere CLI -  mdsp workorder Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp workorder Command

Syntax:

```bash
mdsp workorder
```

Help:

```bash
mdsp workorder --help
```

Alternative form:

```bash
mc workorder
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete workorders *

## Usage

Parameter list:

```text
Usage: mdsp workorder|wo [options]

list, create or delete workorders *

Options:
  -m, --mode [list|create|update|delete|template|info]  list | create | update | delete | template | info (default: "list")
  -f, --file                                      .mdsp.json file with workorder definition (default: "workorder.mdsp.json")
  -n, --workorder                            the workorder name
  -i, --handle                                  the workorder id
  -o, --overwrite                                       overwrite template file if it already exists
  -k, --passkey                                passkey
  -y, --retry                                   retry attempts before giving up (default: "3")
  -v, --verbose                                         verbose output
  -h, --help                                            display help for command

```

## Examples

Here are some examples of how to use the `mdsp workorder` command:

```text

  Examples:

    mc workorder --mode list 				list all workorders
    mc workorder --mode template --workorder  	create a template file for 
    mc workorder --mode create --file  		create workorder 
    mc workorder --mode update --file  --handle  	 update workorder 
    mc workorder --mode info --handle  	workorder info for specified id
    mc workorder --mode delete --handle  	delete workorder with specified id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.