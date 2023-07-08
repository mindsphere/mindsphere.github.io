---
tags: 
  - Insights Hub / Industrial IoT Tools and Libraries
search:
  boost: 2.0
---
# MindConnect-NodeJS - CLI

## Introduction

The library comes with a command line interface which can be used to upload timeseries, files and create events in the InsightsHub.
It can also be used to create starter projects, list, create and delete assets, aspect and asset types, manage users and groups, create data lake permissions etc.

### Installation via `npm` package manager

You will need [node.js](https://nodejs.org/) installed on your computer as prerequisite.

```bash
npm install -g @mindconnect/mindconnect-nodejs
```

See also [getting started](setting-up-the-cli.md) section of this documentation

### Binary Releases

The library can also be downloaded as executable from the [GitHub release page:siemens-link-extern:](https://github.com/mindsphere/mindconnect-nodejs/releases).

Download the version for your system and place it in folder which is in your PATH.

- `mc.exe` for windows
- `mc-macos` for macOS
- `mc-linux` for Linux

Linux, macOS: Rename the file to `mc` or `mdsp` and make sure that the file is marked as executable (`chmod +x`).

## Agent Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp onboard`](./markdown-help/onboard.md) |  onboard the agent with configuration stored in the config file |
| [`mdsp configure-agent`](./markdown-help/configure-agent.md) |  create data source configuration and mappings (optional: passkey) * |
| [`mdsp agent-token`](./markdown-help/agent-token.md) |  displays the agent token for use in other tools (e.g. postman) |
| [`mdsp upload-timeseries`](./markdown-help/upload-timeseries.md) |  parse .csv file with timeseriesdata and upload the timeseries data to InsightsHub |
| [`mdsp upload-file`](./markdown-help/upload-file.md) |  upload the file to the InsightsHub file service (optional: passkey) * |
| [`mdsp create-event`](./markdown-help/create-event.md) |  create an event in the InsightsHub (optional: passkey) * |
| [`mdsp agent-status`](./markdown-help/agent-status.md) |  displays the agent status and agent onboarding status * |
| [`mdsp create-agent`](./markdown-help/create-agent.md) |  create an agent in the InsightsHub * |
| [`mdsp offboard-agent`](./markdown-help/offboard-agent.md) |  offboards the agent in the InsightsHub * |
| [`mdsp renew-agent`](./markdown-help/renew-agent.md) |  renews the agent secrets  * |
| [`mdsp register-diagnostic`](./markdown-help/register-diagnostic.md) |  register agent for diagnostic * |
| [`mdsp get-diagnostic`](./markdown-help/get-diagnostic.md) |  get diagnostic information * |
| [`mdsp unregister-diagnostic`](./markdown-help/unregister-diagnostic.md) |  unregister agent from diagnostic * |

## IoT Bulk Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp prepare-bulk`](./markdown-help/prepare-bulk.md) |  creates a template directory for timeseries (bulk) upload * |
| [`mdsp run-bulk`](./markdown-help/run-bulk.md) |  runs the timeseries (bulk) upload job from  directory * |
| [`mdsp check-bulk`](./markdown-help/check-bulk.md) |  checks the progress of the upload jobs from  directory * |
| [`mdsp download-bulk`](./markdown-help/download-bulk.md) |  download the timeseries data in bulk from InsightsHub * |
| [`mdsp delivery-jobs`](./markdown-help/delivery-jobs.md) |  manage mqtt delivery jobs to publish MQTT commands to the clients * |

## Assets, Files and Event Handling Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp asset-lock`](./markdown-help/asset-lock.md) |  lock/unlock asset model modifications * |
| [`mdsp asset-info`](./markdown-help/asset-info.md) |  get infos about asset * |
| [`mdsp assets`](./markdown-help/assets.md) |  list, create or delete assets * |
| [`mdsp asset-types`](./markdown-help/asset-types.md) |  list, create or delete asset types * |
| [`mdsp aspects`](./markdown-help/aspects.md) |  list, create or delete aspects * |
| [`mdsp event-types`](./markdown-help/event-types.md) |  list, create or delete event types * |
| [`mdsp events`](./markdown-help/events.md) |  list, create or delete events * |
| [`mdsp events-bulk`](./markdown-help/events-bulk.md) |  download or delete the events in bulk * |
| [`mdsp aggregates`](./markdown-help/aggregates.md) |  list timeseries aggregates * |
| [`mdsp timeseries`](./markdown-help/timeseries.md) |  list timeseries * |
| [`mdsp notifications`](./markdown-help/notifications.md) |  send email, sms and push notifications * |

## InsightsHub Open Edge Device Management Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp oe-device-types`](./markdown-help/oe-device-types.md) |  list, create or delete device types (open edge) * |
| [`mdsp oe-devices`](./markdown-help/oe-devices.md) |  list, create or delete (open edge) devices * |
| [`mdsp oe-device-status`](./markdown-help/oe-device-status.md) |  list, get, or update (open edge) device status information * |
| [`mdsp oe-app-inst`](./markdown-help/oe-app-inst.md) |  list, create, configure or delete app instance (open edge) * |
| [`mdsp oe-app-deploy`](./markdown-help/oe-app-deploy.md) |  list, create, update app installation task(s) (open edge) * |
| [`mdsp oe-deploy-workflow`](./markdown-help/oe-deploy-workflow.md) |  list, create/instantiate, update or delete/cancel workflow deployment model or instance(s) (open edge) * |
| [`mdsp oe-firm-deploy`](./markdown-help/oe-firm-deploy.md) |  list, create, update firmware deployment task(s) (open edge) * |

## Tenant Management Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp tenant`](./markdown-help/tenant.md) |  create or delete tenant legal configuration and logo * |
| [`mdsp subtenants`](./markdown-help/subtenants.md) |  list, create or delete subtenants * |

## Deprecated Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp list-assets`](./markdown-help/list-assets.md) |  list assets in the tenant * |
| [`mdsp delete-asset`](./markdown-help/delete-asset.md) |  delete asset with id  from InsightsHub * |
| [`mdsp list-files`](./markdown-help/list-files.md) |  list files stored with the asset * |
| [`mdsp download-file`](./markdown-help/download-file.md) |  download the file from InsightsHub file service * |
| [`mdsp delete-file`](./markdown-help/delete-file.md) |  delete the file from InsightsHub file service * |

## Identity and Access Management Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp identity-management`](./markdown-help/identity-management.md) |  manage InsightsHub users, groups and roles * |
| [`mdsp policy`](./markdown-help/policy.md) |  list, create or delete policies * |
| [`mdsp service-credentials`](./markdown-help/service-credentials.md) |  provide login for commands which require technical user credentials * |
| [`mdsp service-token`](./markdown-help/service-token.md) |  displays the service token for use in other tools (e.g. postman) * |

## Integrated Data Lake and Semantic Data Interconnect Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp data-lake`](./markdown-help/data-lake.md) |  manage data lake, data lake access permissions and STS tokens * |
| [`mdsp sdi-data-lakes`](./markdown-help/sdi-data-lakes.md) |  manage data lakes for SDI * |
| [`mdsp sdi-data-registries`](./markdown-help/sdi-data-registries.md) |  manage data registries for SDI * |
| [`mdsp sdi-iot-registries`](./markdown-help/sdi-iot-registries.md) |  manage iot data registries for SDI * |
| [`mdsp sdi-data-types`](./markdown-help/sdi-data-types.md) |  manage data types for SDI * |
| [`mdsp sdi-file-upload`](./markdown-help/sdi-file-upload.md) |  upload file to SDI * |
| [`mdsp sdi-ingest-jobs`](./markdown-help/sdi-ingest-jobs.md) |  manage ingest jobs for SDI * |
| [`mdsp sdi-search-schemas`](./markdown-help/sdi-search-schemas.md) |  search SDI schemas * |
| [`mdsp sdi-data-queries`](./markdown-help/sdi-data-queries.md) |  manage data queries for SDI * |
| [`mdsp sdi-execution-jobs`](./markdown-help/sdi-execution-jobs.md) |  manage data execution jobs for SDI * |
| [`mdsp sdi-ontologies`](./markdown-help/sdi-ontologies.md) |  manage ontologies for SDI * |
| [`mdsp sdi-ontology-jobs`](./markdown-help/sdi-ontology-jobs.md) |  manage ontology jobs for SDI * |

## Mobile Apps, Message Broker, Workorder Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp mobile-apps`](./markdown-help/mobile-apps.md) |  list, create or delete mobile apps * |
| [`mdsp mobile-app-instances`](./markdown-help/mobile-app-instances.md) |  list, create or delete mobile app instances * |
| [`mdsp message-broker`](./markdown-help/message-broker.md) |  manage message broker subscriptions and webhooks * |
| [`mdsp workorder`](./markdown-help/workorder.md) |  list workorders * |

## Data Analytics Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp spectrum-analysis`](./markdown-help/spectrum-analysis.md) |  perform spectrum analysis on a sound file @ |
| [`mdsp signal-validation`](./markdown-help/signal-validation.md) |  perform signal validation @ |
| [`mdsp signal-calculation`](./markdown-help/signal-calculation.md) |  process timeseries data * |
| [`mdsp trend-prediction`](./markdown-help/trend-prediction.md) |  perform trend prediction (linear/polynomial) @ |
| [`mdsp kpi-calculation`](./markdown-help/kpi-calculation.md) |  calculate kpi states or compute kpis @ |
| [`mdsp event-analytics`](./markdown-help/event-analytics.md) |  analyze InsightsHub events @ |
| [`mdsp models`](./markdown-help/models.md) |  list, create or delete analytic models * |
| [`mdsp jobs`](./markdown-help/jobs.md) |  list, create or stop jobs * |
| [`mdsp schedules`](./markdown-help/schedules.md) |  list, create, start, stop or delete job schedules * |
| [`mdsp data-exchange`](./markdown-help/data-exchange.md) |  list, upload, download and manage data exchange files and directories * |
| [`mdsp anomaly-detection`](./markdown-help/anomaly-detection.md) |  train anomaly detection models and detect timeseries anomalies * |

## Developer Support Commands

| Command     | Description |
| ----------- | ----------- |
| [`mdsp dev-proxy`](./markdown-help/dev-proxy.md) |  starts InsightsHub development proxy & (optional passkey) * |
| [`mdsp mqtt-createjwt`](./markdown-help/mqtt-createjwt.md) |  creates a signed token for opcua pub sub authentication # |
| [`mdsp starter-ts`](./markdown-help/starter-ts.md) |  creates a starter project in typescript # |
| [`mdsp starter-js`](./markdown-help/starter-js.md) |  creates a starter project in javascript # |
| [`mdsp markdown-help`](./markdown-help/markdown-help.md) |  generates folder with markdown help commands for the CLI* |
