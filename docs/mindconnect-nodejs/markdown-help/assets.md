---
title:  CLI -  mdsp assets Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp assets Command

Syntax:

```bash
mdsp assets
```

Help:

```bash
mdsp assets --help
```

Alternative form:

```bash
mc assets
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete assets *

## Usage

Parameter list:

```text
Usage: mc assets|ast [options]

list, create or delete assets *

Options:
  -m, --mode [list|create|delete|template|tree]  mode [list | create | delete | template | tree] (default: "list")
  -f, --file                               .mdsp.json file with asset definition
  -n, --assetname                     assetname
  -p, --parentid                       parentid
  -e, --externalid                   externalid
  -i, --assetid                         {{site.productname}} asset id
  -t, --typeid                           typeid
  -d, --desc                               description (default: "created with {{site.productname}} CLI")
  -w, --twintype                       digital twin type [performance|simulation]
  -c, --includeshared                            include shared aspect types
  -k, --passkey                         passkey
  -y, --retry                            retry attempts before giving up (default: "3")
  -v, --verbose                                  verbose output
  -h, --help                                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp assets` command:

```text

  Examples:

    mdsp assets --mode create --typeid core.basicarea --assetname MyArea 	 creates an asset in {{site.productname}} of type basicarea
    mdsp assets --mode create --file MyPump.asset.mdsp.json 		 creates an asset from specified file template
    mdsp assets --mode list 						 lists all assets in {{site.productname}}
    mdsp assets --mode list --typeid mclib				 lists all assets in {{site.productname}} of type core.mclib
    mdsp assets --mode delete --assetid 1234567..ef 			 deletes asset with specified id from {{site.productname}}
    mdsp assets --mode template --typeid .Pump --assetname MyPump 
		creates a file template MyPump.asset.mdsp.json which can be use in create command

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
