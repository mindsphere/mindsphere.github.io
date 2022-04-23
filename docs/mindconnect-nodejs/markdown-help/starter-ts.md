---
title: MindSphere CLI -  mdsp starter-ts Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp starter-ts Command

Syntax:

```bash
mdsp starter-ts
```

Alternative form:

```bash
mc starter-ts
```

(The CLI was using `mc` as default command name in older versions)

## Description

creates a starter project in typescript #

## Usage

List of all parameters and their description:

```text
Usage: mc starter-ts|st [options]

creates a starter project in typescript #

Options:
  -d, --dir   directory name (default: "starterts")
  -v, --verbose              verbose output
  -h, --help                 display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc starter-ts 			 this creates a directory called starterts
    mc st --dir mindconnect-agent 	 this creates a directory called mindconnect-agent

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.