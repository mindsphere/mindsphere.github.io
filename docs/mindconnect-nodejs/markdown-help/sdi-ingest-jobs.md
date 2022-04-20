---
title: MindSphere CLI -  mdsp sdi-ingest-jobs Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp sdi-ingest-jobs Command

Syntax:

```bash
mdsp sdi-ingest-jobs
```

Alternative form:

```bash
mc sdi-ingest-jobs
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage ingest jobs for SDI *

## Usage

List of all parameters and their description:

```text
Usage: mc sdi-ingest-jobs|sdj [options]

manage ingest jobs for SDI *

Options:
  -m, --mode [list|create|template|info]  list | create | template | info  (default: "list")
  -j, --ingestjob              the job information for --mode create command
  -i, --jobid                      the job id for --mode info command
  -o, --overwrite                         overwrite template file if it already exists
  -k, --passkey                  passkey
  -y, --retry                     retry attempts before giving up (default: "3")
  -v, --verbose                           verbose output
  -h, --help                              display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc sdi-ingest-jobs --mode list 					 list all sdi data ingest jobs
    mc sdi-ingest-jobs --mode template 					 create template file
    mc sdi-ingest-jobs --mode create --ingestjob  	 create sdi ingest job
    mc sdi-ingest-jobs --mode info --jobid    			 get sdi ingest job info

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.