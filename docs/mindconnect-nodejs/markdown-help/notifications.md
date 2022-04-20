---
title: MindSphere CLI -  mdsp notifications Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp notifications Command

Syntax:

```bash
mdsp notifications
```

Alternative form:

```bash
mc notifications
```

(The CLI was using `mc` as default command name in older versions)

## Description

send email, sms and push notifications *

## Usage

List of all parameters and their description:

```text
Usage: mc notifications|nt [options]

send email, sms and push notifications *

Options:
  -m, --mode [template|status|send]  mode [template|send] (default: "template")
  -t, --type [email|sms|push]        type [email|sms|push] (default: "email")
  -i, --jobid                 job id for status command
  -f, --metadata           metadata file with notification infos
  -a, --files                 comma separated list of attachement files for email (max 5)
  -o, --overwrite                    overwrite template files
  -k, --passkey             passkey
  -y, --retry                retry attempts before giving up (default: "3")
  -v, --verbose                      verbose output
  -h, --help                         display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc notifications --mode template --type [mail|sms|push] 	 create template file with notification metadata
    mc notifications --mode send --metadata  --type [mail|sms|push] 
					 send notifications (mail, sms, push) to recipients

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.