---
title:  CLI -  mdsp sdi-search-schemas Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp sdi-search-schemas Command

Syntax:

```bash
mdsp sdi-search-schemas
```

Help:

```bash
mdsp sdi-search-schemas --help
```

Alternative form:

```bash
mc sdi-search-schemas
```

(The CLI was using `mc` as default command name in older versions)

## Description

search SDI schemas *

## Usage

Parameter list:

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

Here are some examples of how to use the `mdsp sdi-search-schemas` command:

```text

  Examples:

    mdsp sdi-search-schemas --mode template 	 create template file
    mdsp sdi-search-schemas --mode search --searchrequest  	 search for sdi schemas

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
