---
title:  CLI -  mdsp service-credentials Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp service-credentials Command

Syntax:

```bash
mdsp service-credentials
```

Help:

```bash
mdsp service-credentials --help
```

Alternative form:

```bash
mc service-credentials
```

(The CLI was using `mc` as default command name in older versions)

## Description

provide login for commands which require technical user credentials *

## Usage

Parameter list:

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

Here are some examples of how to use the `mdsp service-credentials` command:

```text

  Example:

    mdsp service-credentials --mode config 			 start configuration web server on http://localhost:4994
    mdsp service-credentials --mode config --port 10000 	 start configuration web server on http://localhost:10000
    mdsp service-credentials --mode list  			 list all configured credentials
    mdsp service-credentials --mode select --index  	 select credentials with index  from the list
    mdsp service-credentials --mode add --type APP ... 		 add new APP credentials

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
