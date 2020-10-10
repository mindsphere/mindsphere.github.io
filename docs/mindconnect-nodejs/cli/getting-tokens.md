---
title: MindConnect NodeJS - CLI - Getting Tokens
next:
  - title: Overview
    link: index
  - title: Setting up the CLI
    link: setting-up-the-cli
---

<!-- @format -->

# MindConnect NodeJS - CLI - <small>Getting Tokens</small>

## Introduction

Sometimes it is required during development to have an easy way to get a valid service token or agent token for the tools which are using MindSphere API (curl, postman...)

The CLI provides two utility commands which can generate a service credential token and agent token.

## Get Service Token (`mc service-token`)

This is a utility command which the developers can use to get the valid MindSphere API token.

```bash
mc service-token --help
Usage: mc service-token|stk [options]

displays the service token for use in other tools (e.g. postman) *

Options:
  -k, --passkey <passkey>  passkey
  -y, --retry <number>     retry attempts before giving up (default: "3")
  -v, --verbose            verbose output
  -h, --help               display help for command

  Examples:

    mc service-token --passkey mypasskey                displays the service token (encoded only)
    mc service-token --passkey mypasskey --verbose      displays the service token (encoded and decoded)

  Important:

  Authentication with service credentials or app credentials

        - append option [--passkey <your passkey>] to the command
        - create environment variable MDSP_PASSKEY with your current passkey

  Authentication with borrowed session cookie and xsrf-token cookie

        - create environment variables MDSP_HOST , MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies

  Full Documentation:

    https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/setting-up-the-cli.html
```

### Example

The command

```bash
mc service-token --passkey {yourpasskey}
```

would generate a token for further use in other tools

```text
eyJhbGciOiJIUzI1NiIsImprdSI6Imh0dHBzOi8vc29tZXRlbmFudC5sb2NhbGhvc3Q6ODA4MC91YWEvdG9rZW5fa2V5cyIsImtpZCI6ImtleS1pZC0xIiwidHlwIjoiSldUIn0.eyJqdGkiOiI2YTFmYzUyMTRjMGI0ZjEwODkzZjhhOGRlYzk4NzMxMSIsInN1YiI6InNvbWV1c2VyIiwic2NvcGUiOlsibWRzcDpjb3JlOk5vUmlnaHRzVXNlciJdLCJjbGllbnRfaWQiOiJuaWNlIHRyeSIsImNpZCI6ImJ1dCB0aGlzIGlzIG5vdCIsImF6cCI6ImEgcmVhbCB0b2tlbiIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJyZXZfc2lnIjoiMThiYzAzZWUiLCJpYXQiOjE1NTgwMTI4NDksImV4cCI6MTU1ODAxNDY0OSwiaXNzIjoiaHR0cHM6Ly9zb21ldGVuYW50LnBpYW0uZXUxLm1pbmRzcGhlcmUuaW8vb2F1dGgvdG9rZW4iLCJ6aWQiOiJzb21ldGVuYW50IiwiYXVkIjpbInNvbWV1c2VyIl0sInRlbiI6ImNhc3RpZGV2Iiwic2NoZW1hcyI6WyJ1cm46c2llbWVuczptaW5kc3BoZXJlOmlhbTp2MSJdLCJjYXQiOiJjbGllbnQtdG9rZW46djEifQ.aLNsiCC8gpA7P0KG5D8Kw1vkaKqDk4SF4vSfAjvHP14
```

You can run the command like this to pipe the output directly to the clipboard:

```bash
mc service-token --passkey {yourpasskey} | clip
```

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    running the `mc service-token --passkey {yourpasskey} --verbose` command will also print out the decrypted token content.
<!-- prettier-ignore-end -->

## Get Agent Token (`mc agent-token`)

This creates a valid agent credentials token for the MindSphere APIs.

```bash
mc agent-token --help

Usage: agent-token|atk [options]

displays the agent token for use in other tools (e.g. postman)

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -k, --passkey <passkey>     passkey
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc agent-token                        uses default agentconfig.json
    mc agent-token --config agent.json    uses specified configuration file
    mc agent-token --cert private.key     uses specified key for RSA_3072 profile
    mc agent-token --verbose              displays encoded and decoded version of the token
```

### Example

Generate a token

```bash
mc agent-token --passkey {yourpasskey}
```

Generate a token and copy to clipboard:

```bash
mc agent-token --passkey {yourpasskey} | clip
```

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    running the ```mc agent-token --passkey {yourpasskey} --verbose``` command will also print out the decrypted token content.
<!-- prettier-ignore-end -->
