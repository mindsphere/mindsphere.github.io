---
title:  CLI -  mdsp upload-file Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# {{site.productname}} CLI: mdsp upload-file Command

Syntax:

```bash
mdsp upload-file
```

Help:

```bash
mdsp upload-file --help
```

Alternative form:

```bash
mc upload-file
```

(The CLI was using `mc` as default command name in older versions)

## Description

upload the file to the {{site.productname}} file service (optional: passkey) *

## Usage

Parameter list:

```text
Usage: mc upload-file|uf [options]

upload the file to the {{site.productname}} file service (optional: passkey) *

Options:
  -c, --config   config file with agent configuration
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -f, --file    file to upload to the file service
  -h, --filepath    file path in the {{site.productname}}
  -l, --parallel      parallel chunk uploads (default: "3")
  -i, --assetid [assetid]     {{site.productname}} asset id  (default: upload to the agent)
  -m, --mime [mime-type]      mime type of the file (default: automatic recognition)
  -d, --desc [description]    description
  -k, --chunked               Use chunked upload
  -y, --retry         retry attempts before giving up (default: "3")
  -p, --passkey      passkey (optional, file upload uses service credentials *)
  -v, --verbose               verbose output
  --help                      display help for command

```

## Examples

Here are some examples of how to use the `mdsp upload-file` command:

```text

  Examples:

    mdsp uf -f CHANGELOG.md   							 upload file CHANGELOG.md to the agent
    mdsp upload-file --file  CHANGELOG.md  --assetid 5...f --mime text/plain 	 upload file to a specified asset with custom mime type
    mdsp upload-file --file  CHANGELOG.md  --chunked 				 upload file using experimental chunked upload

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about {{site.productname}} APIs.
