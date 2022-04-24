---
title: MindSphere CLI -  mdsp event-types Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp event-types Command

Syntax:

```bash
mdsp event-types
```

Help:

```bash
mdsp event-types --help
```

Alternative form:

```bash
mc event-types
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete event types *

## Usage

Parameter list:

```text
Usage: mc event-types|et [options]

list, create or delete event types *

Options:
  -m, --mode [list|create|delete|template|info]  list | create | delete | template | info (default: "list")
  -f, --file                               .mdsp.json file with event type definition
  -i, --idonly                                   list only ids
  -s, --schema                           JSON Schema
  -n, --eventtype                     the event type name
  -c, --includeshared                            include shared event types
  -g, --includeglobal                            include global event types
  -k, --passkey                         passkey
  -y, --retry                            retry attempts before giving up (default: "3")
  -v, --verbose                                  verbose output
  -h, --help                                     display help for command

```

## Examples

Here are some examples of how to use the `mdsp event-types` command:

```text

  Examples:

    mc event-types --mode list 					 list all event types
    mc event-types --mode list --eventtype PumpEvent		 list all event types which are named PumpEvent
    mc event-types --mode template --eventtype PumpEvent 
	create a template file (PumpEvent.eventtype.mdsp.json) for event type PumpEvent
    mc event-types --mode create --file PumpEvent.eventtype.mdsp.json 
	create event type PumpEvent in MindSphere

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.