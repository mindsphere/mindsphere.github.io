# mdsp download-file Command

Syntax:

```bash
mdsp download-file
```

Help:

```bash
mdsp download-file --help
```

Alternative form:

```bash
mc download-file
```

(The CLI was using `mc` as default command name in older versions)

## Description

download the file from Insights Hub file service *

## Usage

Parameter list:

```text
Usage: mdsp download-file|df [options]

download the file from Insights Hub file service *

Options:
 -f, --file file to download from the file service
 -h, --filepath [filepath] file path in the Insights Hub (default: "")
 -i, --assetid Insights Hub asset id
 -p, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp download-file` command:

```text

 Examples:

 mdsp download-file -f CHANGELOG.md --assetid 5..f download file CHANGELOG.md from specified asset
 mdsp download-file --file CHANGELOG.md --assetid 5...f --filepath upload download file upload/CHANGELOG.md from specified asset
 mdsp download-file --file upload/CHANGELOG.md --assetid 5...f download file upload/CHANGELOG.md from specified asset

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
