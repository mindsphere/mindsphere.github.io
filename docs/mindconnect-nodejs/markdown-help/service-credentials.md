---
title: MindSphere CLI -  mdsp service-credentials Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp service-credentials Command

Syntax:

```bash
mdsp service-credentials
```

Alternative form:

```bash
mc service-credentials
```

(The CLI was using `mc` as default command name in older versions)

## Description

provide login for commands which require technical user credentials *

## Usage

List of all parameters and their description:

```text
Usage: mc service-credentials|sc [options]

provide login for commands which require technical user credentials *

Options:
  -m, --mode [config|list|select|add]  config | list | select | add (default: "config")
  -i, --index                   select credentials with specified index
  -y, --type                     type (APP | SERVICE) (default: "APP")
  -o, --port                     port for config web server (default: "4994")
  -u, --user                     credentials: username
  -p, --password             credendials: password
  -g, --gateway               region string or full gateway url (e.g. eu1, eu2 or https://gateway.eu1.mindsphere.io)
  -t, --tenant                 your tenant name
  -s, --usertenant         your user tenant name
  -a, --appName               your application name (e.g. cli)
  -p, --appVersion         your application version (e.g. 1.0.0)
  -k, --passkey               passkey (you will use this in the commands which require service credentials)
  -v, --verbose                        verbose output
  -h, --help                           display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Example:

    mc service-credentials --mode config 			 start configuration web server on http://localhost:4994
    mc service-credentials --mode config --port 10000 		 start configuration web server on http://localhost:10000
    mc service-credentials --mode list  			 list all configured credentials
    mc service-credentials --mode select --index  	 select credentials with index  from the list
    mc service-credentials --mode add --type APP ... 		 add new APP credentials

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.