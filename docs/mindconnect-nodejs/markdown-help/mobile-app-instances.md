---
title: MindSphere CLI -  mdsp mobile-app-instances Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp mobile-app-instances Command

Syntax:

```bash
mdsp mobile-app-instances
```

Alternative form:

```bash
mc mobile-app-instances
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete mobile app instances *

## Usage

List of all parameters and their description:

```text
Usage: mc mobile-app-instances|mbi [options]

list, create or delete mobile app instances *

Options:
  -m, --mode [list|info|create|delete|update|template]  mode [list | info | create | delete | update | template] (default: "list")
  -p, --appid                                    mobile app id
  -i, --instanceid                               mobile app instance id
  -f, --file                                      mobile app file [mobileapp.instance.mdsp.json]
  -o, --overwrite                                       overwrite template files
  -k, --passkey                                passkey
  -y, --retry                                   retry attempts before giving up (default: "3")
  -v, --verbose                                         verbose output
  -h, --help                                            display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc mobile-app-instances --appid  --mode list 	list mobile apps
    mc mobile-app-instances --appid  --mode template 	create template file for mobile app instance
    mc mobile-app-instances --appid  --mode create --file mobileapp.instance.mdsp.json 
						create mobile app instance
    mc mobile-app-instances --appid  --mode info --instanceid 
						mobile app instance info
    mc mobile-app-instances --appid  --mode delete --instanceid 
						delete mobile app instance

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.