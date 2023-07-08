# mdsp subtenants Command

Syntax:

```bash
mdsp subtenants
```

Help:

```bash
mdsp subtenants --help
```

Alternative form:

```bash
mc subtenants
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete subtenants *

## Usage

Parameter list:

```text
Usage: mdsp subtenants|st [options]

list, create or delete subtenants *

Options:
 -m, --mode [list|create|delete|template | info] list | create | delete | template | info (default: "list")
 -f, --file .mdsp.json file with subtenant definition
 -n, --subtenant the subtenant name
 -i, --subtenantid the subtenant id
 -k, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp subtenants` command:

```text

 Examples:

 mdsp subtenants --mode list list all subtenants
 mdsp subtenants --mode template --subtenant create a template file for 
 mdsp subtenants --mode create --file create subtenant 
 mdsp subtenants --mode info --subtenantid subtenant info for specified id
 mdsp subtenants --mode delete --subtenantid delete subtenant with specified id

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
