---
title: MindSphere CLI -  mdsp tenant Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp tenant Command

Syntax:

```bash
mdsp tenant
```

Help:

```bash
mdsp tenant --help
```

Alternative form:

```bash
mc tenant
```

(The CLI was using `mc` as default command name in older versions)

## Description

create or delete tenant legal configuration and logo *

## Usage

Parameter list:

```text
Usage: mc tenant|ti [options]

create or delete tenant legal configuration and logo *

Options:
  -m, --mode [info|create|delete|upload|template]  mode [info | create | delete | upload | template] (default: "info")
  -f, --file                                 .mdsp.json file with legal configuration or logo
  -k, --passkey                           passkey
  -y, --retry                              retry attempts before giving up (default: "3")
  -v, --verbose                                    verbose output
  -h, --help                                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp tenant` command:

```text

  Examples:

    mdsp tenant 					 prints out the tenant information
    mdsp tenant --mode info 			 prints out the tenant information
    mdsp tenant --mode template 			 creates template file with legal configuration
    mdsp tenant --mode delete 			 deletes legal configuration
    mdsp tenant --mode create --file  	 creates legal configuration
    mdsp tenant --mode upload --file  	 uploads the company logo

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.