# mdsp create-event Command

Syntax:

```bash
mdsp create-event
```

Help:

```bash
mdsp create-event --help
```

Alternative form:

```bash
mc create-event
```

(The CLI was using `mc` as default command name in older versions)

## Description

create an event in the Insights Hub (optional: passkey) *

## Usage

Parameter list:

```text
Usage: mdsp create-event|ce [options]

create an event in the Insights Hub (optional: passkey) *

Options:
 -c, --config config file with agent configuration
 -r, --cert [privatekey] required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
 -i, --assetid Insights Hub asset id (default: send event to the agent)
 -y, --sourceType Source Type (default: "MindConnect-Agent")
 -S, --sourceId Source Id (default: "Monikas-Air-2.fritz.box")
 -O, --source Source (default: "MindConnect-NodeJs CLI")
 -V, --severity Severity (20:Error, 30:Warning , 40:information) (default: "20")
 -d, --desc Event description (default: "CLI created event")
 -t, --timestamp Timestamp (default: "2022-11-06T01:51:16.184Z")
 -y, --retry retry attempts before giving up (default: "3")
 -p, --passkey passkey (optional, event creation uses service credentials *)
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp create-event` command:

```text

 Examples:

 mdsp create-event create error event with default values and current timestamp
 mdsp ce --desc Warning! --severity 30 create warning with description warning
 mdsp ce --desc "custom event" --i 123....4 create error event for asset with id 123....4

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
