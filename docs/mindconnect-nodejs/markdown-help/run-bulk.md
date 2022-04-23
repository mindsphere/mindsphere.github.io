---
title: MindSphere CLI -  mdsp run-bulk Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp run-bulk Command

Syntax:

```bash
mdsp run-bulk
```

Alternative form:

```bash
mc run-bulk
```

(The CLI was using `mc` as default command name in older versions)

## Description

runs the timeseries (bulk) upload job from  directory *

## Usage

List of all parameters and their description:

```text
Usage: mc run-bulk|rb [options]

runs the timeseries (bulk) upload job from  directory *

Options:
  -d, --dir   config file with agent configuration (default: "bulkupload")
  -y, --retry        retry attempts before giving up (default: "3")
  -l, --parallel     parallel chunk uploads (default: "3")
  -s, --size           entries per file  (default: "9007199254740991")
  -f, --force                force generation of json files, file upload and creation of jobs
  -k, --passkey     passkey
  -i, --timeseries           use (deprecated) timeseries upload
  -v, --verbose              verbose output
  -t, --start                start sending data to mindsphere
  -h, --help                 display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc run-bulk runs the upload job from the  bulkimport directory
    mc run-bulk --dir asset1 --verbose runs the upload job from the asset1 with verbose output

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.