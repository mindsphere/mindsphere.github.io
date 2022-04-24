---
title: MindSphere CLI -  mdsp renew-agent Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp renew-agent Command

Syntax:

```bash
mdsp renew-agent
```

Help:

```bash
mdsp renew-agent --help
```

Alternative form:

```bash
mc renew-agent
```

(The CLI was using `mc` as default command name in older versions)

## Description

renews the agent secrets  *

## Usage

Parameter list:

```text
Usage: mc renew-agent|rn [options]

renews the agent secrets  *

Options:
  -c, --config   config file for agent configuration
  -k, --passkey      passkey
  -y, --retry         retry attempts before giving up (default: "3")
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp renew-agent` command:

```text

  Examples:

    mc renew-agent --config agent.json --passkey passkey... 	 renew agent secrets in agent.json configuration

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.