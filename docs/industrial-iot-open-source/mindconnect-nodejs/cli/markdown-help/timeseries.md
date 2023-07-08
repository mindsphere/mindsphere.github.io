# mdsp timeseries Command

Syntax:

```bash
mdsp timeseries
```

Help:

```bash
mdsp timeseries --help
```

Alternative form:

```bash
mc timeseries
```

(The CLI was using `mc` as default command name in older versions)

## Description

list timeseries data *

## Usage

Parameter list:

```text
Usage: mdsp timeseries|ts [options]

list timeseries data *

Options:
 -i, --assetid Insights Hub asset id
 -n, --aspectname Insights Hub aspect name
 -f, --from begining of the time range to read (default: "2022-11-05T01:51:16.182Z")
 -t, --to end of the time range to read (default: "2022-11-06T01:51:16.182Z")
 -s, --select comma separated list of variable names
 -d, --download download timeseries to a set of files
 -a, --all include also quality codes not just variable values
 -r, --raw don't strip the nextRecord URLs from downloaded JSON
 -h, --formatted write JSON strings with indentation
 -l, --local use local time in timeseries list
 -c, --count number of timeseries entries per request (default: "2000")
 -p, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp timeseries` command:

```text

 Examples:

 mdsp timeseries --asssetid 1234567..ef --aspectname Environment list recent timeseries for aspect Environment
 mdsp timeseries --asssetid 1234567..ef --aspectname Environment --select Temperature 
 list recent temperature timeseries 
 mdsp timeseries --asssetid 1234567..ef --aspectname Environment --select Temperature --all 
 list all recent temperature timeseries
 mdsp timeseries --asssetid 1234567..ef --aspectname Environment --select Temperature --all 
 list all recent temperature timeseries
 mdsp timeseries --asssetid 1234567..ef --aspectname Environment --download 
 download the recent timeseries data for the Environment aspect

 Important:

 Please use bulk commands if you want to download a lot of data.


```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
