---
title: MindSphere CLI -  mdsp onboard Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp onboard Command

Syntax:

```bash
mdsp onboard
```

Alternative form:

```bash
mc onboard
```

(The CLI was using `mc` as default command name in older versions)

## Description

onboard the agent with configuration stored in the config file

## Usage

List of all parameters and their description:

```text
Usage: mc onboard|ob [options]

onboard the agent with configuration stored in the config file

Options:
  -c, --config   config file with agent configuration (default: "agentconfig.json")
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -y, --retry         retry attempts before giving up (default: "3")
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc ob   				uses default agentconfig.json
    mc onboard --config agent.json 	uses specified configuration file
    mc onboard --config agent.json --cert private.key 	uses specified key for RSA_3072 profile

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.