---
title: TypeScript SDK - Using HttpAction
next:
    - title: Overview
      link: index
    - title: Authorization
      link: auth
    - title: Contributing to SDK
      link: contributing-to-sdk
---

<!-- @format -->

# TypeScript SDK - HttpAction

If a method is missing you can still call MindSphere APIs using the HttpAction Method which is available on every Client.

Take a look first at this implementation. You should always pass `this.GetGateway()`, and `await this.GetToken()` to the HttpAction, which makes sure that the authorizer works correctly.

```javascript

export class TimeSeriesAggregateClient extends SdkClient {
    // base Url from OpenAPI specification
    private _baseUrl: string = "/api/iottsaggregates/v3";

    // the path parameters belong in the function parameters and the querystring parameters in params object
    public async GetAggregates(
        entityid: string,
        propertyset: string,
        params: { from: Date; to: Date; intervalValue: number; intervalUnit: string; select?: string }
    ): Promise<TimeSeriesAggregateModels.Aggregates> {
        const qs = toQueryString(params);
        return (await this.HttpAction({
            verb: "GET",
            gateway: this.GetGateway(), // always use this.GetGateway()  and this.GetToken()
            authorization: await this.GetToken(), //this is overriden in different authorizers
            //and ensures that the Client works in frontend and in backend.
            baseUrl: `${this._baseUrl}/aggregates/${entityid}/${propertyset}?${qs}`,
            message: "GetTimeSeriesAggregates", // this is used for logging
        })) as TimeSeriesAggregateModels.Aggregates; // always cast to the real result type from models
    }
}
```

The full HttpAction method has more parameters, here is an explanation for the not so obvious ones:

-   `octetStream`: indicates that the response is an octetStream (file)
-   `multiPartFormData`: lets the method know that the content of message should be multipartFormData instead of JSON.
-   `rawResponse=true` will return `HttpResponse` instead of parsed and typed JSON message so that you can parse it on your own
-   `returnHeaders=true` will just return HttpHeaders of the http action
-   `ignoreCodes` list of HttpCodes for which the method will not throw an exception

```javascript
/**
 * perform http action
 *
 * @param {({
 *         verb: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
 *         gateway: string;
 *         baseUrl: string;
 *         authorization: string;
 *         body?: Object;
 *         message?: string;
 *         octetStream?: boolean;
 *         multiPartFormData?: boolean;
 *         additionalHeaders?: Object;
 *         noResponse?: boolean;
 *         rawResponse?: boolean;
 *         returnHeaders?: boolean;
 *         ignoreCodes?: number[];
 *     })} {
 *         verb,
 *         gateway,
 *         baseUrl,
 *         authorization,
 *         body,
 *         message,
 *         octetStream,
 *         multiPartFormData,
 *         additionalHeaders,
 *         noResponse,
 *         rawResponse,
 *         returnHeaders,
 *         ignoreCodes,
 *     }
 * @returns {Promise<Object>}
 *
 * @memberOf MindConnectBase
 */
public async HttpAction({
    verb,
    gateway,
    baseUrl,
    authorization,
    body,
    message,
    octetStream,
    multiPartFormData,
    additionalHeaders,
    noResponse,
    rawResponse,
    returnHeaders,
    ignoreCodes,
}: {
    verb: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    gateway: string;
    baseUrl: string;
    authorization: string;
    body?: Object;
    message?: string;
    octetStream?: boolean;
    multiPartFormData?: boolean;
    additionalHeaders?: Object;
    noResponse?: boolean;
    rawResponse?: boolean;
    returnHeaders?: boolean;
    ignoreCodes?: number[];
}): Promise<Object | undefined>
```

If you have implemented such method call please [consider contributing to the SDK](./contributing-to-sdk.md).
