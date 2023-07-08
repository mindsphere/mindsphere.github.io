# mdsp events-bulk Command

Syntax:

```bash
mdsp events-bulk
```

Help:

```bash
mdsp events-bulk --help
```

Alternative form:

```bash
mc events-bulk
```

(The CLI was using `mc` as default command name in older versions)

## Description

download or delete the events in bulk *

## Usage

Parameter list:

```text
Usage: mdsp events-bulk|dn [options]

download or delete the events in bulk *

Options:
 -m, --mode [download|template|delete|check] mode [download | template | delete | check] (default: "download")
 -d, --dir download folder (default: "eventdownload")
 -i, --assetid Insights Hub asset id
 -j, --jobid check deletion process of jobs with jobid
 -f, --filter [filter] JSON file with filter (see:
 https://developer.mindsphere.io/apis/advanced-eventmanagement/api-eventmanagement-best-practices.html)
 -s, --size max entries per file (default: "100")
 -t, --sort sort events (default: "timestamp,asc")
 -p, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp events-bulk` command:

```text

 Examples:

 mdsp events-bulk --mode download --asssetid 1234567..ef download events from specified asset
 mdsp events-bulk --mode download --dir newdir download last 7 days of events to folder
 mdsp events-bulk --mode template --assetid 1234576..ef create template file event.filter.mdsp.json
 mdsp events-bulk --mode download --filter event.filter.mdsp.json download events using configured filter
 mdsp events-bulk --mode delete --filter event.filter.mdsp.json delete events using configured filter
 mdsp events-bulk --mode check --jobid check the state of bulk deleting job

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
