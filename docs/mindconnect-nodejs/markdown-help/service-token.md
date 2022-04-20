---
title: MindSphere CLI -  mdsp service-token Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp service-token Command

Syntax:

```bash
mdsp service-token
```

Alternative form:

```bash
mc service-token
```

(The CLI was using `mc` as default command name in older versions)

## Description

displays the service token for use in other tools (e.g. postman) *

## Usage

List of all parameters and their description:

```text
Usage: mc service-token|stk [options]

displays the service token for use in other tools (e.g. postman) *

Options:
  -k, --passkey   passkey
  -y, --retry      retry attempts before giving up (default: "3")
  -v, --verbose            verbose output
  -h, --help               display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc service-token --passkey mypasskey 		displays the service token (encoded only)
    mc service-token --passkey mypasskey --verbose 	displays the service token (encoded and decoded)

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.