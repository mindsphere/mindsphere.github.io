---
title: MindConnect-NodeJS
hide_license_text: True
show_mit_license_text: True
---
# MindConnect-NodeJS 

## Introduction 

This is the documentation for the MindConnect-NodeJs library and CLI. The development of this package has started as community effort at Siemens and is now managed as open source library under the MIT License.

## What is it

This is a nodejs library which can be used as a starting point for custom agent implementation in nodejs. The library also contains useful tooling like command line support, which enables the user to easily import (historical) timeseries data, files and events to MindSphere. 

## Prerequisites

You will need [<i class="fab fa-node"></i> Node.js](https://nodejs.org) which can be acquired from [nodejs.org](https://nodejs.org/en/download/). The library can be installed everywhere where nodejs is running (<i class="fab fa-windows"></i> Windows,<i class="fab fa-linux"></i> Linux, <i class="fab fa-apple"></i>OSX , <i class="fab fa-raspberry-pi"></i> Raspbian...)

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
