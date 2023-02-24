---
title:  CLI -  mdsp aspects Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp aspects Command

Syntax:

```bash
mdsp aspects
```

Help:

```bash
mdsp aspects --help
```

Alternative form:

```bash
mc aspects
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete aspects *

## Usage

Parameter list:

```text
Usage: mc aspects|asp [options]

list, create or delete aspects *

Options:
  -m, --mode [list|create|delete|convert|template|info]  list | create | delete | convert | template | info (default: "list")
  -f, --file                                       .mdsp.json file with aspect type definition
  -s, --schema                                   JSON Schema
  -n, --aspect                                   the aspect type name
  -p, --prefixflattened                                  prefix variable names with previous name when flattening schema
  -t, --targetonly                                       consider only variables which have target equal to aspect in schema
  -u, --untargeted                                       consider only variables which don't have target in schema
  -l, --length                                   default string length (default: "255")
  -b, --biglength                             default bigstring length (default: "5000")
  -i, --idonly                                           list only ids
  -c, --includeshared                                    include shared aspect types
  -k, --passkey                                 passkey
  -y, --retry                                    retry attempts before giving up (default: "3")
  -v, --verbose                                          verbose output
  -h, --help                                             display help for command

```

## Examples

Here are some examples of how to use the `mdsp aspects` command:

```text

  Examples:

    mdsp aspects --mode list 					 list all aspect types
    mdsp aspects --mode list --aspect Environment		 list all aspect types which are named Environment
    mdsp aspects --mode template --aspect Environment 
	create a template file (Enironment.aspect.mdsp.json) for aspect Environment
    mdsp aspects --mode create --file Environment.aspects.mdsp.json 
	create aspect type Environment in {{site.productname}}
    mdsp aspects --mode convert --schema Environment.schema.json --aspect Environment 
	 create a template file for aspect type Environment from JSON schema
    mdsp aspects --mode convert --schema Environment.schema.json --aspect Environment --prefixflattened 
	 prefixes the variable names with parent object names (e.g. Environment_Temperature)
    mdsp aspects --mode convert --schema Environment.schema.json --aspect Environment --targetonly 
	 select only variables from json schema with target property equal to assettype

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
