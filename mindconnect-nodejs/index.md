---
title: MindConnect-NodeJS
hide_license_text: True
show_mit_license_text: True
---
# MindConnect-NodeJS

## Introduction 

This is the documentation for the MindConnect-NodeJs library and CLI. 

## What is it

This is a nodejs library which can be used as a starting point for custom agent implementation in nodejs. The library also contains useful tooling like command line support, which enables the user to easily import (historical) timeseries data, files and events to MindSphere. 

## Prerequisites

You will need [<i class="fab fa-node"></i> Node.js](https://nodejs.org) which can be acquired from [nodejs.org](https://nodejs.org/en/download/).


## Getting and Installing the MindConnect-NodeJS Library

There are several ways to install the library. The most common one is via npm registry:

Installing the library via [<i class="fab fa-npm"></i> npm](https://www.npmjs.com/package/@mindconnect/mindconnect-nodejs) 

```bash
# install the latest stable library from the npm registry
npm install @mindconnect/mindconnect-nodejs

# install the latest alpha version from the npm registry
npm install @mindconnect/mindconnect-nodejs@alpha
```

As an alternative you can also clone the [<i class="fab fa-github"></i> GitHub](https://github.com/mindsphere/mindconnect-nodejs) repository and  install the file from the local file.

```bash
# clone the repository and run in the library directory
npm install
npm pack

# in your project directory run
npm install mindconnect-...tgz --save

```

The release files are also available for download at 

[<i class="fab fa-github"></i> https://github.com/mindsphere/mindconnect-nodejs/releases](https://github.com/mindsphere/mindconnect-nodejs/releases)


## Installing the Command Line Interface

The library comes with a command line interface which can also be installed globally. You can use the command line mode to upload timeseries, files and create events in the mindsphere.

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
