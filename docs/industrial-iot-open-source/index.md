---
tags: 
  - Insights Hub / Industrial IoT Tools and Libraries
---

# Industrial IoT Open Source Tools and Libraries

Industrial IoT Open Source Tools and Libraries are contributions from the Industrial IoT community. These are demo applications, libraries and SDKs and useful connectivity tools which are maintained and released as open source software. The source code for all libraries is available on  Github and the packages can be downloaded via common package management tools.

!!! info
    **Siemens Xcelerator** will fully incorporate **MindSphere** – our leading **industrial IoT** solution – into a wide range of industry solutions and modular cloud services.

    As a result, the industrial IoT capabilities of MindSphere will be available to the full Siemens portfolio, software and hardware alike, while at the same time enabling our customer and partners across the Siemens Xcelerator ecosystem to build their industry specific applications.

    Take a look at [github.com/mindsphere:siemens-link-extern:](https://github.com/mindsphere) for all Insights Hub and Industrial IOT Open Source Projects.

## MindConnect-NodeJs

This is a nodejs library which can be used as a starting point for custom agent implementation in node.js. The library comes with support for TimeSeries, Events and File Upload and it can create and update the DataSourceConfiguration and the Mappings in Industrial IoT. The most recent feature is support for automatic mappings to the asset instances. [Learn more...](./mindconnect-nodejs/index.md)

## TypeScript SDK

TypeScript/JavaScript Community SDK for Industrial IoT APIs. It implements support for both browser (e.g. angular, react...) and backend development in node.js and it supports all different Industrial IoT authentication types (Cookies, UserCredentials, AppCredentials, ServiceCredentials, Industrial IoT Agents). It is packaged as part of @mindconnect/mindconnect-nodejs library. [Learn more...](./mindconnect-nodejs/sdk/index.md)

## Command Line Interface

Industrial IoT GUIs are great but some tasks are still better done from the command line. The Industrial IoT CLI is a power tool for experienced Industrial IoT administrators as it gives you scriptable access to common tasks like agent onboarding and offboarding, asset management, historical time series upload, user management and it also offers valuable tooling for software developers.
It is packaged as part of @mindconnect/mindconnect-nodejs library. [Learn more...](./mindconnect-nodejs/cli/index.md)

## MindConnect Node-RED Node

A Node-RED node which can be used to upload the time series data, files and events to Industrial IoT. The node runs on x86, Raspberry PI, SIMATIC IOT 2040 and is also available as a docker container on docker hub.
There are also live flow examples with flows sending e.g. the OPC UA or MQTT Data to Industrial IoT at [https://playground.mindconnect.rocks:siemens-link-extern:](https://playground.mindconnect.rocks)

## Authentication Helper

This chrome extension can be used to simplify the development tasks for which you need to use the SESSION and XSRF-TOKEN to access Industrial IoT APIs. It provides an easy way to copy the Industrial IoT authentication cookies to the clipboard without having to go to chrome developer tools. [Learn more...](./mindsphere-auth-helper/index.md)
