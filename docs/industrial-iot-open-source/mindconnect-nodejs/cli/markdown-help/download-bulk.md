# mdsp download-bulk Command

Syntax:

```bash
mdsp download-bulk
```

Help:

```bash
mdsp download-bulk --help
```

Alternative form:

```bash
mc download-bulk
```

(The CLI was using `mc` as default command name in older versions)

## Description

download the timeseries data in bulk from Insights Hub *

## Usage

Parameter list:

```text
Usage: mdsp download-bulk|db [options]

download the timeseries data in bulk from Insights Hub *

Options:
 -d, --dir directory for the download (shouldn't exist) (default: "bulkdownload")
 -i, --assetid Insights Hub asset id
 -a, --aspectname aspectname
 -f, --from from date
 -t, --to to date
 -s, --size max entries per file (default: "200")
 -p, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp download-bulk` command:

```text

 Examples:

 mdsp download-bulk --assetid 12345..ef --from 12/10/2019 --to 12/16/2019 download timeseries from specified asset

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
