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

Alternative form:

```bash
mc asset-types
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete asset types *

## Usage

List of all parameters and their description:

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

These are some examples of how to use the command. 

```text

  Examples:

    mc asset-types --mode list 					 list all asset types
    mc asset-types --mode list --assettype Pump		 list all asset types which are named Pump
    mc asset-types --mode template --assettype Pump 
	create a template file (Enironment.assettype.mdsp.json) for assettype Pump
    mc asset-types --mode create --file Pump.assettype.mdsp.json 
	create asset type Pump in MindSphere

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.