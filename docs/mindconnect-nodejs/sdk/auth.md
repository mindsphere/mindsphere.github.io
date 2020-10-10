---
title: TypeScript SDK - Authentication & Authorization
next:
    - title: Overview
      link: index
    - title: HttpAction
      link: using-http-action
    - title: Contributing to SDK
      link: contributing-to-sdk
---

<!-- @format -->

# TypeScript SDK - Authentication & Authorization

The typescript SDK works with so called Authorizers which can be passed to the constructor of the client. The SDK comes with five authorizer implementations which support different deployment scenarios for your application.

All authorizer implement the `TokenRotation` interface so that you can also develop your own custom authorizer class by implementing that interface.

<i class="fa fa-info"></i> The `HttpAction` method is overridden in different authorizers, this is how the SDK works in both backend and frontend scenarios.

All backend authorizer are automatically rotating the MindSphere Bearer tokens, you don't have to do it manually. For the frontend authorization we suggest to implement some kind of keep alive functionality in your app to avoid session expiration.

```javascript
export interface TokenRotation {
    RenewToken(): Promise<boolean>;
    GetToken(): Promise<string>;
    GetGateway(): string;
    GetTenant(): string;
    HttpAction(....)}
```

## BrowserAuth

<i class="fa fa-info"></i> The `BrowserAuth` authentication and authorization only works for applications which are registered behind <a href="https://developer.mindsphere.io/concepts/concept-gateway-url-schemas.html" target="_new"> MindSphere APP Gateway<i class="fa fac-fa-external-link-alt"></i></a>.

This Authorizer implements support for calling applications from frontend, where `Authorization: Bearer...` token is not required. Instead, the authorizer reuses the SESSION and XSRF-TOKEN Cookies and sets the X-XSRF-TOKEN header for you.

