---
tags: 
  - Insights Hub / Industrial IoT Tools and Libraries
search:
  boost: 2.0
---

# TypeScript SDK - Overview

The library comes with the typescript SDK which can be used to access Insights Hub APIs.

It implements support for both frontend (browser e.g. angular, react...) and backend development in node.js while supporting different Insights Hub authentication types.

**Frontend:** - Browser (Session, Cookies)

**Backend (node.js):** - UserCredentials - AppCredentials - ServiceCredentials - Insights Hub Agents

The SDK implements the Clients for following APIs:

## Platform Core APIs

| Name |SDK - Client | Command |
| --- | --- | --- |
| Identity Management  | :heavy_check_mark: | :heavy_check_mark: |
| Resource Access Management<sup>1</sup>  | :heavy_check_mark: | :heavy_check_mark: |
| Oauth Authorization  | :heavy_check_mark: | :heavy_check_mark: |
| Tenant Management  | :heavy_check_mark: | :heavy_check_mark: |
| Token Management  | :heavy_check_mark: | :heavy_check_mark: |
| Message Broker<sup>2</sup> (preview)  | :heavy_check_mark: | :heavy_check_mark: |
| Usage Transparency  | :heavy_check_mark: |  |

<sup>1</sup> In the first stage of the availability Resource Access Management must be enabled for the tenant via Insights Hub support team.

<sup>2</sup> Message Broker is only available on preview tenants

## IoT and Storage

| Name |SDK - Client | Command |
| --- | --- | --- |
| IoT File   | :heavy_check_mark: | :heavy_check_mark: |
| IoT Time Series  | :heavy_check_mark: | :heavy_check_mark: |
| IoT TS Aggregates (v3, v4)  | :heavy_check_mark: | :heavy_check_mark:  |
| IoT TS Bulk  | :heavy_check_mark: | :heavy_check_mark: |
| Integrated Data Lake  | :heavy_check_mark: | :heavy_check_mark: |

## Connectivity

| Name |SDK - Client | Command |
| --- | --- | --- |
| Agent Management   | :heavy_check_mark: | :heavy_check_mark: |
| MindConnect API   | :heavy_check_mark: | :heavy_check_mark: |
| Commanding API (sync) | :heavy_check_mark: | :heavy_check_mark: |
| OPC UA PubSub    |  | :heavy_check_mark: |

## Advanced Services

| Name |SDK - Client | Command |
| --- | --- | --- |
| Asset Management   | :heavy_check_mark: | :heavy_check_mark: |
| Event Management   | :heavy_check_mark: | :heavy_check_mark: |
| Notification   | :heavy_check_mark: | :heavy_check_mark: |
| WorkOrder Management   | :heavy_check_mark: | :heavy_check_mark: |
| Visual Flow Creator    | :heavy_check_mark: | :heavy_check_mark: |

## Analytics Services

| Name |SDK - Client | Command |
| --- | --- | --- |
| Anomaly Detection   | :heavy_check_mark:  | :heavy_check_mark: |
| Data Exchange   | :heavy_check_mark: | :heavy_check_mark: |
| Event Analytics   | :heavy_check_mark: | :heavy_check_mark: |
| Job Manager   | :heavy_check_mark: | :heavy_check_mark: |
| KPI Calculation   | :heavy_check_mark: | :heavy_check_mark: |
| Model Management   | :heavy_check_mark: | :heavy_check_mark: |
| Signal Calculation   | :heavy_check_mark: | :heavy_check_mark: |
| Signal Validation   | :heavy_check_mark: | :heavy_check_mark: |
| Spectrum Analysis   | :heavy_check_mark: | :heavy_check_mark: |
| Trend Prediction   | :heavy_check_mark: | :heavy_check_mark: |

## MindConnect Open Edge

| Name |SDK - Client | Command |
| --- | --- | --- |
| Device Management   | :heavy_check_mark: | :heavy_check_mark:  |
| Device Status   | :heavy_check_mark: | :heavy_check_mark: |
| Deployment Workflow   | :heavy_check_mark: | :heavy_check_mark:  |
| Device Configuration   | :heavy_check_mark: | :heavy_check_mark:  |
| Edge App Deployment   | :heavy_check_mark: | :heavy_check_mark:  |
| Edge App Instance Management   | :heavy_check_mark: | :heavy_check_mark:  |
| Firmware Deployment   | :heavy_check_mark: | :heavy_check_mark:  |

## Semantic Data Interconnect

| Name |SDK - Client | Command |
| --- | --- | --- |
| SDI Data Management   | :heavy_check_mark:   | :heavy_check_mark: |
| SDI Data Query   | :heavy_check_mark:  | :heavy_check_mark: |
| SDI Semantic Modelling   | :heavy_check_mark:  | :heavy_check_mark: |

The example below shows how to use the SDK from browser:

```javascript
// The example shows how to Get Assets from Insights Hub with custom AssetType
// using frontend authentication
// you can pass an instance an Authorizer
// (BrowserAuth, UserAuth, CredentialsAuth, TokenManagerAuth, MindConnectAgent)
// to use different authorization types in Insights Hub or implement the TokenRotation
// interface if you want to provide your own authorizer.
//
// The default constructor uses frontend authorization.

const sdk = new MindSphereSdk();
const am = sdk.GetAssetManagementClient();

const assets = await am.GetAssets({
    filter: JSON.stringify({
        typeId: {
            startsWith: `${tenant}`,
        },
    }),
});

// you will get fully typed assets in response
```

If an API is missing (and you would like to contribute a client for it), take a look at [contributing to SDK](./contributing-to-sdk.md).
