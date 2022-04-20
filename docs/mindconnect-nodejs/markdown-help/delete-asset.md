---
title: MindSphere CLI -  mdsp delete-asset Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp delete-asset Command

Syntax:

```bash
mdsp delete-asset
```

Alternative form:

```bash
mc delete-asset
```

(The CLI was using `mc` as default command name in older versions)

## Description

delete asset with id  from mindsphere *

## Usage

List of all parameters and their description:

```text
Usage: mc delete-asset|da [options]

delete asset with id  from mindsphere *

Options:
  -i, --assetid   mindsphere asset id
  -k, --passkey   passkey
  -y, --retry      retry attempts before giving up (default: "3")
  -v, --verbose            verbose output
  -h, --help               display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc delete-asset --assetid 123456...ef 		delete asset with id 132456...ef

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.