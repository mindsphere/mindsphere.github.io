---
title: MindSphere CLI -  mdsp data-lake Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp data-lake Command

Syntax:

```bash
mdsp data-lake
```

Help:

```bash
mdsp data-lake --help
```

Alternative form:

```bash
mc data-lake
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data lake, data lake access permissions and STS tokens *

## Usage

Parameter list:

```text
Usage: mc data-lake|dlk [options]

manage data lake, data lake access permissions and STS tokens *

Options:
  -m, --mode [...]                       mode: list | read | write | delete | readtoken | writetoken | uploadurl | downloadurl | upload | meta |
                                         subscriptions | subscribe | unsubscribe  (default: "list")
  -f, --file                       file to upload
  -l, --shell [bash|ps|cmd]              output format for STS token [bash | ps | cmd] (default: "bash")
  -p, --path                       path for read/write token or uploadUrl, downloadUrl, subscribe or unsubscribe comamand
  -t, --destination         destination for subscribe comamand
  -i, --permissionid       permission id for delete operation
  -s, --subtenantid         subtenant id
  -b, --subscriptionid   subscription id
  -d, --duration               duration in seconds (default: "3600")
  -k, --passkey                 passkey
  -y, --retry                    retry attempts before giving up (default: "3")
  -v, --verbose                          verbose output
  -h, --help                             display help for command

```

## Examples

Here are some examples of how to use the `mdsp data-lake` command:

```text

  Examples:

    mdsp data-lake --mode list 			lists all configured permissions for data lake
    mdsp data-lake --mode write 			allow writing to the data lake
    mdsp data-lake --mode write --path data/ 	allow writing to the data lake from data/ folder
    mdsp data-lake --mode meta --path data/ 	get metadata for path
    mdsp data-lake --mode readtoken 		create AWS STS Token with read rights
    mdsp data-lake --mode writetoken 		create AWS STS Token with write rights from data lake root
    mdsp data-lake --mode writetoken --path data/ create AWS STS Token with write rights from data/ folder
    mdsp data-lake --mode delete --permissionid  			 delete writing permission with selected permissionid
    mdsp data-lake --mode upload --file CHANGELOG.md --path uploads/CHANGELOG.md 	 upload file to data lake
    mdsp data-lake --mode downloadurl --path uploads/CHANGELOG.md 		 generate download url for the path
    mdsp data-lake --mode subscriptions 						 list all data lake event subscriptions
    mdsp data-lake --mode subscribe --path  --destination aws-sns:// 	 subscribe an AWS SNS topic to folder changes
    mdsp data-lake --mode unsubscribe --subscriptionid   			 delete event subscription

  Additional Information:

    Purchasing Data Lake: https://www.dex.siemens.com/mindsphere/applications/integrated-data-lake
    Data Lake APIs: https://developer.mindsphere.io/apis/iot-integrated-data-lake/api-integrated-data-lake-overview.html

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.