-   [Calling APIs from Frontend](https://developer.mindsphere.io/concepts/concept-authentication.html#calling-apis-from-frontend)
-   [Local Development with Session Cookies](https://developer.mindsphere.io/howto/howto-local-development.html#accessing-mindsphere-apis-using-session-cookies)

The Authorizer uses MindSphere Frontend API Calling Schema:

```text
{web_app_host}/api/
```

This means that it is using relative URLs as it is expecting to run in the browser behind the MindSphere API gateway so it will call e.g. `/api/identitymanagement/v3/Users` instead of `https://gateway.eu1.mindsphere.io/api/identitymanagement/v3/Users`.

You can simplify your local development by using the MindSphere <a href="../development-proxy.html">development proxy</a> when using this authorizer. You need to redirect the `/api/**` calls of your application to use the the development proxy which is running on `http://localhost:7707`.

### Code Sample

```javascript
// Browser authentication is the  Default Authentication for the MindSphere Sdk
// it is used automatically if no other authorizer is passed
const sdk = new MindSphereSdk();
// this is equivalent to new MindSphereSdk(new BrowserAuth());

const assetManagement = sdk.GetAssetManagementClient();
await assetManagement.GetAssets();
```

The clients can also be instantiated separately (the `MindSphereSdk` class is just a convenience.)

```javascript
const assetManagement = new AssetManagementClient();
await assetManagement.GetAssets();
```

## UserAuth

<i class="fa fa-info"></i> The `UserAuth` authentication and authorization only works for applications which are registered behind <a href="https://developer.mindsphere.io/concepts/concept-gateway-url-schemas.html" target="_new"> MindSphere APP Gateway<i class="fa fac-fa-external-link-alt"></i></a>.

This Authorizer implements support for calling applications from backend, where `Authorization: Bearer...` Token _is required_.

-   [Calling APIs from Backend](https://developer.mindsphere.io/concepts/concept-authentication.html#calling-apis-from-backend)

The Authorizer uses MindSphere Backend API Calling Schema:

```text
gateway.{region}.{mindsphere-domain}/api/...
```

You can simplify your local development by using the MindSphere <a href="../development-proxy.html">development proxy</a> when using this authorizer, just replace the gateway url with `http://localhost:7707` when instantiating this authorizer.

### Code Sample

Here is the class definition

```javascript
export class UserAuth extends MindConnectBase implements TokenRotation {
/**
 * Creates an instance of UserAuth.
 * extract token from http request headers (req.get("authorization"))
 *
 * @param {string} token
 * @param {string} gateway
 *
 * extract token from curreny http request:
 * Gateway has to follow the https://gateway.{region}.{mindsphere-domain} schema
 *
 * @see https://developer.mindsphere.io/concepts/concept-authentication.html#calling-apis-from-backend
 *
 * @memberOf UserAuth
 */
constructor(token: string, gateway: string)
}
```

And here is an example

```javascript
const bearerToken = request.get("Authorization");

const sdk = new MindSphereSdk(new UserAuth(bearerToken, "https://gateway.eu1.mindsphere.io"));
const identity = sdk.GetIdentityManagementClient();

const newUser = await identity.PostUser({ userName: username });
```

## TokenManager Auth

<i class="fa fa-info"></i> The `TokenManagerAuth` authentication and authorization works for both applications which are registered behind <a href="https://developer.mindsphere.io/concepts/concept-gateway-url-schemas.html" target="_new"> MindSphere APP Gateway<i class="fa fac-fa-external-link-alt"></i></a> and for self hosted applications which are just calling MindSphere APIs.

This Authorizer implements the bearer token rotation for app credentials.

-   [Self-Hosted API access](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html)
-   [Token Management Service](https://developer.mindsphere.io/apis/exchange-tokenmanager/api-tokenmanager-overview.html)

The Authorizer uses MindSphere Backend API Calling Schema:

```text
gateway.{region}.{mindsphere-domain}/api/...
```

If you are using this type of credentials you can call MindSphere APIs directly, there is no need to use development proxy.

### Code Sample

Here is the class definition

```javascript
export class TokenManagerAuth extends AuthBase implements TokenRotation {

/**
 * Creates an instance of TokenManagerAuth.
 * @param {string} _gateway
 * @param {string} _basicAuth
 * @param {string} _hostTenant
 * @param {string} _userTenant
 * @param {string} _appName
 * @param {string} _appVersion
 * @memberOf TokenManagerAuth
 */
constructor(
    protected _gateway: string,
    protected _basicAuth: string,
    protected _hostTenant: string,
    protected _userTenant: string,
    protected _appName: string,
    protected _appVersion: string
);
```

The most important part is that you need to build the basic auth token using your Token Manager Login and Password.

Encode the following combination of user name/ID and password/secret using Base64:

```text
<client_id>:<client_secret>
```

Build the Basic Auth token using the word Basic, followed by a space and the encoding result, e.g.:

```text
Basic ZGlvcDEtaGVybWlvbmUtaGVybWlvbmU6c2RqaGZhc2RqaGZqYXNkaGZqa2FzZGh
```

-   [Building the X-SPACE-AUTH-KEY](https://developer.mindsphere.io/apis/exchange-tokenmanager/api-tokenmanager-samples.html)

```javascript

const basicAuth = `Basic ${Buffer.from("<yourclientid>" + ":" + "<your_secret>").toString("base64")}`;

const sdk = new MindSphereSdk( new TokenManagerAuth(
        "https://gateway.eu1.mindsphere.io",
        basicAuth,
        "hostTenant",
        "userTenant",
        "myApp",
        "1.0.0"
));
const timeSeries = sdk.GetTimeSeriesClient();
await timeSeries.PutTimeSeries(assetid, aspectname, [{_time: new Date() rpm: "120"}] )
```

## CredentialAuth (deprecated)

You can (almost always) just use TokenManagerAuth instead.

<i class="fa fa-info"></i> The `CredentialsAuth` authentication and authorization works for both applications which are registered behind <a href="https://developer.mindsphere.io/concepts/concept-gateway-url-schemas.html" target="_new"> MindSphere APP Gateway<i class="fa fac-fa-external-link-alt"></i></a> and for self hosted applications which are just calling MindSphere APIs.

This Authorizer implements the bearer token rotation for app credentials.

-   [Self-Hosted API access](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html)
-   [Token Management Service](https://developer.mindsphere.io/apis/exchange-tokenmanager/api-tokenmanager-overview.html)

The Authorizer uses MindSphere Backend API Calling Schema:

```text
gateway.{region}.{mindsphere-domain}/api/...
```

If you are using this type of credentials you can call MindSphere APIs directly, there is no need to use development proxy.

### Code Sample

Here is the class definition

```javascript
export class CredentialAuth extends AuthBase implements TokenRotation {

/**
 * Creates an instance of CredentialAuth.
 * @param {string} _gateway
 * @param {string} _basicAuth
 * @param {string} _tenant
 *
 * @memberOf CredentialAuth
 */
constructor(protected _gateway: string, protected _basicAuth: string, protected _tenant: string)
```

The most important part is that you need to build the basic auth token using your Token Manager Login and Password.

Encode the following combination of user name/ID and password/secret using Base64:

```text
<client_id>:<client_secret>
```

Build the Basic Auth token using the word Basic, followed by a space and the encoding result, e.g.:

```text
Basic ZGlvcDEtaGVybWlvbmUtaGVybWlvbmU6c2RqaGZhc2RqaGZqYXNkaGZqa2FzZGh
```

Example Using ServiceCredentials

```javascript
const basicAuth = `Basic ${Buffer.from("<yourclientid>" + ":" + "<your_secret>").toString("base64")}`;

const sdk = new MindSphereSdk(new CredentialAuth("https://gateway.eu1.mindsphere.io", basicAuth, "hostTenant"));

const timeSeries = sdk.GetTimeSeriesClient();
await timeSeries.PutTimeSeries(assetid, aspectname, [
    { _time: new Date(), rpm: "120", humidity: "12", temperature: "12.5" },
]);
```

## MindSphere Agent as Authorizer

The MindSphere agents implement the same `TokenRotation` interface like all other Authorizers which means that they can be used with SDK as well. (The agents will have a limited set of scopes but important AssetManagement methods will work)

```javascript
const configuration = require("agentconfig.json");
const agent = new MindConnectAgent(configuration);
agent.SetupAgentCertificate(fs.readFileSync("private.key"));
await agent.OnBoard();

const sdk = new MindSphereSdk(agent);
await sdk.GetAssetManagementClient().GetAssetType(assetTypeId, { exploded: true });
```

## Using credentials instead of Authorizer

For TokenManagerAuth and CredentialAuth you can also use just the object with authentication credentials instead of the Authorizer class.

The following two lines are equivalent:

```javascript
const sdk = MindSphereSdk(new CredentialAuth("https://gateway.eu1.mindsphere.io", basicAuth, "hostTenant"));
const sdk = MindSphereSdk({ gateway: "https://gateway.eu1.mindsphere.io", basicAuth: basicAuth, tenant: "hostTenant" });
```

and the same is valid for these lines:

```javascript
const sdk = new MindSphereSdk(
    new TokenManagerAuth("https://gateway.eu1.mindsphere.io", basicAuth, "hostTenant", "userTenant", "myApp", "1.0.0")
);

const sdk = new MindSphereSdk({
    gateway: "https://gateway.eu1.mindsphere.io",
    basicAuth: basicAuth,
    tenant: "hostTenant",
    usertenant: "userTenant",
    appName: "myApp",
    appVersion: "1.0.0",
});
```
