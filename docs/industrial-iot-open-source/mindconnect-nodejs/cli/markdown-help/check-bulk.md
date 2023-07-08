# mdsp check-bulk Command

Syntax:

```bash
mdsp check-bulk
```

Help:

```bash
mdsp check-bulk --help
```

Alternative form:

```bash
mc check-bulk
```

(The CLI was using `mc` as default command name in older versions)

## Description

checks the progress of the upload jobs from directory *

## Usage

Parameter list:

```text
Usage: mdsp check-bulk|cb [options]

checks the progress of the upload jobs from directory *

Options:
 -d, --dir config file with agent configuration (default: "bulkupload")
 -y, --retry retry attempts before giving up (default: "3")
 -i, --timeseries use (deprecated) standard timeseries upload
 -k, --passkey passkey
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp check-bulk` command:

```text

 Examples:

 mdsp check-bulk displays job progress of bulkimport directory
 mdsp check-bulk --dir asset1 --verbose displays job progress of asset1 directory with verbose output

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
