---
title: MindConnect-NodeJS - CLI - Overview
next:
  - title: Setting up the CLI
    link: setting-up-the-cli
---

<!-- @format -->

# MindConnect-NodeJS - CLI - <small>Overview</small>

## Introduction

The library comes with a command line interface which can be used to upload timeseries, files and create events in the mindsphere.
It can also be used to create starter projects, list, create and delete assets, aspect and asset types, manage users and groups, create data lake permissions etc.

### Installation via `npm` package manager

You will need [node.js](https://nodejs.org/) installed on your computer as prerequisite.

```bash
npm install -g @mindconnect/mindconnect-nodejs
```

See also [getting started](setting-up-the-cli.html) section of this documentation

### Binary Releases

The library can also be downloaded as executable from the [GitHub release page](https://github.com/mindsphere/mindconnect-nodejs/releases).

Download the version for your system and place it in folder which is in your PATH.

- `mc.exe` for windows
- `mc-macos` for macOS
- `mc-linux` for Linux

Linux, macOS: Rename the file to `mc` and make sure that the file is marked as executable (`chmod +x`).

## List of all commands

```text
$ mc --help
Usage: mc [options] [command]

Options:
  -V, --version                       output the version number
  -h, --help                          display help for command

Commands:
  onboard|ob [options]                onboard the agent with configuration stored in the config file
  configure-agent|co [options]        create data source configuration and mappings (optional: passkey) *
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
  download-bulk|db [options]          download the timeseries data in bulk from mindsphere *
  assets|ast [options]                list, create or delete assets in mindsphere *
  asset-types|at [options]            list, create or delete asset types in mindsphere *
  aspects|as [options]                list, create or delete aspects in mindsphere *
  asset-info|ai [options]             get infos about asset *
  download-events|dn [options]        download the events from mindsphere *
  list-assets|la [options]            list assets in the tenant *
  delete-asset|da [options]           delete asset with id <assetid> from mindsphere *
  list-files|ls [options]             list files stored with the asset *
  download-file|df [options]          download the file from mindsphere file service *
  delete-file|de [options]            delete the file from mindsphere file service *
  identity-management|iam [options]   manage mindsphere users and groups *
  data-lake|dlk [options]             manage data lake access permissions and STS tokens *
  spectrum-analysis|sp [options]      perform spectrum analysis on a sound file @
  signal-validation|sv [options]      perform signal validation @
  trend-prediction|tp [options]       perform trend prediction (linear/polynomial) @
  kpi-calculation|kp [options]        calculate kpi states or compute kpis @
  event-analytics|ea [options]        analyze mindsphere events @
  dev-proxy|px [options]              starts mindsphere development proxy & (optional passkey) *
  mqtt-createjwt|jw [options]         creates a signed token for opcua pub sub authentication #
  starter-ts|st [options]             creates a starter project in typescript #
  starter-js|sj [options]             creates a starter project in javascript #
  help [command]                      display help for command

  Documentation:

    the magenta colored commands * use app or service credentials or borrowed mindsphere cookies
    the cyan colored commands require mindconnectlib (agent) credentials
    the blue colored commands @ use analytical functions of MindSphere
    the green colored commands # are used as setup and utility commands
    the yellow colored commands & use borrowed mindsphere application cookies
    the credentials and cookies should only be used in secure environments
    Full documentation: https://opensource.mindsphere.io
```
