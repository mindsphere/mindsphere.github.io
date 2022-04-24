---
title: MindSphere CLI -  mdsp agent-status Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp agent-status Command

Syntax:

```bash
mdsp agent-status
```

Help:

```bash
mdsp agent-status --help
```

Alternative form:

```bash
mc agent-status
```

(The CLI was using `mc` as default command name in older versions)

## Description

displays the agent status and agent onboarding status *

## Usage

Parameter list:

```text
Usage: mc agent-status|as [options]

displays the agent status and agent onboarding status *

Options:
  -c, --config   config file with agent configuration
  -a, --agentid      agentid
  -k, --passkey      passkey
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -y, --retry         retry attempts before giving up (default: "3")
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp agent-status` command:

```text

  Examples:

    mc agent-status   					uses default agentconfig.json
    mc agent-status --config agent.json 		uses specified configuration file
    mc agent-status --cert private.key 			uses specified key for RSA_3072 profile
    mc agent-status --passkey mypasskey 		displays also the online agent information
    mc agent-status --passkey mypasskey --verbose 	displays additionally the mappings and configuration

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.