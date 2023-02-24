---
title:  CLI -  mdsp sdi-data-types Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp sdi-data-types Command

Syntax:

```bash
mdsp sdi-data-types
```

Help:

```bash
mdsp sdi-data-types --help
```

Alternative form:

```bash
mc sdi-data-types
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data types for SDI *

## Usage

Parameter list:

```text
Usage: mc sdi-data-types|sdy [options]

manage data types for SDI *

Options:
  -m, --mode [list|create|template|info|delete|addpatterns|suggest]  command mode (default: "list")
  -f, --for [datatype|pattern|suggest]                               parameter for --mode template (default: "datatype")
  -d, --datatype                                           data type file with definition for --mode create or update command
  -p, --pattern                                             pattern file with definition for --mode addpatterns command
  -s, --samplevalues                                   file with sample values
  -t, --testvalues                                        file with sample values
  -i, --datatypename                                   the datatype id
  -o, --overwrite                                                    overwrite template file if it already exists
  -k, --passkey                                             passkey
  -y, --retry                                                retry attempts before giving up (default: "3")
  -v, --verbose                                                      verbose output
  -h, --help                                                         display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-data-types` command:

```text

  Examples:

    mdsp sdi-data-types --mode list 				 list all sdi data types
    mdsp sdi-data-types --mode template --for datatype 		 create template file for --mode create command
    mdsp sdi-data-types --mode template --for pattern 		 create pattern file for --mode addpattern command
    mdsp sdi-data-types --mode template --for suggest 		 create samples files for --mode suggest command
    mdsp sdi-data-types --mode create --datatype  	 create sdi data type
    mdsp sdi-data-types --mode info --datatypename    		 get sdi data type info
    mdsp sdi-data-types --mode delete --datatypename  		 delete sdi data type
    mdsp sdi-data-types --mode suggest --samplevalues  --testvalues                                                                               		 suggest patterns from sample data

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
