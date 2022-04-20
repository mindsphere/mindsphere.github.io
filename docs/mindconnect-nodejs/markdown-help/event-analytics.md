---
title: MindSphere CLI -  mdsp event-analytics Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp event-analytics Command

Syntax:

```bash
mdsp event-analytics
```

Alternative form:

```bash
mc event-analytics
```

(The CLI was using `mc` as default command name in older versions)

## Description

analyze mindsphere events @

## Usage

List of all parameters and their description:

```text
Usage: mc event-analytics|ea [options]

analyze mindsphere events @

Options:
  -m, --mode [count|filter|duplicate|top]  mode see @ Additional Documentation (default: "top")
  -f, --file                         events file
  -o, --output                     result mode.ea.mdsp.json
  -t, --type [timeseries|event]            event analytics can be used on both timeseries (with string properties as event names) and event formats
                                           (default: "event")
  -p, --property                 property name used for grouping and counting (default: "description")
  -l, --filterlist             filter events (default: "[]")
  -x, --top                           number of events (for top mode) (default: "10")
  -s, --split                       split interval (for count, duplicate) (default: "5000")
  -y, --retry                      retry attempts before giving up (default: "3")
  -p, --passkey                   passkey
  -v, --verbose                            verbose output
  -h, --help                               display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc event-analytics --mode top --file events.json --property description 		 find the top 10 events in events.json
    mc event-analytics --mode duplicate --file events.json --property description --split 5000 		 remove all duplicate events

  Additional Documentation:

    https://developer.mindsphere.io/apis/analytics-eventanalytics/api-eventanalytics-overview.html
    https://developer.mindsphere.io/apis/analytics-eventanalytics/api-eventanalytics-samples.html

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.