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
Usage: mc workorder|wo [options]

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

    mdsp workorder --mode list 				list all workorders
    mdsp workorder --mode template --workorder  	create a template file for 
    mdsp workorder --mode create --file  		create workorder 
    mdsp workorder --mode update --file  --handle  	 update workorder 
    mdsp workorder --mode info --handle  	workorder info for specified id
    mdsp workorder --mode delete --handle  	delete workorder with specified id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.