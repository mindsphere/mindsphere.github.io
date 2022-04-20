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

You will need [node.js](../markdown-help/https://nodejs.org/) installed on your computer as prerequisite.

```bash
npm install -g @mindconnect/mindconnect-nodejs
```

See also [getting started](../markdown-help/setting-up-the-cli.html) section of this documentation

### Binary Releases

The library can also be downloaded as executable from the [GitHub release page](../markdown-help/https://github.com/mindsphere/mindconnect-nodejs/releases).

Download the version for your system and place it in folder which is in your PATH.

- `mc.exe` for windows
- `mc-macos` for macOS
- `mc-linux` for Linux

Linux, macOS: Rename the file to `mc` or `mdsp` and make sure that the file is marked as executable (`chmod +x`).

## Agent Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp onboard`](../markdown-help/onboard.html) |  onboard the agent with configuration stored in the config file |
| [`mdsp configure-agent`](../markdown-help/configure-agent.html) |  create data source configuration and mappings (optional: passkey) * |
| [`mdsp agent-token`](../markdown-help/agent-token.html) |  displays the agent token for use in other tools (e.g. postman) |
| [`mdsp upload-timeseries`](../markdown-help/upload-timeseries.html) |  parse .csv file with timeseriesdata and upload the timeseries data to mindsphere |
| [`mdsp upload-file`](../markdown-help/upload-file.html) |  upload the file to the mindsphere file service (optional: passkey) * |
| [`mdsp create-event`](../markdown-help/create-event.html) |  create an event in the mindsphere (optional: passkey) * |
| [`mdsp agent-status`](../markdown-help/agent-status.html) |  displays the agent status and agent onboarding status * |
| [`mdsp create-agent`](../markdown-help/create-agent.html) |  create an agent in the mindsphere * |
| [`mdsp offboard-agent`](../markdown-help/offboard-agent.html) |  offboards the agent in the mindsphere * |
| [`mdsp renew-agent`](../markdown-help/renew-agent.html) |  renews the agent secrets  * |
| [`mdsp register-diagnostic`](../markdown-help/register-diagnostic.html) |  register agent for diagnostic * |
| [`mdsp get-diagnostic`](../markdown-help/get-diagnostic.html) |  get diagnostic information * |
| [`mdsp unregister-diagnostic`](../markdown-help/unregister-diagnostic.html) |  unregister agent from diagnostic * |

## IoT Bulk Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp prepare-bulk`](../markdown-help/prepare-bulk.html) |  creates a template directory for timeseries (bulk) upload * |
| [`mdsp run-bulk`](../markdown-help/run-bulk.html) |  runs the timeseries (bulk) upload job from  directory * |
| [`mdsp check-bulk`](../markdown-help/check-bulk.html) |  checks the progress of the upload jobs from  directory * |
| [`mdsp download-bulk`](../markdown-help/download-bulk.html) |  download the timeseries data in bulk from mindsphere * |
| [`mdsp delivery-jobs`](../markdown-help/delivery-jobs.html) |  manage mqtt delivery jobs to publish MQTT commands to the clients * |

## Assets, Files and Event Handling Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp asset-lock`](../markdown-help/asset-lock.html) |  lock/unlock asset model modifications * |
| [`mdsp asset-info`](../markdown-help/asset-info.html) |  get infos about asset * |
| [`mdsp assets`](../markdown-help/assets.html) |  list, create or delete assets * |
| [`mdsp asset-types`](../markdown-help/asset-types.html) |  list, create or delete asset types * |
| [`mdsp aspects`](../markdown-help/aspects.html) |  list, create or delete aspects * |
| [`mdsp event-types`](../markdown-help/event-types.html) |  list, create or delete event types * |
| [`mdsp events`](../markdown-help/events.html) |  list, create or delete events * |
| [`mdsp events-bulk`](../markdown-help/events-bulk.html) |  download or delete the events in bulk * |
| [`mdsp aggregates`](../markdown-help/aggregates.html) |  list timeseries aggregates * |
| [`mdsp notifications`](../markdown-help/notifications.html) |  send email, sms and push notifications * |

## MindSphere Open Edge Device Management Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp oe-device-types`](../markdown-help/oe-device-types.html) |  list, create or delete device types (open edge) * |
| [`mdsp oe-devices`](../markdown-help/oe-devices.html) |  list, create or delete (open edge) devices * |
| [`mdsp oe-device-status`](../markdown-help/oe-device-status.html) |  list, get, or update (open edge) device status information * |
| [`mdsp oe-app-inst`](../markdown-help/oe-app-inst.html) |  list, create, configure or delete app instance (open edge) * |
| [`mdsp oe-app-deploy`](../markdown-help/oe-app-deploy.html) |  list, create, update app installation task(s) (open edge) * |
| [`mdsp oe-deploy-workflow`](../markdown-help/oe-deploy-workflow.html) |  list, create/instantiate, update or delete/cancel workflow deployment model or instance(s) (open edge) * |
| [`mdsp oe-firm-deploy`](../markdown-help/oe-firm-deploy.html) |  list, create, update firmware deployment task(s) (open edge) * |

## Tenant Management Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp tenant`](../markdown-help/tenant.html) |  create or delete tenant legal configuration and logo * |
| [`mdsp subtenants`](../markdown-help/subtenants.html) |  list, create or delete subtenants * |

## Deprecated Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp list-assets`](../markdown-help/list-assets.html) |  list assets in the tenant * |
| [`mdsp delete-asset`](../markdown-help/delete-asset.html) |  delete asset with id  from mindsphere * |
| [`mdsp list-files`](../markdown-help/list-files.html) |  list files stored with the asset * |
| [`mdsp download-file`](../markdown-help/download-file.html) |  download the file from mindsphere file service * |
| [`mdsp delete-file`](../markdown-help/delete-file.html) |  delete the file from mindsphere file service * |

## Identity and Access Management Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp identity-management`](../markdown-help/identity-management.html) |  manage mindsphere users, groups and roles * |
| [`mdsp policy`](../markdown-help/policy.html) |  list, create or delete policies * |
| [`mdsp service-credentials`](../markdown-help/service-credentials.html) |  provide login for commands which require technical user credentials * |
| [`mdsp service-token`](../markdown-help/service-token.html) |  displays the service token for use in other tools (e.g. postman) * |

## Integrated Data Lake and Semantic Data Interconnect Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp data-lake`](../markdown-help/data-lake.html) |  manage data lake, data lake access permissions and STS tokens * |
| [`mdsp sdi-data-lakes`](../markdown-help/sdi-data-lakes.html) |  manage data lakes for SDI * |
| [`mdsp sdi-data-registries`](../markdown-help/sdi-data-registries.html) |  manage data registries for SDI * |
| [`mdsp sdi-iot-registries`](../markdown-help/sdi-iot-registries.html) |  manage iot data registries for SDI * |
| [`mdsp sdi-data-types`](../markdown-help/sdi-data-types.html) |  manage data types for SDI * |
| [`mdsp sdi-file-upload`](../markdown-help/sdi-file-upload.html) |  upload file to SDI * |
| [`mdsp sdi-ingest-jobs`](../markdown-help/sdi-ingest-jobs.html) |  manage ingest jobs for SDI * |
| [`mdsp sdi-search-schemas`](../markdown-help/sdi-search-schemas.html) |  search SDI schemas * |
| [`mdsp sdi-data-queries`](../markdown-help/sdi-data-queries.html) |  manage data queries for SDI * |
| [`mdsp sdi-execution-jobs`](../markdown-help/sdi-execution-jobs.html) |  manage data execution jobs for SDI * |
| [`mdsp sdi-ontologies`](../markdown-help/sdi-ontologies.html) |  manage ontologies for SDI * |
| [`mdsp sdi-ontology-jobs`](../markdown-help/sdi-ontology-jobs.html) |  manage ontology jobs for SDI * |

## Mobile Apps and Message Broker Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp mobile-apps`](../markdown-help/mobile-apps.html) |  list, create or delete mobile apps * |
| [`mdsp mobile-app-instances`](../markdown-help/mobile-app-instances.html) |  list, create or delete mobile app instances * |
| [`mdsp message-broker`](../markdown-help/message-broker.html) |  manage message broker subscriptions and webhooks * |

## Data Analytics Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp spectrum-analysis`](../markdown-help/spectrum-analysis.html) |  perform spectrum analysis on a sound file @ |
| [`mdsp signal-validation`](../markdown-help/signal-validation.html) |  perform signal validation @ |
| [`mdsp signal-calculation`](../markdown-help/signal-calculation.html) |  process timeseries data * |
| [`mdsp trend-prediction`](../markdown-help/trend-prediction.html) |  perform trend prediction (linear/polynomial) @ |
| [`mdsp kpi-calculation`](../markdown-help/kpi-calculation.html) |  calculate kpi states or compute kpis @ |
| [`mdsp event-analytics`](../markdown-help/event-analytics.html) |  analyze mindsphere events @ |
| [`mdsp models`](../markdown-help/models.html) |  list, create or delete analytic models * |
| [`mdsp jobs`](../markdown-help/../markdown-help/jobs.html) |  list, create or stop jobs * |
| [`mdsp schedules`](../markdown-help/schedules.html) |  list, create, start, stop or delete job schedules * |
| [`mdsp data-exchange`](../markdown-help/data-exchange.html) |  list, upload, download and manage data exchange files and directories * |
| [`mdsp anomaly-detection`](../markdown-help/anomaly-detection.html) |  train anomaly detection models and detect timeseries anomalies * |

## Developer Support Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp dev-proxy`](../markdown-help/dev-proxy.html) |  starts mindsphere development proxy & (optional passkey) * |
| [`mdsp mqtt-createjwt`](../markdown-help/mqtt-createjwt.html) |  creates a signed token for opcua pub sub authentication # |
| [`mdsp starter-ts`](../markdown-help/starter-ts.html) |  creates a starter project in typescript # |
| [`mdsp starter-js`](../markdown-help/starter-js.html) |  creates a starter project in javascript # |
| [`mdsp markdown-help`](../markdown-help/markdown-help.html) |  generates folder with markdown help commands for the CLI* |
