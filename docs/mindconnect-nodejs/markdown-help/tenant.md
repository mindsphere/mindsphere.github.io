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

Alternative form:

```bash
mc tenant
```

(The CLI was using `mc` as default command name in older versions)

## Description

create or delete tenant legal configuration and logo *

## Usage

List of all parameters and their description:

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

These are some examples of how to use the command. 

```text

  Examples:

    mc tenant 					 prints out the tenant information
    mc tenant --mode info 			 prints out the tenant information
    mc tenant --mode template 			 creates template file with legal configuration
    mc tenant --mode delete 			 deletes legal configuration
    mc tenant --mode create --file  	 creates legal configuration
    mc tenant --mode upload --file  	 uploads the company logo

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.