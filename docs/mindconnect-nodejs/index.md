---
title: MindConnect-NodeJS
next:
    - title: Proxy Support
      link: proxy-support
    - title: Troubleshooting Tips
      link: troubleshooting
---

<!-- @format -->

# MindConnect-NodeJS

## Introduction

This is a nodejs library which can be used as a starting point for custom agent implementation in nodejs. The library also contains useful tooling like command line support, which enables the user to easily import (historical) timeseries data, files and events to MindSphere. There is also a <a href="/docs/mindconnect-nodejs/sdk/index.html">Typescript/JavaScript SDK</a> and a <a href="/docs/mindconnect-nodejs/cli/development-proxy.html">development proxy</a> which can be used to kickstart your MindSphere development.

[<i class="fab fa-github"></i> GitHub](https://github.com/mindsphere/mindconnect-nodejs) [<i class="fab fa-npm"></i> npm](https://www.npmjs.com/package/@mindconnect/mindconnect-nodejs)

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

As an alternative you can also clone the [<i class="fab fa-github"></i> GitHub](https://github.com/mindsphere/mindconnect-nodejs) repository and install the file from the local file.

```bash
# clone the repository and run in the library directory
npm install
npm pack

# in your project directory run
npm install mindconnect-...tgz --save

```

The release files are also available for download at

[<i class="fab fa-github"></i> https://github.com/mindsphere/mindconnect-nodejs/releases](https://github.com/mindsphere/mindconnect-nodejs/releases)

## Legal

This project has been released under an [Open Source license](./LICENSE.md). The release may include and/or use APIs to Siemens’ or third parties’ products or services. In no event shall the project’s Open Source license grant any rights in or to these APIs, products or services that would alter, expand, be inconsistent with, or supersede any terms of separate license agreements applicable to those APIs. “API” means application programming interfaces and their specifications and implementing code that allows other software to communicate with or call on Siemens’ or third parties’ products or services and may be made available through Siemens’ or third parties’ products, documentations or otherwise.
