---
title: MindSphere CLI -  mdsp unregister-diagnostic Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp unregister-diagnostic Command

Syntax:

```bash
mdsp unregister-diagnostic
```

Help:

```bash
mdsp unregister-diagnostic --help
```

Alternative form:

```bash
mc unregister-diagnostic
```

(The CLI was using `mc` as default command name in older versions)

## Description

unregister agent from diagnostic *

## Usage

Parameter list:

```text
Usage: mc unregister-diagnostic|ud [options]

unregister agent from diagnostic *

Options:
  -c, --config   config file with agent configuration (default: "agentconfig.json")
  -i, --agentid      agent id
  -k, --passkey      passkey
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp unregister-diagnostic` command:

```text

  Examples:

    mdsp ud -k mypasskey
    mdsp unregister-diagnostic --config someagent.json -passkey mypasskey

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.