---
title: MindSphere CLI -  mdsp sdi-data-queries Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp sdi-data-queries Command

Syntax:

```bash
mdsp sdi-data-queries
```

Help:

```bash
mdsp sdi-data-queries --help
```

Alternative form:

```bash
mc sdi-data-queries
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data queries for SDI *

## Usage

Parameter list:

```text
Usage: mc sdi-data-queries|sdq [options]

manage data queries for SDI *

Options:
  -m, --mode [list|create|update|template|info|delete|latest]  list | create | update | template | info | delete | latest (default: "list")
  -d, --query                                           data query file with definition for --mode create or update command
  -i, --queryid                                       the query id for --mode info, update or delete command
  -o, --overwrite                                              overwrite template file if it already exists
  -r, --result                                         result file for --mode latest (default: "sdi.query.latest.mdsp.json")
  -k, --passkey                                       passkey
  -y, --retry                                          retry attempts before giving up (default: "3")
  -v, --verbose                                                verbose output
  -h, --help                                                   display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-data-queries` command:

```text

  Examples:

    mdsp sdi-data-queries --mode list 		 list all sdi dataqueries
    mdsp sdi-data-queries --mode template 	 create template file
    mdsp sdi-data-queries --mode create --query  	 create sdi data query
    mdsp sdi-data-queries --mode update --query  --queryid  	update sdi data query
    mdsp sdi-data-queries --mode info --queryid    		 get sdi data query info
    mdsp sdi-data-queries --mode latest --queryid    		 get latest query results
    mdsp sdi-data-queries --mode delete --queryid  		 delete sdi data query

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.