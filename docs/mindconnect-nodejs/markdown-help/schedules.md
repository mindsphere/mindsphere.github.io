---
title: MindSphere CLI -  mdsp schedules Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp schedules Command

Syntax:

```bash
mdsp schedules
```

Help:

```bash
mdsp schedules --help
```

Alternative form:

```bash
mc schedules
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create, start, stop or delete job schedules *

## Usage

Parameter list:

```text
Usage: mc schedules|js [options]

list, create, start, stop or delete job schedules *

Options:
  -m, --mode [list|create|start|stop|template|info|delete]  list | create | stop | template | info (default: "list")
  -f, --file                                          .mdsp.json file with job schedule definition (default: "jobmanager.schedule.mdsp.json")
  -i, --scheduleid                              the schedule id
  -n, --name                                          the name filter (contains) for list command
  -s, --status                                      the status filter (equals, e.g. STOPPED, FAILED...) for list command
  -d, --modelid                                    the modelid filter (equals) for list command
  -o, --overwrite                                           overwrite template file if it already exists
  -k, --passkey                                    passkey
  -y, --retry                                       retry attempts before giving up (default: "3")
  -v, --verbose                                             verbose output
  -h, --help                                                display help for command

```

## Examples

Here are some examples of how to use the `mdsp schedules` command:

```text

  Examples:

    mc schedules --mode list 					 list all job schedules
    mc schedules --mode list --status RUNNING 	 list all RUNNING job schedules
    mc schedules --mode list --modelid  			 list all job schedules for specified model
    mc schedules --mode template 					 create template file for job schedule creation
    mc schedules --mode create --file  		 create job schedule
    mc schedules --mode info --scheduleid  			 get infos about the job schedule
    mc schedules --mode start --scheduleid  			 start job schedule with job id
    mc schedules --mode stop --scheduleid  			 stop job schedule with job id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.