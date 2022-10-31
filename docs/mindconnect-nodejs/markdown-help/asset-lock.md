---
title: MindSphere CLI -  mdsp asset-lock Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp asset-lock Command

Syntax:

```bash
mdsp asset-lock
```

Help:

```bash
mdsp asset-lock --help
```

Alternative form:

```bash
mc asset-lock
```

(The CLI was using `mc` as default command name in older versions)

## Description

lock/unlock asset model modifications *

## Usage

Parameter list:

```text
Usage: mdsp asset-lock|lck [options]

lock/unlock asset model modifications *

Options:
  -m, --mode [info|lock|unlock]  mode [info | lock | unlock] (default: "info")
  -k, --passkey         passkey
  -y, --retry            retry attempts before giving up (default: "3")
  -v, --verbose                  verbose output
  -h, --help                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp asset-lock` command:

```text

  Examples:

    mc asset-lock --mode info 				 print out the asset model lock state
    mc asset-lock --mode lock 				 lock the asset model and disable modifications
    mc asset-lock --mode unlock 			 unlock the asset model and enable modifications

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.