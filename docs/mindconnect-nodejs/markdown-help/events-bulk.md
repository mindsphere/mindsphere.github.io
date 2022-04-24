---
title: MindSphere CLI -  mdsp events-bulk Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp events-bulk Command

Syntax:

```bash
mdsp events-bulk
```

Help:

```bash
mdsp events-bulk --help
```

Alternative form:

```bash
mc events-bulk
```

(The CLI was using `mc` as default command name in older versions)

## Description

download or delete the events in bulk *

## Usage

Parameter list:

```text
Usage: mc events-bulk|dn [options]

download or delete the events in bulk *

Options:
  -m, --mode [download|template|delete|check]  mode [download | template | delete | check] (default: "download")
  -d, --dir                               download folder (default: "eventdownload")
  -i, --assetid                       mindsphere asset id
  -j, --jobid                           check deletion process of jobs with jobid
  -f, --filter [filter]                        JSON file with filter (see:
                                               https://developer.mindsphere.io/apis/advanced-eventmanagement/api-eventmanagement-best-practices.html)
  -s, --size                             max entries per file  (default: "100")
  -t, --sort                             sort events  (default: "timestamp,asc")
  -p, --passkey                       passkey
  -y, --retry                          retry attempts before giving up (default: "3")
  -v, --verbose                                verbose output
  -h, --help                                   display help for command

```

## Examples

Here are some examples of how to use the `mdsp events-bulk` command:

```text

  Examples:

    mc events-bulk --mode download  --asssetid 1234567..ef  	 download events from specified asset
    mc events-bulk --mode download --dir newdir  		 download last 7 days of events to  folder
    mc events-bulk --mode template --assetid 1234576..ef  	 create template file event.filter.mdsp.json
    mc events-bulk --mode download --filter event.filter.mdsp.json 		 download events using configured filter
    mc events-bulk --mode delete --filter event.filter.mdsp.json 		 delete events using configured filter
    mc events-bulk --mode check --jobid  		 check the state of bulk deleting job

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.