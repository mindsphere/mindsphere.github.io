---
title: MindSphere CLI -  mdsp oe-app-inst Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp oe-app-inst Command

Syntax:

```bash
mdsp oe-app-inst
```

Help:

```bash
mdsp oe-app-inst --help
```

Alternative form:

```bash
mc oe-app-inst
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create, configure or delete app instance (open edge) *

## Usage

Parameter list:

```text
Usage: mdsp oe-app-inst|oeai [options]

list, create, configure or delete app instance (open edge) *

Options:
  -m, --mode [list|create|config|delete|template|info]  list | create | config | delete | template | info (default: "list")
  -i, --id                                          the app instance id
  -d, --deviceid                                    the device id
  -f, --file                                      .mdsp.json file with app inst data
  -o, --overwrite                                       overwrite template file if it already exists
  -k, --passkey                                passkey
  -y, --retry                                   retry attempts before giving up (default: "3")
  -v, --verbose                                         verbose output
  -h, --help                                            display help for command

```

## Examples

Here are some examples of how to use the `mdsp oe-app-inst` command:

```text

  Examples:

    mc oe-app-inst --mode list --deviceid  	list all app instances of device with deviceId.
    mc oe-app-inst --mode template 			create a template file for new app instance data.
    mc oe-app-inst --mode create --file edge.app.mdsp.json 
	creates a new app instance from template file.
    mc oe-app-inst --mode config --id  --file edge.appconfig.mdsp.json 
	configure an app instance from template file.
    mc oe-app-inst --mode info --id 		get details of an app instance.
    mc oe-app-inst --mode delete --id 	delete app instance configuration.

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.