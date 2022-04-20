---
title: MindSphere CLI -  mdsp offboard-agent Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp offboard-agent Command

Syntax:

```bash
mdsp offboard-agent
```

Alternative form:

```bash
mc offboard-agent
```

(The CLI was using `mc` as default command name in older versions)

## Description

offboards the agent in the mindsphere *

## Usage

List of all parameters and their description:

```text
Usage: mc offboard-agent|of [options]

offboards the agent in the mindsphere *

Options:
  -c, --config   config file for agent configuration
  -i, --agentid      agent id
  -k, --passkey      passkey
  -y, --retry         retry attempts before giving up (default: "3")
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc offboard-agent --config agent.json --passkey passkey... 	 offboard agent with agent.json configuration
    mc offboard-agent --agentid 12345..ef --passkey passkey... 	 offboard agent with 12345..ef agentid

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.