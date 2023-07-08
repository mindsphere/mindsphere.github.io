# mdsp onboard Command

Syntax:

```bash
mdsp onboard
```

Help:

```bash
mdsp onboard --help
```

Alternative form:

```bash
mc onboard
```

(The CLI was using `mc` as default command name in older versions)

## Description

onboard the agent with configuration stored in the config file

## Usage

Parameter list:

```text
Usage: mdsp onboard|ob [options]

onboard the agent with configuration stored in the config file

Options:
 -c, --config config file with agent configuration (default: "agentconfig.json")
 -r, --cert [privatekey] required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp onboard` command:

```text

 Examples:

 mdsp ob uses default agentconfig.json
 mdsp onboard --config agent.json uses specified configuration file
 mdsp onboard --config agent.json --cert private.key uses specified key for RSA_3072 profile

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
