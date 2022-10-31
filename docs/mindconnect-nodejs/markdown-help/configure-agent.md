---
title: MindSphere CLI -  mdsp configure-agent Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp configure-agent Command

Syntax:

```bash
mdsp configure-agent
```

Help:

```bash
mdsp configure-agent --help
```

Alternative form:

```bash
mc configure-agent
```

(The CLI was using `mc` as default command name in older versions)

## Description

create data source configuration and mappings (optional: passkey) *

## Usage

Parameter list:

```text
Usage: mdsp configure-agent|co [options]

create data source configuration and mappings (optional: passkey) *

Options:
  -c, --config        config file with agent configuration
  -m, --mode [mode]                command mode [config|map|print|delete|test|func|template] (default: "config")
  -a, --agentid           agentid
  -i, --assetid           target assetid for mapping
  -t, --typeid             asset type for configuration
  -l, --language [js|python|json]  target language for conversion function (default: "js")
  -s, --timespan         timespan between generated timestamps (in ms) (default: "1000")
  -c, --count               Number of generated records (default: "10")
  -k, --passkey           passkey
  -y, --retry              retry attempts before giving up (default: "3")
  -v, --verbose                    verbose output
  -h, --help                       display help for command

```

## Examples

Here are some examples of how to use the `mdsp configure-agent` command:

```text

  Examples:

    mc configure-agent --config agent.json -assetid 1234567...89 	configures agent for specified assetid
    mc configure-agent --config agent.json --mode print 		prints data source configuration and mappings
    mc configure-agent --agentid 12345..ef --typeid .Engine  	creates the data source configuration
    mc configure-agent --mode map --agentid 12345..ef --assetid 1234567 creates the mappings for assetid
    mc configure-agent --mode delete --agentid 12345..ef 		deletes the mappings for agentid
    mc configure-agent --config agent.json --mode test 			sends test data to mindsphere
    mc configure-agent --mode template \
    	--typeid castidev.Pump --language python 			create mapping template and function in python

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.