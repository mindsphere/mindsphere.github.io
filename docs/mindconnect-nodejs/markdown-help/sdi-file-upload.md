---
title:  CLI -  mdsp sdi-file-upload Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp sdi-file-upload Command

Syntax:

```bash
mdsp sdi-file-upload
```

Help:

```bash
mdsp sdi-file-upload --help
```

Alternative form:

```bash
mc sdi-file-upload
```

(The CLI was using `mc` as default command name in older versions)

## Description

upload file to SDI *

## Usage

Parameter list:

```text
Usage: mc sdi-file-upload|sdu [options]

upload file to SDI *

Options:
  -f, --file           file to upload to SDI
  -h, --filepath   file path in SDI
  -m, --mime [mime-type]     mime type of the file (default: automatic recognition)
  -y, --retry        retry attempts before giving up (default: "3")
  -k, --passkey     passkey
  -v, --verbose              verbose output
  --help                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-file-upload` command:

```text

  Examples:

    mdsp sdi-file-upload --file  			 upload file to SDI

  Restriction:

    This works only for SDI only tenants (without Integrated Data Lake)
    If you are {{site.productname}} Integrated Data Lake Customer use mdsp data-lake --mode upload command instead. 

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
