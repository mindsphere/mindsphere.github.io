---
title: MindSphere CLI -  mdsp download-file Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp download-file Command

Syntax:

```bash
mdsp download-file
```

Help:

```bash
mdsp download-file --help
```

Alternative form:

```bash
mc download-file
```

(The CLI was using `mc` as default command name in older versions)

## Description

download the file from mindsphere file service *

## Usage

Parameter list:

```text
Usage: mc download-file|df [options]

download the file from mindsphere file service *

Options:
  -f, --file   file to download from the file service
  -h, --filepath [filepath]    file path in the mindsphere (default: "")
  -i, --assetid       mindsphere asset id
  -p, --passkey       passkey
  -y, --retry          retry attempts before giving up (default: "3")
  -v, --verbose                verbose output
  --help                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp download-file` command:

```text

  Examples:

    mc download-file -f CHANGELOG.md  --assetid 5..f  				 download file CHANGELOG.md from specified asset
    mc download-file --file  CHANGELOG.md  --assetid 5...f --filepath upload 	 download file upload/CHANGELOG.md from specified asset
    mc download-file --file  upload/CHANGELOG.md  --assetid 5...f 		 download file upload/CHANGELOG.md from specified asset

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.