---
title: MindSphere CLI -  mdsp message-broker Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp message-broker Command

Syntax:

```bash
mdsp message-broker
```

Alternative form:

```bash
mc message-broker
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage message broker subscriptions and webhooks *

## Usage

List of all parameters and their description:

```text
Usage: mc message-broker|mbk [options]

manage message broker subscriptions and webhooks *

Options:
  -m, --mode [info|modify|delete|template|send]  mode [info | modify | delete | template | send] (default: "info")
  -s, --subscriptionid           subscription id
  -e, --versionid                     version id
  -t, --topicid                         topic id (example: mdsp.core.am.v1.postbox.asset.deleted)
  -w, --webhook                         webhook url
  -k, --passkey                         passkey
  -f, --file                               .mdsp.json file with message definition (default: "messagebroker.message.mdsp.json")
  -o, --overwrite                                overwrite template file if it already exists
  -y, --retry                            retry attempts before giving up (default: "3")
  -v, --verbose                                  verbose output
  -h, --help                                     display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc message-broker --mode info   --subscriptionid  --versionid  --topicid  	 get subscription webhook uri
    mc message-broker --mode delete --subscriptionid  --versionid  --topicid  	 delete webhook 
    mc message-broker --mode modify --subscriptionid  --versionid  --topicid  --webhook  	 configure webhook 
    mc message-broker --mode template --file messagebroker.message.mdsp.json 			 create template message file 
    mc message-broker --mode send --file messagebroker.message.mdsp.json --topicid  	 send message to the topic 

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.