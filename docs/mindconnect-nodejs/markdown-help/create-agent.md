---
title: MindSphere CLI -  mdsp create-agent Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp create-agent Command

Syntax:

```bash
mdsp create-agent
```

Alternative form:

```bash
mc create-agent
```

(The CLI was using `mc` as default command name in older versions)

## Description

create an agent in the mindsphere *

## Usage

List of all parameters and their description:

```text
Usage: mc create-agent|ca [options]

create an agent in the mindsphere *

Options:
  -c, --config    config file for agent configuration
  -r, --cert [privatekey]      required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -n, --agentname   agent name (default: "Agent1650478587868")
  -p, --parentid     parent asset id
  -f, --profile       security profile [SHARED_SECRET|RSA_3072] (default: "SHARED_SECRET")
  -k, --passkey       passkey
  -y, --retry          retry attempts before giving up (default: "3")
  -v, --verbose                verbose output
  -h, --help                   display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc create-agent --config agent.json --passkey passkey... 	 create agent with default parameters

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.