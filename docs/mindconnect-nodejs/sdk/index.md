---
title: TypeScript SDK - Overview
next:
    - title: Authorization
      link: auth
    - title: HttpAction
      link: using-http-action
    - title: Contributing to SDK
      link: contributing-to-sdk
---

<!-- @format -->

# TypeScript SDK - Overview

The library comes with the typescript SDK which can be used to access MindSphere APIs

[![SDK](https://img.shields.io/badge/SDK-full%20documentation-%23009999.svg)](/docs/mindconnect-nodejs/sdk/index.html)

It implements support for both frontend (browser e.g. angular, react...) and backend development in node.js while supporting different MindSphere authentication types.

**Frontend:** - Browser (Session, Cookies)

**Backend (node.js):** - UserCredentials - AppCredentials - ServiceCredentials - MindSphere Agents

The SDK implements the Clients for following APIs:

-   AgentManagementClient
-   AssetManagementClient
-   EventManagementClient
-   IotFileClient
-   IdentityManagementClient
-   KPICalculationClient
-   MindConnectAPIClient
-   SignalValidationClient
-   SpectumAnalysisClient
-   TimeSeriesAggregateClient
-   TimeSeriesBulkClient
-   TimeSeriesClient
-   TrendPredictionClient

The example below shows how to use the SDK from browser:

```javascript
// The example shows how to Get Assets from MindSphere with custom AssetType
// using frontend authentication
// you can pass an instance an Authorizer
// (BrowserAuth, UserAuth, CredentialsAuth, TokenManagerAuth, MindConnectAgent)
// to use different authorization types in MindSphere or implement the TokenRotation
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

If an API is missing (and you would like to contribute a client for it), take a look at [contributing to SDK](./contributing-to-sdk.html).
