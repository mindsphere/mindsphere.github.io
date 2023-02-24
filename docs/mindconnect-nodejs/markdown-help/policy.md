---
title:  CLI -  mdsp policy Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp policy Command

Syntax:

```bash
mdsp policy
```

Help:

```bash
mdsp policy --help
```

Alternative form:

```bash
mc policy
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete policies *

## Usage

Parameter list:

```text
Usage: mc policy|po [options]

list, create or delete policies *

Options:
  -m, --mode [list|create|update|delete|template|info]  list | create | update | delete | template | info (default: "list")
  -f, --file                                      .mdsp.json file with policy definition (default: "policy.mdsp.json")
  -n, --policy                                  the policy name
  -i, --policyid                              the policy id
  -o, --overwrite                                       overwrite template file if it already exists
  -k, --passkey                                passkey
  -y, --retry                                   retry attempts before giving up (default: "3")
  -v, --verbose                                         verbose output
  -h, --help                                            display help for command

```

## Examples

Here are some examples of how to use the `mdsp policy` command:

```text

  Examples:

    mdsp policy --mode list 				list all policies
    mdsp policy --mode template --policy  	create a template file for 
    mdsp policy --mode create --file  		create policy 
    mdsp policy --mode update --file  --policyid  	 update policy 
    mdsp policy --mode info --policyid  	policy info for specified id
    mdsp policy --mode delete --policyid  	delete policy with specified id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
