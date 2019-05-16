---
title: MindConnect-NodeJS - CLI -Managing Agent Credentials
hide_license_text: True
show_mit_license_text: True
---

#MindConnect-NodeJS - CLI - <small>Managing Agent Credentials</small>

## Acquiring the agent credentials from the mindsphere

The mindsphere agents require the initial agent configuration which can be acquired from the MindSphere in several different ways. For example you can create an Agent in the asset manager of the type core.mclib and store the credenials on your machine (preferably in the file called agentconfig.json)

```json
{
  "content": {
    "baseUrl": "https://southgate.eu1.mindsphere.io",
    "iat": "ey...",
    "clientCredentialProfile": [
      "SHARED_SECRET"
    ],
    "clientId": "5d06988ac50a44758ed0d9bff9edc4a0",
    "tenant": "{yourtenant}"
  },
  "expiration": "2019-05-23T11:42:24.000Z"
}
```

## Use the CLI Commands to get the required configuration

The mindconnect-nodejs CLI provides a set of commands which can be used to acquire and manage the agent credentials.

These commands can

- Create new agent in the MindSphere ```mc create-agent```
- Onboard the agent ```mc onboard```
- Check the agent status ```mc agent-status```
- Offboard the agent ```mc offboard-agent``` 
- Renew the agent secret ```mc renew-agent```

The prerequsite for most of these commands is that you have registered your service credentials using ```mc service-credentials``` command.

## Creating a new agent via CLI (```mc create-agent```)

```bash
mc create-agent --help
Usage: create-agent|ca [options]

create an agent in the mindsphere *

Options:
  -c, --config <agentconfig>  config file for agent configuration
  -n, --name <name>           agent name (default: "Agent1558007568586")
  -p, --parentid <name>       parent asset id
  -f, --profile <profile>     security profile [SHARED_SECRET|RSA_3072] (default: "SHARED_SECRET")
  -k, --passkey <passkey>     passkey
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc create-agent --config agent.json --passkey passkey...     create agent with default parameters

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials
```

### Example

The command below will create a new agent with default settings in your root asset in the mindsphere and prompt you with the link to asset management in your cockpit where you can configure the agent details. Define the agent configuration, the asset mapping etc.

```bash
mc create-agent --config agentconfig.json --passkey {yourpasskey}
```

If you want to use RSA_3072 profile you will have to create a certificate for your agent. This can be done
for example with help of openssh:

```bash
openssl genrsa -out private.key 3072
```

## Onboarding the agent (```mc onboard```)

The cli can onboard the agent with help of the ```mc onboard``` command

```bash
mc onboard --help

Usage: onboard|ob [options]

onboard the agent with configuration stored in the config file

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc ob   				uses default agentconfig.json
    mc onboard --config agent.json 	uses specified configuration file
    mc onboard --config agent.json --cert private.key 	uses specified key for RSA_3072 profile
```

### Example

The command below will onboard your agent with the configuration stored in agent.json file and a RSA_3072 certificate which is stored in private.key file.

```bash
mc onboard --config agent.json --cert private.key
```

## Checking the agent status (```mc agent-status```)

The CLI can check the local and remote agent status. The passkey parameter is not required if you only 
want to see the local status

```bash
mc agent-status --help
Usage: agent-status|as [options]

displays the agent status and agent onboarding status *

Options:
  -c, --config <agentconfig>  config file with agent configuration (default: "agentconfig.json")
  -k, --passkey <passkey>     passkey
  -r, --cert [privatekey]     required for agents with RSA_3072 profile. create with: openssl genrsa -out private.key 3072
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc agent-status                                     uses default agentconfig.json
    mc agent-status --config agent.json                 uses specified configuration file
    mc agent-status --cert private.key                  uses specified key for RSA_3072 profile
    mc agent-status --passkey mypasskey                 displays also the online agent information
    mc agent-status --passkey mypasskey --verbose       displays additionally the mappings and configuration

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials
```

### Example

```bash
mc  agent-status --passkey {{your passkey}}
```

This would return a similar response to the one below.

```text
Agent status, local information (from .mc folder):
Agent Id: a3ac5ae889544717b02fa8282a30d1b4 is onboarded, data source is configured, mappings are configured.
Online Status: OFFLINE since: 2019-05-14T06:54:19.411Z
Agent is ONBOARDED
```

## Offboarding the agent (```mc offboard-agent```)

The agent can be offboarded with help of the CLI as well.

```bash
mc offboard-agent --help

Usage: offboard-agent|of [options]

offboards the agent in the mindsphere *

Options:
  -c, --config <agentconfig>  config file for agent configuration
  -k, --passkey <passkey>     passkey
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc offboard-agent --config agent.json --passkey passkey... 	 offboard agent with agent.json configuration

  Important: 

    you need to supply the service credentials for this operation and provide the passkey 

    how to get service credentials: 
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials

```

### Example

This command will offboard the agent with the agent configuration stored in agentconfig.json

```bash
mc offboard-agent --config agentconfig.json --passkey {yourpasskey}
```

!!! warning
    You will have to renew the agent secret before you can onboard the agent again.


## Renewing the agent secrets (```mc renew-agent```)

The agent secrets can be renewed with help of the mc renew-agent command.

```bash
mc renew-agent --help 

Usage: renew-agent|rn [options]

renews the agent secrets  *

Options:
  -c, --config <agentconfig>  config file for agent configuration
  -k, --passkey <passkey>     passkey
  -y, --retry <number>        retry attempts before giving up (default: 3)
  -v, --verbose               verbose output
  -h, --help                  output usage information

  Examples:

    mc renew-agent --config agent.json --passkey passkey... 	 renew agent secrets in agent.json configuration

  Important: 

    you need to supply the service credentials for this operation and provide the passkey 

    how to get service credentials: 
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials

```

### Example

```bash
mc renew-agent --config agent.json --passkey {yourpasskey}
``` 

!!! info
    you should offboard the agent first before renewing the secrets