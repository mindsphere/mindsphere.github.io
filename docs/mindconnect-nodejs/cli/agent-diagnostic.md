---
title: MindConnect-NodeJS - CLI - Agent Diagnostics
next:
  - title: Overview
    link: index
  - title: Setting up the CLI
    link: setting-up-the-cli
---

# MindConnect-NodeJS - CLI - <small>Agent Diagnostics</small>

## Introduction

If you are experiencing some problems with your agents (due to missing DataSourceConfiguration, agent Mappings or similar) you can register your Agent
to the diagnostic endpoint of MindConnect API.

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    MindSphere provides the Agent Diagnostic application on your launchpad which can be used to acquire this information as well.
<!-- prettier-ignore-end -->

## Register the agent for diagnostic (`mc register-diagnostic`)

This command registers the agent for diagnostic.

```text
mc register-diagnostic --help
Usage: mc register-diagnostic|rd [options]

register agent for diagnostic *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -i, --agentid <agentid>     agent id
  -k, --passkey <passkey>     passkey
  -v, --verbose               verbose output
  -h, --help                  display help for command

  Examples:

    mc rd -k mypasskey
    mc register-diagnostic --config someagent.json -passkey mypasskey

  Important:

  Authentication with service credentials or app credentials

        - append option [--passkey <your passkey>] to the command
        - create environment variable MDSP_PASSKEY with your current passkey

  Authentication with borrowed session cookie and xsrf-token cookie

        - create environment variables MDSP_HOST , MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies

  Full Documentation:

    https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/setting-up-the-cli.html
```

### Example

This will register the agent with the configuration stored in {yourconfig.json} for diagnostic.

```bash
mc register-diagnostic --config {yourconfig.json} --passkey {yourpasskey}
```

## Retrieve the diagnostic data (`mc get-diagnostic`)

This command retrieves the diagnostic data.

```text
mc get-diagnostic --help
Usage: mc get-diagnostic|gd [options]

get diagnostic information *

Options:
  -c, --config <agentconfig>  config file with agent configuration
  -a, --agentid <agentid>     agent id
  -k, --passkey <passkey>     passkey
  -l, --all                   display all entries not just the last page
  -j, --json                  json output
  -t, --text                  text (raw) output
  -v, --verbose               verbose output
  -h, --help                  display help for command

  Examples:

    mc gd -k mypasskey
    mc get-diagnostic --config someagent.json --passkey mypasskey
    mc get-diagnostic --passkey mypasskey --text --all > log.csv

  Important:

  Authentication with service credentials or app credentials

        - append option [--passkey <your passkey>] to the command
        - create environment variable MDSP_PASSKEY with your current passkey

  Authentication with borrowed session cookie and xsrf-token cookie

        - create environment variables MDSP_HOST , MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies

  Full Documentation:

    https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/setting-up-the-cli.html
```

### Example

This will get the last diagnostic data for the agent with {yourconfig.json} configuration file as json.

```bash
mc get-diagnostic --config {yourconfig.json} --passkey {yourpasskey} --json
```

This will get all diagnostic data for the agent with {yourconfig.json} configuration file as text and store it in log.csv file.

```bash
mc get-diagnostic --config {yourconfig.json} --passkey {yourpasskey} --text --all > log.csv
```

## Unregister the agent (`mc unregister-diagnostic`)

This command unregisters the agent from diagnostic.

```text
mc unregister-diagnostic --help
Usage: mc unregister-diagnostic|ud [options]

unregister agent from diagnostic *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -i, --agentid <agentid>     agent id
  -k, --passkey <passkey>     passkey
  -v, --verbose               verbose output
  -h, --help                  display help for command

  Examples:

    mc ud -k mypasskey
    mc unregister-diagnostic --config someagent.json -passkey mypasskey

  Important:

  Authentication with service credentials or app credentials

        - append option [--passkey <your passkey>] to the command
        - create environment variable MDSP_PASSKEY with your current passkey

  Authentication with borrowed session cookie and xsrf-token cookie

        - create environment variables MDSP_HOST , MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies

  Full Documentation:

    https://opensource.mindsphere.io/docs/mindconnect-nodejs/cli/setting-up-the-cli.html
```

### Example

Unregister the agent:

```bash
mc unregister-diagnostic --config {yourconfig.json} --passkey {yourpasskey}
```
