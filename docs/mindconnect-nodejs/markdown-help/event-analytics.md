---
title:  CLI -  mdsp event-analytics Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp event-analytics Command

Syntax:

```bash
mdsp event-analytics
```

Help:

```bash
mdsp event-analytics --help
```

Alternative form:

```bash
mc event-analytics
```

(The CLI was using `mc` as default command name in older versions)

## Description

analyze {{site.productname}} events @

## Usage

Parameter list:

```text
Usage: mc event-analytics|ea [options]

analyze {{site.productname}} events @

Options:
  -m, --mode [count|filter|duplicate|top]  mode see @ Additional Documentation (default: "top")
  -f, --file                         events file
  -o, --output                     result mode.ea.mdsp.json
  -t, --type [timeseries|event]            event analytics can be used on both timeseries (with string properties as event names) and event
                                           formats (default: "event")
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

Here are some examples of how to use the `mdsp event-analytics` command:

```text

  Examples:

    mdsp event-analytics --mode top --file events.json --property description 		 find the top 10 events in events.json
    mdsp event-analytics --mode duplicate --file events.json --property description --split 5000 		 remove all duplicate events

  Additional Documentation:

    https://developer.mindsphere.io/apis/analytics-eventanalytics/api-eventanalytics-overview.html
    https://developer.mindsphere.io/apis/analytics-eventanalytics/api-eventanalytics-samples.html

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
