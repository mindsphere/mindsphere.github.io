---
title: MindSphere CLI -  mdsp oe-firm-deploy Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp oe-firm-deploy Command

Syntax:

```bash
mdsp oe-firm-deploy
```

Alternative form:

```bash
mc oe-firm-deploy
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create, update firmware deployment task(s) (open edge) *

## Usage

List of all parameters and their description:

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

These are some examples of how to use the command. 

```text

  Examples:

    mc oe-firm-deploy --mode list --deviceid "7d018c..." 
	list all firmware deployment taks on a specified device.
    mc oe-firm-deploy --mode template 
	create template files to define an firmware installation/update task.
    mc oe-firm-deploy --mode create --file edge.install.firmware.mdsp.json 
	creates a new firmware installtion tak.
    mc oe-firm-deploy --mode update --id "7d018c..." --file edge.firmware.status.mdsp.json 
	update a firmware installation task from status template file.
    mc oe-firm-deploy --mode info --id 
	get details of a firmware installation task.
    mc oe-firm-deploy --mode check --deviceid  --realeaseid   
	check terms and condition of a firmware realease on a a specific device.
    mc oe-firm-deploy --mode accept --deviceid  --realeaseid  
	accept terms and condition of a firmware realease on a a specific device.

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.