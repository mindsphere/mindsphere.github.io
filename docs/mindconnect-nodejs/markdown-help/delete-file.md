---
title: MindSphere CLI -  mdsp delete-file Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp delete-file Command

Syntax:

```bash
mdsp delete-file
```

Alternative form:

```bash
mc delete-file
```

(The CLI was using `mc` as default command name in older versions)

## Description

delete the file from mindsphere file service *

## Usage

List of all parameters and their description:

```text
Usage: mc delete-file|de [options]

delete the file from mindsphere file service *

Options:
  -f, --file   file to delete from the file service
  -h, --filepath [filepath]  file path in the mindsphere (default: "")
  -i, --assetid     mindsphere asset id
  -p, --passkey     passkey
  -y, --retry        retry attempts before giving up (default: "3")
  -v, --verbose              verbose output
  --help                     display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc delete-file -f CHANGELOG.md  --assetid 5..f  				 delete file CHANGELOG.md from specified asset
    mc delete-file --file  CHANGELOG.md  --assetid 5...f --filepath upload 	 delete file upload/CHANGELOG.md from specified asset
    mc delete-file --file  upload/CHANGELOG.md  --assetid 5...f 		 delete file upload/CHANGELOG.md from specified asset

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.