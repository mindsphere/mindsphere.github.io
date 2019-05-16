---
title: MindConnect-NodeJS - Getting Started
hide_license_text: True
show_mit_license_text: True
---

# MindConnect-NodeJS - <small>Getting Started</small>

## Installing the Command Line Interface

The library comes with a command line interface which should be installed globally. 
You can use the command line mode to upload timeseries, files and create events in the mindsphere.

```bash
# install the library globaly if you want to use its command line interface.
 npm install -g @mindconnect/mindconnect-nodejs
```

This enables the command line interface which can be used to create starter projects, upload timeseries, events and files, read agent diagnostics etc.

```bash
# run mc --help to see the full help information

mc --help
Usage: mc [options] [command]

Options:
  -V, --version                       output the version number
  -h, --help                          output usage information

Commands:
  onboard|ob [options]                onboard the agent with configuration stored in the config file
  agent-token|atk [options]           displays the agent token for use in other tools (e.g. postman)
  upload-timeseries|ts [options]      parse .csv file with timeseriesdata and upload the timeseries data to mindsphere
  upload-file|uf [options]            upload the file to the mindsphere file service (optional: passkey) *
  create-event|ce [options]           create an event in the mindsphere (optional: passkey) *
  agent-status|as [options]           displays the agent status and agent onboarding status *
  create-agent|ca [options]           create an agent in the mindsphere *
  offboard-agent|of [options]         offboards the agent in the mindsphere *
  renew-agent|rn [options]            renews the agent secrets  *
  service-credentials|sc [options]    provide login for commands which require technical user credentials *
  service-token|stk [options]         displays the service token for use in other tools (e.g. postman) *
  register-diagnostic|rd [options]    register agent for diagnostic *
  get-diagnostic|gd [options]         get diagnostic information *
  unregister-diagnostic|ud [options]  unregister agent from diagnostic *
  prepare-bulk|pb [options]           creates a template directory for timeseries (bulk) upload *
  run-bulk|rb [options]               runs the timeseries (bulk) upload job from <directoryname> directory *
  check-bulk|cb [options]             checks the progress of the upload jobs from <directoryname> directory *
  starter-ts|st [options]             creates a starter project in typescript #
  starter-js|sj [options]             creates a starter project in javascript #

  Documentation:

    the magenta colored commands * require service credentials.
    the cyan colored commands require mindconnectlib (agent) credentials
    the green colored commands # are used to setup starter projects
    the service credentials should only be used in secure environments for setup tasks
    Full documentation: https://mindsphere.github.io

```
