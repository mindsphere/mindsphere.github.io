---
title: MindConnect Node-RED Node - Overview
---

# MindConnect Node-RED Node - <small>Overview</small>

## Introduction

A Node-RED node which can be used to upload the time series data, files and events to MindSphere via MindConnect. The node runs on x86, Raspberry PI, Siemens IOT 2040 and is also available as a docker container for your convinience.

[<i class="fab fa-github"></i> GitHub](https://github.com/mindsphere/node-red-contrib-mindconnect) [<i class="fab fa-npm"></i> npm](https://www.npmjs.com/package/@mindconnect/node-red-contrib-mindconnect) [<i class="fab fa-docker"></i> DockerHub](https://hub.docker.com/r/mindconnect/node-red-contrib-mindconnect)

The node is written in typescript/javascript without any native dependencies so it should work beside x86 also on other platforms (e.g. on raspberry pi, [Simatic IoT2000 Gateways](https://w3.siemens.com/mcms/pc-based-automation/en/industrial-iot/Pages/Default.aspx?tabcardname=simatic%20iot2000%20io-shield), [Siemens Industrial Edge](https://new.siemens.com/global/en/products/automation/topic-areas/industrial-edge.html) etc., you just have to have [Node-RED](https://nodered.org) installed).

## What is it

The Node-RED platform targets the makers who want an easy, flow-based way to configure and manage the flow of data with their IoT devices. This node provides the
connectivity to MindSphere for TimeSeries upload, File upload and Event Creation.

![MindConnect Node-RED Node](./images/mindconnectagent-flow.png)

## Legal

This project has been released under an [Open Source license](./LICENSE.md). The release may include and/or use APIs to Siemens’ or third parties’ products or services. In no event shall the project’s Open Source license grant any rights in or to these APIs, products or services that would alter, expand, be inconsistent with, or supersede any terms of separate license agreements applicable to those APIs. “API” means application programming interfaces and their specifications and implementing code that allows other software to communicate with or call on Siemens’ or third parties’ products or services and may be made available through Siemens’ or third parties’ products, documentations or otherwise.
