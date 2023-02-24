---
title:  CLI -  mdsp register-diagnostic Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp register-diagnostic Command

Syntax:

```bash
mdsp register-diagnostic
```

Help:

```bash
mdsp register-diagnostic --help
```

Alternative form:

```bash
mc register-diagnostic
```

(The CLI was using `mc` as default command name in older versions)

## Description

register agent for diagnostic *

## Usage

Parameter list:

```text
Usage: mc register-diagnostic|rd [options]

register agent for diagnostic *

Options:
  -c, --config   config file with agent configuration (default: "agentconfig.json")
  -i, --agentid      agent id
  -k, --passkey      passkey
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp register-diagnostic` command:

```text

  Examples:

    mdsp rd -k mypasskey
    mdsp register-diagnostic --config someagent.json -passkey mypasskey

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
