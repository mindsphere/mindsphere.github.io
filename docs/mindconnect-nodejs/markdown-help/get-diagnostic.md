---
title: MindSphere CLI -  mdsp get-diagnostic Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp get-diagnostic Command

Syntax:

```bash
mdsp get-diagnostic
```

Help:

```bash
mdsp get-diagnostic --help
```

Alternative form:

```bash
mc get-diagnostic
```

(The CLI was using `mc` as default command name in older versions)

## Description

get diagnostic information *

## Usage

Parameter list:

```text
Usage: mdsp get-diagnostic|gd [options]

get diagnostic information *

Options:
  -c, --config   config file with agent configuration
  -a, --agentid      agent id
  -k, --passkey      passkey
  -l, --all                   display all entries not just the last page
  -j, --json                  json output
  -t, --text                  text (raw) output
  -v, --verbose               verbose output
  -h, --help                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp get-diagnostic` command:

```text

  Examples: 

    mc gd -k mypasskey
    mc get-diagnostic --config someagent.json --passkey mypasskey
    mc get-diagnostic --passkey mypasskey --text --all > log.csv

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.