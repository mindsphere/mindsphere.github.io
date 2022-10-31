---
title: MindSphere CLI -  mdsp oe-app-deploy Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp oe-app-deploy Command

Syntax:

```bash
mdsp oe-app-deploy
```

Help:

```bash
mdsp oe-app-deploy --help
```

Alternative form:

```bash
mc oe-app-deploy
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create, update app installation task(s) (open edge) *

## Usage

Parameter list:

```text
Usage: mdsp oe-app-deploy|oead [options]

list, create, update app installation task(s) (open edge) *

Options:
  -m, --mode [list|create|update|accept|remove|template|info|check]  list | create | update | accept | remove | template | info | check
                                                                     (default: "list")
  -i, --id                                                       the installation task id
  -d, --deviceid                                           deviceid to filter
  -r, --realeaseid                                       software realease id
  -f, --file                                                   .mdsp.json file with app data
  -s, --status  [closed|open]                                closed | open
  -o, --overwrite                                                    overwrite template file if it already exists
  -k, --passkey                                             passkey
  -y, --retry                                                retry attempts before giving up (default: "3")
  -v, --verbose                                                      verbose output
  -h, --help                                                         display help for command

```

## Examples

Here are some examples of how to use the `mdsp oe-app-deploy` command:

```text

  Examples:

    mc oe-app-deploy --mode list --deviceid "7d018c..." 
	list all installation and removal tasks of a specified device.
    mc oe-app-deploy --mode template 
	create template files to define an app installation/removal task.
    mc oe-app-deploy --mode create --file edge.install.app.mdsp.json 
	creates a new installation app taks.
    mc oe-app-deploy --mode remove --file edge.remove.app.mdsp.json 
	creates a new removal app task.
    mc oe-app-deploy --mode update --id "7d018c..." --file edge.app.status.mdsp.json 
	update an installation/removal task from status template file.
    mc oe-app-deploy --mode info --id 
	get details of an installation task.
    mc oe-app-deploy --mode check --deviceid  --realeaseid   
	check terms and condition of a software realease on a a specific device.
    mc oe-app-deploy --mode accept --deviceid  --realeaseid  
	accept terms and condition of a software realease on a a specific device.

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.