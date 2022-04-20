---
title: MindSphere CLI -  mdsp asset-info Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp asset-info Command

Syntax:

```bash
mdsp asset-info
```

Alternative form:

```bash
mc asset-info
```

(The CLI was using `mc` as default command name in older versions)

## Description

get infos about asset *

## Usage

List of all parameters and their description:

```text
Usage: mc asset-info|ai [options]

get infos about asset *

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

    mc asset-info --assetid 123456...ef 	 print out infos about asset with id 132456...ef

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.