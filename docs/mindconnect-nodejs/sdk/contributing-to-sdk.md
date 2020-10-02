---
title: TypeScript SDK - Contributing
next:
    - title: Overview
      link: index
    - title: Authorization
      link: auth
    - title: HttpAction
      link: using-http-action
---

<!-- @format -->

# TypeScript SDK - Contributing

If you want to contribute with a new client implementation to typescript SDK here are some guidelines:

## 1. Create Issue

Tell the community that you are working on an client :)

## 2. Create the file structure

**client and models:**

```text
\src\api\sdk\<yourapi>\
                        <yourapi>.models.ts
                        <yourapiclient>.ts
```

**tests:**

```text
\test\
        <yourapiclient>.spec.ts
```

**cli command(s):**

```text
\src\cli\commands folder

```

Just follow the existing code examples ;)

## 3. Generate the Models

You can generate the models form OpenAPI specification using. e.g. [https://editor.swagger.io](https://editor.swagger.io) and typescript-fetch template.
The models belong into the namespace called `<yourapi>`Models

```javascript
export namespace TimeSeriesAggregateModels {
....models go here
}
```

## 4. Implement the Client, Tests and CLI commands

Implement the client for your API using `this.HttpAction method` and following the existing conventions. Using HttpAction ensures that the API Client works with different authorizers. Here is an example for TimeSeriesAggregateClient:

```javascript
// Always extend SdkClient, this will give you access to this.HttpAction
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

You also have to create a Method for lazy loading of your new client on the `MindSphereSdk` class

```javascript
private _timeSeriesAggregateClient?: TimeSeriesAggregateClient;

public GetTimeSeriesAggregateClient(): TimeSeriesAggregateClient {
    this._timeSeriesAggregateClient =
        this._timeSeriesAggregateClient || new TimeSeriesAggregateClient(this._authenticator);
    return this._timeSeriesAggregateClient;
}
```

and add export to `src\api\sdk\index.ts` file:

```javascript
...
export * from "./iotaggregate/iot-timeseries-aggregate";
export * from "./iotaggregate/iot-timeseries-aggregate-models";
...
```

Make sure that the tests are running and create a pull request. We would also really appreciate a CLI contribution. :heart:
