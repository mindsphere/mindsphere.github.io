# mdsp asset-info Command

Syntax:

```bash
mdsp asset-info
```

Help:

```bash
mdsp asset-info --help
```

Alternative form:

```bash
mc asset-info
```

(The CLI was using `mc` as default command name in older versions)

## Description

get infos about asset *

## Usage

Parameter list:

```text
Usage: mdsp asset-info|ai [options]

get infos about asset *

Options:
 -i, --assetid Insights Hub asset id
 -k, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp asset-info` command:

```text

 Examples:

 mdsp asset-info --assetid 123456...ef print out infos about asset with id 132456...ef

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
