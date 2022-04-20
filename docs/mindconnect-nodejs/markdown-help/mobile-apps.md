---
title: MindSphere CLI -  mdsp mobile-apps Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp mobile-apps Command

Syntax:

```bash
mdsp mobile-apps
```

Alternative form:

```bash
mc mobile-apps
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete mobile apps *

## Usage

List of all parameters and their description:

```text
Usage: mc mobile-apps|mb [options]

list, create or delete mobile apps *

Options:
  -m, --mode [list|info|create|delete|update|template]  mode [list | info | create | delete | update | template] (default: "list")
  -t, --type [ios|android]                              type [ios|android] (default: "android")
  -p, --appid                                    mobile app id
  -f, --file                                      mobile app file [ios|android].mobileapp.mdsp.json
  -a, --all                                             list full app information
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

    mc mobile-apps --mode list 					list mobile apps
    mc mobile-apps --mode template --type [android|ios] 	create template file for mobileapp
    mc mobile-apps --mode create --file [android|ios].mobileapp.mdsp.json	create mobileapp
    mc mobile-apps --mode info --appid 			mobile app info
    mc mobile-apps --mode delete --appid 		delete mobile app

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.