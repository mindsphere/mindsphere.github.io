---
title: MindConnect-NodeJS -CLI - Asset and File Commands
---

# MindConnect-NodeJS - CLI - <small>Asset and File Commands</small>

## Introduction

The asset and file commands can be used to

- list assets in the mindsphere tenant
- list, upload and download files stored with the asset

These commands require  [MindSphere service credentials](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials).

## List Assets (`mc list-assets`)

This command lists the assets in the current MindSphere tenant.

```text
mc list-assets --help

Usage: list-assets|la [options]

list assets in the tenant *

Options:
  -f, --filter [filter]    filter (see: https://developer.mindsphere.io/apis/advanced-assetmanagement/api-assetmanagement-references-filtering.html)
  -a, --assetname [name]   search for assets with string [name] in asset name
  -t, --typeid [typeid]    search for assets with string [typeid] in typeid
  -k, --passkey <passkey>  passkey
  -y, --retry <number>     retry attempts before giving up (default: 3)
  -v, --verbose            verbose output
  -h, --help               output usage information

  Examples:

    mc list-assets --passkey mypasskey                         list all assets
    mc la --typeid core.mclib --assetname nodered --passkey mypasskey         list all agents (assets of type core.mclib) with nodered in the name
    mc la --filter '{"name" : {"contains" : "Engine"}}' --passkey mypasskey     list all assets where name contains string Engine

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials

  More Information:

    https://opensource.mindsphere.io
```

### Example

This will agents (assets of type core.mclib) with nodered in the name

```bash
mc la --typeid core.mclib --assetname nodered --passkey mypasskey
```

List all assets with sensor in the name

```bash
mc list-assets --assetname "sensor" --passkey mypasskey
```

Results:

```text
$ mc list-assets --assetname "sensor" --passkey passkey.4.unit.test
assetid  etag  twintype  [typeid]  name
44016ca9a84c4d3dbd3b02a1923a718f  0     performance     [castidev.TCDemoSensor] TCAssetTCDemoSensor24e1eee56eba424a965bacb455051fc0
81ee33d8aff049939ccda04b1e436732  0     performance     [castidev.TCDemoSensor] TCAssetTCDemoSensor81a6e5fc18b34cc0bf57681eefe1d793
a30568d8f6574333b872df57cebe169b  0     performance     [castidev.TCDemoSensor] TCAssetTCDemoSensorc2efb46520f04769852d6d25147319cb
0b03f5ade32846bab1b865ad214a97aa  2     performance     [castidev.TCAirSensor]  TCInletAirSensor
```

## List Files (`mc list-files`)

List all files which are attached to specified asset.

```text
mc list-files --help

Usage: list-files|ls [options]

list files stored with the asset *

Options:
  -i, --assetid <assetid>  asset id from the mindsphere
  -f, --filter [filter]    filter (see: https://developer.mindsphere.io/apis/iot-iotfile/api-iotfile-references-filtering.html)
  -k, --passkey <passkey>  passkey
  -y, --retry <number>     retry attempts before giving up (default: 3)
  -v, --verbose            verbose output
  -h, --help               output usage information

  Examples:

    mc ls --assetid 1234...ef --passkey mypasskey                 list all files for assetid
    mc ls --assetid 1234...ef --filter "path=upload*" --passkey mypasskey     list all files where path contains upload

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials

  More Information:

    https://opensource.mindsphere.io

```

### Example

This will list all files which are attached to asset with assetid `1234...ef` where the path contains the string `upload`

```bash
mc ls --assetid 1234...ef --filter "path=upload*" --passkey mypasskey
```

## Upload File (`mc upload-file`)

Upload a file to the asset

```text
mc upload-file --help

Usage: upload-file|uf [options]

upload the file to the mindsphere file service (optional: passkey) *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -f, --file <fileToUpload>   file to upload to the file service
  -h, --filepath <filepath>   file path in the mindsphere
  -l, --parallel <number>     parallel chunk uploads (default: 3)
  -i, --assetid [assetid]     asset id from the mindsphere  (default: upload to the agent)
  -m, --mime [mime-type]      mime type of the file (default: automatic recognition)
  -d, --desc [description]    description
  -k, --chunked               Use chunked upload
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -p, --passkey <passkey>     passkey (optional, file upload uses service credentials *)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc uf -f CHANGELOG.md                               upload file CHANGELOG.md to the agent
    mc upload-file --file  CHANGELOG.md  --assetid 5...f --mime text/plain      upload file to a specified asset with custom mime type
    mc upload-file --file  CHANGELOG.md  --chunked                  upload file using experimental chunked upload

```

### Example

This will upload the file bigdata.zip in chunks and attach it to asset with assetid `1234...ef`.

```bash
mc upload-file --file  bigdata.zip --assetid 1234..ef  --chunked --passkey mypasskey
```

## Download File (`mc download-file`)

Download a file from MindSphere

```text
mc download-file --help


Usage: download-file|df [options]

download the file from mindsphere file service *

Options:
  -f, --file <fileToDownload>  file to download from the file service
  -h, --filepath [filepath]    file path in the mindsphere (default: "")
  -i, --assetid <assetid>      asset id from the mindsphere
  -p, --passkey <passkey>      passkey
  -y, --retry <number>         retry attempts before giving up (default: 3)
  -v, --verbose                verbose output
  -h, --help                   output usage information

  Examples:

    mc download-file -f CHANGELOG.md  --assetid 5..f                              download file CHANGELOG.md from specified asset
    mc download-file --file  CHANGELOG.md  --assetid 5...f --filepath upload      download file upload/CHANGELOG.md from specified asset
    mc download-file --file  upload/CHANGELOG.md  --assetid 5...f                 download file upload/CHANGELOG.md from specified asset

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials

  More Information:

    https://opensource.mindsphere.io
```

### Example

This will download the file bigdata.zip in from with assetid `1234...ef`.

```bash
mc download-file --file bigdata.zip  --assetid 5...f --filepath upload --passkey mypasskey
```
