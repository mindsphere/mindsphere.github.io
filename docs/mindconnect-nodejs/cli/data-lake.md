---
title: MindConnect-NodeJS - CLI - Data Lake Commands
next:
    - title: Overview
      link: index
    - title: Setting up the CLI
      link: setting-up-the-cli
---

<!-- @format -->

# MindConnect-NodeJS - CLI - <small>Data Lake</small>

## Introduction

The Integrated Data Lake (IDL) is a repository that allows you to store structured and unstructured data in its native format until it is needed. It handles large data pools for which the schema and data requirements are not defined until the data is queried. This offers more agility and flexibility than traditional data management systems.

The Integrated Data Lake Service allows you to store your data as is, analyze it using dashboards and visualizations or use it for big data processing, real-time analytics, and machine learning.

The data lake access can be purchased at [Siemens Digital Exchange](https://www.dex.siemens.com/mindsphere/applications/integrated-data-lake).

## Overview

The `mc data-lake` command can be used to configure the data lake access, get data lake access tokens, generate signed urls for upload and download and also upload the files to datalake. Here is the overview for the command:

```text
$ mc data-lake --help
Usage: mc data-lake|dlk [options]

manage data lake, data lake access permissions and STS tokens *

Options:
  -m, --mode [...]                   mode: list | write | delete | readtoken | writetoken | uploadurl | downloadurl | upload
                                      (default:"list")
  -f, --file <file>                  file to upload
  -l, --shell [bash|ps|cmd]          output format for STS token [bash | ps | cmd] (default: "bash")
  -p, --path <path>                  path for read/write token or uploadUrl downloadUrl comamand
  -i, --permissionid <permissionid>  permission id for delete operation
  -s, --subtenantid <subtenantid>    subtenant id
  -d, --duration <duration>          duration in seconds (default: "3600")
  -k, --passkey <passkey>            passkey
  -y, --retry <number>               retry attempts before giving up (default: "3")
  -v, --verbose                      verbose output
  -h, --help                         display help for command

  Examples:

    mc data-lake --mode list                    lists all configured permissions for data lake
    mc data-lake --mode write                   allow writing to the data lake
    mc data-lake --mode write --path data/      allow writing to the data lake from data/ folder
    mc data-lake --mode readtoken               create AWS STS Token with read rights
    mc data-lake --mode writetoken              create AWS STS Token with write rights from data lake root
    mc data-lake --mode writetoken --path data/ create AWS STS Token with write rights from data/ folder
    mc data-lake --mode delete --permissionid  <permissionid>                    delete writing permission with selected permissionid
    mc data-lake --mode upload --file CHANGELOG.md --path uploads/CHANGELOG.md   upload file to data lake
    mc data-lake --mode downloadurl --path uploads/CHANGELOG.md                  generate download url for the path

  Additional Information:

    Purchasing Data Lake: https://www.dex.siemens.com/mindsphere/applications/integrated-data-lake
    Data Lake APIs: https://developer.mindsphere.io/apis/iot-integrated-data-lake/api-integrated-data-lake-overview.html

  Important:

  Authentication with service credentials or app credentials:

        - either append option [--passkey <your passkey>] to the command
        - or create environment variable MDSP_PASSKEY with your current passkey

  Authentication with borrowed session cookie and xsrf-token cookie:

        - create environment variables MDSP_HOST , MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies

  Full Documentation:

    https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/setting-up-the-cli.html
```

## Enabling Access to Data Lake Paths

Currently all tenants and subtenants have enabled read permission at the root level. You can manage the write permissions by using  `mc data-lake --mode write` command.

For example you can enable the write access for the data-lake on root level as well:

```bash
$ mc data-lake --mode write
07576e1f-a45c-xxxx-b639-22788a81f8bd /  WRITE   2020-11-07T18:35:47.260Z
Write permission with 07576e1f-a45c-xxxx-b639-22788a81f8bd created.
```

Or you can be more specific by enabling write access only to upload folder:

```bash
$ mc data-lake --mode write --path upload
2662532a-a507-xxxx-8b96-93023f63b402 /upload    WRITE   2020-11-07T18:37:59.347Z
Write permission with 2662532a-xxxx-4da6-8b96-93023f63b402 created.
```

The permissions can be listed by using `mc data-lake --mode list` and deleted by using `mc data-lake --mode delete` command.

```bash
# List permissions
$ mc data-lake --mode list
permissionid    path    mode    created subtentantid
2662532a-a507-4da6-xxxx-93023f63b402 /upload    WRITE   2020-11-07T18:37:59.000Z
1 permissions listed.

# Delete permission
mc data-lake --mode delete --permissionid 2662532a-a507-4da6-xxxx-93023f63b402
```

## Generating AWS STS Credentials

If you want to use AWS tooling to access your integrated data lake you will need the AWS access tokens.(`mc data-lake --mode readtoken` and `mc data-lake --mode writetoken`)

The following command will generate the necessary tokens which you can copy to your command shell or GUI application which needs access to Integrated Data Lake. The `--shell` option will generate the token in corresponding shell format. Default is `bash` but you can also create variables for powershell (`--shell ps`) and windows command line (`--shell cmd`) command.

```bash
$ mc data-lake --mode readtoken --shell ps

Copy the following commands to your ps shell to enable s3 authorization:

$Env:AWS_ACCESS_KEY_ID="ASIA...."
$Env:AWS_SECRET_ACCESS_KEY="l9pl...."
$Env:AWS_SESSION_TOKEN="FwoGZXIvYX...IoY"

Example aws s3 ls command:

        aws s3 ls s3://datalake-prod-a-presdev-1576231018923/data/ten=presdev/

Integrated Data Lake S3 bucket:

        s3://datalake-prod-a-presdev-1576231018923/data/ten=presdev/
```

## Generating the signed URLs for Upload and Download

You can use the `mc --mode uploadurl` and `mc --mode downloadurl` command to generate the corresponding AWS Signed URLs for upload and download to data lake.

```bash
$ mc data-lake --mode downloadurl --path uploads/CHANGELOG.md

Download URL for uploads/CHANGELOG.md

Click on the URL below to download the file:

https://datalake-prod-a-presdev-1576231018923.s3.eu-central-1.amazonaws.com/data/ten%3Dpresdev/uploads/CHANGELOG.md?response-cache-control=No-cache&X-Amz-Security-Token=IQo...&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201107T185706Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7199&X-Amz-Credential=ASIAWX7P4S4D66C3ZEWI%2F20201107%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=f98204d1ed3b21b58649a7fcd49e325ae9f823585f3b09e82c2835725590a041
```

## Uploading the files to Integrated Data Lake

You can upload a file using `mc data-lake --mode upload` command

Here is an example

```bash
$ mc data-lake --mode upload --path uploads/CHANGELOG.md --file CHANGELOG.md --verbose
... The passkey was specified in environment variable MDSP_PASSKEY using service/app credentials
... Using configuration stored in C:\Users\z001ythk/.mc/
... No proxy configured.
... Creating Data Lake upload URL
... Uploading file C:\git\github\mindconnect-nodejs\CHANGELOG.md as uploads/CHANGELOG.md to data lake
... {
  "objectUrls": [
    {
      "signedUrl": "https://datalake-prod-a-presdev-1576231018923.s3.eu-central-1.amazonaws.com/data/ten%3Dpresdev/uploads/CHANGELOG.md?X-Amz-Security-Token=IQ...&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20201107T185935Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Credential=ASIAWX7P4S4DYATVJUHG%2F20201107%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=c1e45b001450639d25d209463b57c3fc7652e39f1c04d9688ed30e87c91795c3",
      "path": "uploads/CHANGELOG.md"
    }
  ]
}
... {}
✔ Uploaded file C:\git\github\mindconnect-nodejs\CHANGELOG.md as uploads/CHANGELOG.md to data lake
```
