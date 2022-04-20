---
title: MindSphere CLI -  mdsp events Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp events Command

Syntax:

```bash
mdsp events
```

Alternative form:

```bash
mc events
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete events *

## Usage

List of all parameters and their description:

```text
Usage: mc events|ev [options]

list, create or delete events *

Options:
  -m, --mode [list|create|delete|template|filtertemplate|info]  list | create | delete | template | filtertemplate | info (default: "list")
  -f, --file                                              .mdsp.json file with event definition
  -i, --assetid                                        mindsphere asset id
  -e, --eventid                                        event id
  -f, --filter [filter]                                         JSON file with filter (see:
                                                                https://developer.mindsphere.io/apis/advanced-eventmanagement/api-eventmanagement-best-practices.html)
  -n, --eventtype                                    the event type name
  -s, --size                                              max. number of events to list (default: "100")
  -c, --includeshared                                           include shared event types
  -g, --includeglobal                                           include global event types
  -k, --passkey                                        passkey
  -y, --retry                                           retry attempts before giving up (default: "3")
  -v, --verbose                                                 verbose output
  -h, --help                                                    display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc events --mode list 				 list last  events (default:100)
    mc events --mode list --eventtype PumpEvent		 list last  PumpEvents (default: 100)
    mc events --mode info --eventid 		 get info about event with specified id
    mc events --mode delete --eventid 		 delete event with specified id
    mc events --mode filtertemplate 			 create filter template for --mode list command
    mc events --mode template --eventtype PumpEvent 	 create a template file for event 
    mc events --mode create --file PumpEvent.eventtype.mdsp.json 	 create event

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.