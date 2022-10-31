---
title: MindSphere CLI -  mdsp jobs Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp jobs Command

Syntax:

```bash
mdsp jobs
```

Help:

```bash
mdsp jobs --help
```

Alternative form:

```bash
mc jobs
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or stop jobs *

## Usage

Parameter list:

```text
Usage: mdsp jobs|jb [options]

list, create or stop jobs *

Options:
  -m, --mode [list|create|stop|template|info]  list | create | stop | template | info (default: "list")
  -f, --file                             .mdsp.json file with job definition (default: "jobmanager.job.mdsp.json")
  -i, --jobid                           the job id
  -e, --message                       the message filter (contains) for list command
  -s, --status                         the status filter (equals, e.g. STOPPED, FAILED...) for list command
  -d, --modelid                       the modelid filter (equals) for list command
  -o, --overwrite                              overwrite template file if it already exists
  -k, --passkey                       passkey
  -y, --retry                          retry attempts before giving up (default: "3")
  -v, --verbose                                verbose output
  -h, --help                                   display help for command

```

## Examples

Here are some examples of how to use the `mdsp jobs` command:

```text

  Examples:

    mc jobs --mode list 					 list all jobs
    mc jobs --mode list --status FAILED --message import 	 list all jobs which failed on import
    mc jobs --mode list --modelid  			 list all jobs for specified model
    mc jobs --mode list --modelid  			 list all jobs for specified model
    mc jobs --mode list --modelid  			 list all jobs for specified model
    mc jobs --mode template 					 create template file for job creation
    mc jobs --mode create --file  		 create job
    mc jobs --mode info --jobid  			 get infos about the job
    mc jobs --mode stop --jobid  			 stop job with job id

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.