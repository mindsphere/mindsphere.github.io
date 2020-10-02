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

Usage: register-diagnostic|rd [options]

register agent for diagnostic *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -k, --passkey <passkey>     passkey
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc rd -k mypasskey
    mc register-diagnostic --config someagent.json -passkey mypasskey

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials
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

Usage: get-diagnostic|gd [options]

get diagnostic information *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -k, --passkey <passkey>     passkey
  -a, --all                   display all entries not just the last page
  -j, --json                  json output
  -t, --text                  text (raw) output
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc gd -k mypasskey
    mc get-diagnostic --config someagent.json --passkey mypasskey
    mc get-diagnostic --passkey mypasskey --text --all > log.csv

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials

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

Usage: unregister-diagnostic|ud [options]

unregister agent from diagnostic *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -k, --passkey <passkey>     passkey
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc ud -k mypasskey
    mc unregister-diagnostic --config someagent.json -passkey mypasskey

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials

```

### Example

Unregister the agent:

```bash
mc unregister-diagnostic --config {yourconfig.json} --passkey {yourpasskey}
```
