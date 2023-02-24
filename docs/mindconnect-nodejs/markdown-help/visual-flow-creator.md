---
title:  CLI -  mdsp visual-flow-creator Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp visual-flow-creator Command

Syntax:

```bash
mdsp visual-flow-creator
```

Help:

```bash
mdsp visual-flow-creator --help
```

Alternative form:

```bash
mc visual-flow-creator
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage vfc projects and nodes *

## Usage

Parameter list:

```text
Usage: mc visual-flow-creator|vfc [options]

manage vfc projects and nodes *

Options:
  -m, --mode [list|create|update|delete|template|get-nodes|put-nodes|info]  list | create | update | delete | template | get-nodes | put-nodes |
                                                                            info (default: "list")
  -u, --user                                                          user email
  -f, --file                                                          .mdsp.json file with vfc project definition (default:
                                                                            "vfc.project.mdsp.json")
  -n, --nodes                                                        .mdsp.json file with vfc project nodes (default:
                                                                            "vfc.nodes.mdsp.json")
  -p, --project                                                    the project name (default: "vfc-project-1667699476187")
  -i, --id                                                              the vfc project id
  -o, --overwrite                                                           overwrite template file if it already exists
  -k, --passkey                                                    passkey
  -y, --retry                                                       retry attempts before giving up (default: "3")
  -v, --verbose                                                             verbose output
  -h, --help                                                                display help for command

```

## Examples

Here are some examples of how to use the `mdsp visual-flow-creator` command:

```text

  Examples:

    mdsp vfc --user  --mode list 				list all vfc projects
    mdsp vfc --user  --mode template --project  	create a template file for vfc project 
    mdsp vfc --user  --mode create --file  		create vfc project 
    mdsp vfc --user  --mode update --file  --id  	 update project 
    mdsp vfc --user  --mode info --id  	vfc project info for specified id
    mdsp vfc --user  --mode delete --handle  	delete vfc project with specified id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
