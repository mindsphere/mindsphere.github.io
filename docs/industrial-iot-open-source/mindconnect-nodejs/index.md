---
tags: 
  - Insights Hub / Industrial IoT Tools and Libraries
search:
  boost: 2.0
---

# MindConnect-NodeJS

## Introduction

This is a nodejs library which can be used as a starting point for custom agent implementation in nodejs. The library also contains useful tooling like [command line support](./cli/index.md), which enables the user to easily import (historical) timeseries data, files and events to
Insights Hub. There is also a [Typescript/JavaScript SDK](./sdk/index.md) and a [development proxy](./cli/development-proxy.md) which can be used to kickstart your development.

* [MindConnect-NodeJs at GitHub:siemens-link-extern:](https://github.com/mindsphere/mindconnect-nodejs)
* [MindConnect-NodeJs at npm:siemens-link-extern:](https://www.npmjs.com/package/@mindconnect/mindconnect-nodejs)

## Prerequisites

You will need [Node.js:siemens-link-extern:](https://nodejs.org) which can be acquired from [nodejs.org:siemens-link-extern:](https://nodejs.org/en/download/).
The library can be installed everywhere where nodejs is running ( Windows, Linux, MacOS, Raspbian...)

## Getting and Installing the MindConnect-NodeJS Library

There are several ways to install the library. The most common one is via npm registry:

Installing the library via [npm:siemens-link-extern:](https://www.npmjs.com/package/@mindconnect/mindconnect-nodejs)

```shell
# install the latest stable library from the npm registry
npm install @mindconnect/mindconnect-nodejs

# install the latest alpha version from the npm registry
npm install @mindconnect/mindconnect-nodejs@alpha
```

As an alternative you can also clone the [GitHub:siemens-link-extern:](https://github.com/mindsphere/mindconnect-nodejs) repository and install the file from the local file.

```shell
# clone the repository and run in the library directory
npm install
npm pack

# in your project directory run
npm install mindconnect-...tgz --save

```

The release files are also available for [download:siemens-link-extern:](https://github.com/mindsphere/mindconnect-nodejs/releases).

## Legal

This project has been released under an [Open Source License](./license.md). The release may include and/or use APIs to Siemens’ or third parties’ products or services.
In no event shall the project’s Open Source license grant any rights in or to these APIs, products or services that would alter, expand, be inconsistent with, or supersede any terms of separate license agreements applicable to those APIs.
“API” means application programming interfaces and their specifications and implementing code that allows other software to communicate with or call on Siemens’ or third parties’ products or services and may be made available through Siemens’ or third parties’ products, documentations or otherwise.
