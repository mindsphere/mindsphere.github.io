---
title: MindSphere CLI -  mdsp aggregates Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp aggregates Command

Syntax:

```bash
mdsp aggregates
```

Help:

```bash
mdsp aggregates --help
```

Alternative form:

```bash
mc aggregates
```

(The CLI was using `mc` as default command name in older versions)

## Description

list timeseries aggregates *

## Usage

Parameter list:

```text
Usage: mc aggregates|ag [options]

list timeseries aggregates *

Options:
  -i, --assetid               mindsphere asset id
  -n, --aspectname         mindsphere aspect name
  -f, --from                     begining of the time range to read
  -t, --to                         end of the time range to read
  -r, --intervalvalue   interval duration for the aggregates in interval units
  -u, --intervalunit     interval duration unit [minute |hour |day |week | month]
  -s, --select                 comma separated list of variable names
  -d, --download             download aggregates to specified file
  -a, --all                            show all aggregates not just average, min, max, sum and sd
  -l, --local                          use localtime in aggregate list
  -c, --count                   number of aggregates in response
  -p, --passkey               passkey
  -y, --retry                  retry attempts before giving up (default: "3")
  -v, --verbose                        verbose output
  -h, --help                           display help for command

```

## Examples

Here are some examples of how to use the `mdsp aggregates` command:

```text

  Examples:

    mc aggregates --asssetid 1234567..ef --aspectname Environment   	list recent aggregates for aspect Environment
    mc aggregates --asssetid 1234567..ef --aspectname Environment --select Temperature 
									list recent temperature aggregates 
    mc aggregates --asssetid 1234567..ef --aspectname Environment --select Temperature --all 
									list all recent temperature aggregates

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.