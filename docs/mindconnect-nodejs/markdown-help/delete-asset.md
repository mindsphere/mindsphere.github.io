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

Help:

```bash
mdsp delete-asset --help
```

Alternative form:

```bash
mc delete-asset
```

(The CLI was using `mc` as default command name in older versions)

## Description

delete asset with id  from mindsphere *

## Usage

Parameter list:

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

Here are some examples of how to use the `mdsp delete-asset` command:

```text

  Examples:

    mc delete-asset --assetid 123456...ef 		delete asset with id 132456...ef

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.