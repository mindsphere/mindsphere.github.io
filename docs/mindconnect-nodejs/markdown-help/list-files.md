---
title: MindSphere CLI -  mdsp list-files Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp list-files Command

Syntax:

```bash
mdsp list-files
```

Alternative form:

```bash
mc list-files
```

(The CLI was using `mc` as default command name in older versions)

## Description

list files stored with the asset *

## Usage

List of all parameters and their description:

```text
Usage: mc list-files|ls [options]

list files stored with the asset *

Options:
  -i, --assetid   mindsphere asset id
  -f, --filter [filter]    filter (see: https://developer.mindsphere.io/apis/iot-iotfile/api-iotfile-references-filtering.html)
  -k, --passkey   passkey
  -y, --retry      retry attempts before giving up (default: "3")
  -v, --verbose            verbose output
  -h, --help               display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc ls --assetid 1234...ef --passkey mypasskey 				list all files for assetid
    mc ls --assetid 1234...ef --filter "path=upload*" --passkey mypasskey 	list all files where path contains upload

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.