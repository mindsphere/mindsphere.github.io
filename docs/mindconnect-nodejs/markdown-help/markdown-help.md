---
title: MindSphere CLI -  mdsp markdown-help Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp markdown-help Command

Syntax:

```bash
mdsp markdown-help
```

Alternative form:

```bash
mc markdown-help
```

(The CLI was using `mc` as default command name in older versions)

## Description

generates folder with markdown help commands for the CLI*

## Usage

List of all parameters and their description:

```text
Usage: mc markdown-help|mdhelp [options]

generates folder with markdown help commands for the CLI*

Options:
  -d, --dir   folder folder (default: "markdown-help")
  -o, --overwrite  overwrite files if they already exist
  -h, --help       display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc mdhelp

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.