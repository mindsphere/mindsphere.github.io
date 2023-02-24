---
title:  CLI -  mdsp oe-app-deploy Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp oe-app-deploy Command

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
Usage: mc oe-app-deploy|oead [options]

list, create, update app installation task(s) (open edge) *

Options:
  -m, --mode [list|create|update|accept|remove|template|info|check]  list | create | update | accept | remove | template | info | check
                                                                     (default: "list")
  -i, --id                                                       the installation task id
  -d, --deviceid                                           deviceid to filter
  -r, --releaseid                                         software release id
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

    mdsp oe-app-deploy --mode list --deviceid "7d018c..." 
	list all installation and removal tasks of a specified device.
    mdsp oe-app-deploy --mode template 
	create template files to define an app installation/removal task.
    mdsp oe-app-deploy --mode create --file edge.install.app.mdsp.json 
	creates a new installation app taks.
    mdsp oe-app-deploy --mode remove --file edge.remove.app.mdsp.json 
	creates a new removal app task.
    mdsp oe-app-deploy --mode update --id "7d018c..." --file edge.app.status.mdsp.json 
	update an installation/removal task from status template file.
    mdsp oe-app-deploy --mode info --id 
	get details of an installation task.
    mdsp oe-app-deploy --mode check --deviceid  --releaseid   
	check terms and condition of a software release on a a specific device.
    mdsp oe-app-deploy --mode accept --deviceid  --releaseid  
	accept terms and condition of a software release on a a specific device.

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
