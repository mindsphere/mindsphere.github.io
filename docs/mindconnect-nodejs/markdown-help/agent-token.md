---
title: MindSphere CLI -  mdsp agent-token Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp agent-token Command

Syntax:

```bash
mdsp agent-token
```

Help:

```bash
mdsp agent-token --help
```

Alternative form:

```bash
mc agent-token
```

(The CLI was using `mc` as default command name in older versions)

## Description

displays the agent token for use in other tools (e.g. postman)

## Usage

Parameter list:

```text
Usage: mc agent-token|atk [options]

displays the agent token for use in other tools (e.g. postman)

Options:
  -c, --config   config file with agent configuration (default: "agentconfig.json")
  -k, --passkey      passkey
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -y, --retry         retry attempts before giving up (default: "3")
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp agent-token` command:

```text

  Examples:

    mdsp agent-token   				uses default agentconfig.json
    mdsp agent-token --config agent.json 		uses specified configuration file
    mdsp agent-token --cert private.key 		uses specified key for RSA_3072 profile
    mdsp agent-token --verbose 			displays encoded and decoded version of the token

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.