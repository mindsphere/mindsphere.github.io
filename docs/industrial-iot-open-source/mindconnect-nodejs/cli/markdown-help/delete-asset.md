# mdsp delete-asset Command

Syntax:

```bash
mdsp delete-asset
```

Help:

```bash
mdsp delete-asset --help
```

Alternative form:

```bash
mc delete-asset
```

(The CLI was using `mc` as default command name in older versions)

## Description

delete asset with id from Insights Hub *

## Usage

Parameter list:

```text
Usage: mdsp delete-asset|da [options]

delete asset with id from Insights Hub *

Options:
 -i, --assetid Insights Hub asset id
 -k, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp delete-asset` command:

```text

 Examples:

 mdsp delete-asset --assetid 123456...ef delete asset with id 132456...ef

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
