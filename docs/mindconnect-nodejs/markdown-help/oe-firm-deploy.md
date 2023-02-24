---
title:  CLI -  mdsp oe-firm-deploy Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp oe-firm-deploy Command

Syntax:

```bash
mdsp oe-firm-deploy
```

Help:

```bash
mdsp oe-firm-deploy --help
```

Alternative form:

```bash
mc oe-firm-deploy
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create, update firmware deployment task(s) (open edge) *

## Usage

Parameter list:

```text
Usage: mc oe-firm-deploy|oefd [options]

list, create, update firmware deployment task(s) (open edge) *

Options:
  -m, --mode [list|create|update|info|check|accept|template]  list | create | update | info | check | accept |template (default: "list")
  -i, --id                                                the installation task id
  -d, --deviceid                                    deviceid to filter
  -r, --realeaseid                                firmware realease id
  -t, --type                                            filter for tasks of a specific type (firmware, app, etc)
  -s, --status  [closed|open]                         filter based on task progress, one of “closed” or “open”
  -f, --file                                            .mdsp.json file with app data
  -o, --overwrite                                             overwrite template file if it already exists
  -k, --passkey                                      passkey
  -y, --retry                                         retry attempts before giving up (default: "3")
  -v, --verbose                                               verbose output
  -h, --help                                                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp oe-firm-deploy` command:

```text

  Examples:

    mdsp oe-firm-deploy --mode list --deviceid "7d018c..." 
	list all firmware deployment taks on a specified device.
    mdsp oe-firm-deploy --mode template 
	create template files to define an firmware installation/update task.
    mdsp oe-firm-deploy --mode create --file edge.install.firmware.mdsp.json 
	creates a new firmware installtion tak.
    mdsp oe-firm-deploy --mode update --id "7d018c..." --file edge.firmware.status.mdsp.json 
	update a firmware installation task from status template file.
    mdsp oe-firm-deploy --mode info --id 
	get details of a firmware installation task.
    mdsp oe-firm-deploy --mode check --deviceid  --realeaseid   
	check terms and condition of a firmware realease on a a specific device.
    mdsp oe-firm-deploy --mode accept --deviceid  --realeaseid  
	accept terms and condition of a firmware realease on a a specific device.

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
