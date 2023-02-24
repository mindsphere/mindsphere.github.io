---
title:  CLI -  mdsp delete-file Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp delete-file Command

Syntax:

```bash
mdsp delete-file
```

Help:

```bash
mdsp delete-file --help
```

Alternative form:

```bash
mc delete-file
```

(The CLI was using `mc` as default command name in older versions)

## Description

delete the file from {{site.productname}} file service *

## Usage

Parameter list:

```text
Usage: mc delete-file|de [options]

delete the file from {{site.productname}} file service *

Options:
  -f, --file   file to delete from the file service
  -h, --filepath [filepath]  file path in the {{site.productname}} (default: "")
  -i, --assetid     {{site.productname}} asset id
  -p, --passkey     passkey
  -y, --retry        retry attempts before giving up (default: "3")
  -v, --verbose              verbose output
  --help                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp delete-file` command:

```text

  Examples:

    mdsp delete-file -f CHANGELOG.md  --assetid 5..f  				 delete file CHANGELOG.md from specified asset
    mdsp delete-file --file  CHANGELOG.md  --assetid 5...f --filepath upload 	 delete file upload/CHANGELOG.md from specified asset
    mdsp delete-file --file  upload/CHANGELOG.md  --assetid 5...f 		 delete file upload/CHANGELOG.md from specified asset

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
