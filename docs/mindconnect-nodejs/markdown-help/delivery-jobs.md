---
title: MindSphere CLI -  mdsp delivery-jobs Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp delivery-jobs Command

Syntax:

```bash
mdsp delivery-jobs
```

Help:

```bash
mdsp delivery-jobs --help
```

Alternative form:

```bash
mc delivery-jobs
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage mqtt delivery jobs to publish MQTT commands to the clients *

## Usage

Parameter list:

```text
Usage: mc delivery-jobs|dj [options]

manage mqtt delivery jobs to publish MQTT commands to the clients *

Options:
  -m, --mode [list|create|delete|template|info|commands|commandinfo]  list | create | delete | template | info | commands | commandinfo (default: "list")
  -f, --file                                                    .mdsp.json file with job definition (default: "deliveryjob.mqtt.mdsp.json")
  -i, --jobid                                                  the job id
  -c, --commandid                                          the command id
  -e, --name                                                    the name filter (contains) for list command
  -t, --filter                                                the JSON filter as specified in the API documentation
  -o, --overwrite                                                     overwrite template file if it already exists
  -k, --passkey                                              passkey
  -y, --retry                                                 retry attempts before giving up (default: "3")
  -v, --verbose                                                       verbose output
  -h, --help                                                          display help for command

```

## Examples

Here are some examples of how to use the `mdsp delivery-jobs` command:

```text

  Examples:

    mc delivery-jobs --mode list 					 list all jobs
    mc delivery-jobs --mode list --name  				 list all mqtt delivery jobs with the given name
    mc delivery-jobs --mode list --filter '{"createdAt": {"after": "2021-11-06T13:46:00Z"}}'  
                                                                         list all mqtt delivery jobs created after the specified date
    mc delivery-jobs --mode template 					 create template file for job creation
    mc delivery-jobs --mode create --file  		 create job
    mc delivery-jobs --mode info --jobid  			 get infos about the job
    mc delivery-jobs --mode delete --jobid  			 delete job with job id
    mc delivery-jobs --mode commands --jobid  			 list all commands for specified job id
    mc delivery-jobs --mode commandinfo --jobid  --commandid   
                                                                         get info for selected command

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.