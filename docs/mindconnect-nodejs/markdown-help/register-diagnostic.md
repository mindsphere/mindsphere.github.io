---
title: MindSphere CLI -  mdsp register-diagnostic Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp register-diagnostic Command

Syntax:

```bash
mdsp register-diagnostic
```

Alternative form:

```bash
mc register-diagnostic
```

(The CLI was using `mc` as default command name in older versions)

## Description

register agent for diagnostic *

## Usage

List of all parameters and their description:

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

These are some examples of how to use the command. 

```text

  Examples:

    mc rd -k mypasskey
    mc register-diagnostic --config someagent.json -passkey mypasskey

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.