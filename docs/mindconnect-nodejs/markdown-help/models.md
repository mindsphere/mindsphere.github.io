---
title: MindSphere CLI -  mdsp models Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp models Command

Syntax:

```bash
mdsp models
```

Help:

```bash
mdsp models --help
```

Alternative form:

```bash
mc models
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete analytic models *

## Usage

Parameter list:

```text
Usage: mc models|ml [options]

list, create or delete analytic models *

Options:
  -m, --mode [list|create|delete|update|info|download|template]  mode [list | create | delete | update | info | download| template] (default: "list")
  -n, --modelname                                     modelname
  -t, --modeltype                                     modeltype
  -d, --modeldesc                                     modeldesc (default: "created with mindsphere CLI")
  -i, --modelid                                         mindsphere model id
  -f, --metadata                                       model metadata file (default: "model.metadata.mdsp.json")
  -r, --version                                         model version for download (default: "last")
  -p, --payload                                         model payload file (default: "model.payload.mdsp.json")
  -i, --modelid                                         mindsphere model id
  -a, --modelauthor                                 model author (default: "created by mindsphere CLI")
  -k, --passkey                                         passkey
  -y, --retry                                            retry attempts before giving up (default: "3")
  -v, --verbose                                                  verbose output
  -h, --help                                                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp models` command:

```text

  Examples:

    mc models --mode template --modeltype core.basicmodel --modelname MyModel 	 creates a template for model
    mc models --mode create --metadata model.metadata.mdsp.json --payload model.payload.mdsp.json 
							 creates a model from specified files
    mc models --mode list 				 lists all models in mindsphere
    mc models --mode delete --modelid 1234567..ef 	 deletes model with specified id
    mc models --mode info --modelid 123456...ef 	 print out infos about model with id 132456...ef
    mc models --mode download --modelid 123456...ef 	 download model with id 132456...ef

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.