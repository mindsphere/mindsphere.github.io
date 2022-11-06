---
title: MindSphere CLI -  mdsp asset-types Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp asset-types Command

Syntax:

```bash
mdsp asset-types
```

Help:

```bash
mdsp asset-types --help
```

Alternative form:

```bash
mc asset-types
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete asset types *

## Usage

Parameter list:

```text
Usage: mc asset-types|at [options]

list, create or delete asset types *

Options:
  -m, --mode [list|create|delete|template | info]  list | create | delete | template | info (default: "list")
  -f, --file                                 .mdsp.json file with asset type definition
  -i, --idonly                                     list only ids
  -s, --schema                             JSON Schema
  -n, --assettype                       the asset type name
  -c, --includeshared                              include shared asset types
  -k, --passkey                           passkey
  -y, --retry                              retry attempts before giving up (default: "3")
  -v, --verbose                                    verbose output
  -h, --help                                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp asset-types` command:

```text

  Examples:

    mdsp asset-types --mode list 					 list all asset types
    mdsp asset-types --mode list --assettype Pump		 list all asset types which are named Pump
    mdsp asset-types --mode template --assettype Pump 
	create a template file (Enironment.assettype.mdsp.json) for assettype Pump
    mdsp asset-types --mode create --file Pump.assettype.mdsp.json 
	create asset type Pump in MindSphere

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.