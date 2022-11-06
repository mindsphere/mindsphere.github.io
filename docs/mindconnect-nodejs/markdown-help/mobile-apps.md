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

Help:

```bash
mdsp mobile-apps --help
```

Alternative form:

```bash
mc mobile-apps
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete mobile apps *

## Usage

Parameter list:

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

Here are some examples of how to use the `mdsp mobile-apps` command:

```text

  Examples:

    mdsp mobile-apps --mode list 					list mobile apps
    mdsp mobile-apps --mode template --type [android|ios] 	create template file for mobileapp
    mdsp mobile-apps --mode create --file [android|ios].mobileapp.mdsp.json	create mobileapp
    mdsp mobile-apps --mode info --appid 			mobile app info
    mdsp mobile-apps --mode delete --appid 		delete mobile app

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.