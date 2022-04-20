---
title: MindSphere CLI -  mdsp sdi-search-schemas Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp sdi-search-schemas Command

Syntax:

```bash
mdsp sdi-search-schemas
```

Alternative form:

```bash
mc sdi-search-schemas
```

(The CLI was using `mc` as default command name in older versions)

## Description

search SDI schemas *

## Usage

List of all parameters and their description:

```text
Usage: mc sdi-search-schemas|sds [options]

search SDI schemas *

Options:
  -m, --mode [template|search]         search | template (default: "search")
  -s, --searchrequest   search request for --search command (default: "sdi.searchrequest.mdsp.json")
  -o, --overwrite                      overwrite template file if it already exists
  -k, --passkey               passkey
  -y, --retry                  retry attempts before giving up (default: "3")
  -v, --verbose                        verbose output
  -h, --help                           display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc sdi-search-schemas --mode template 	 create template file
    mc sdi-search-schemas --mode search --searchrequest  	 search for sdi schemas

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.