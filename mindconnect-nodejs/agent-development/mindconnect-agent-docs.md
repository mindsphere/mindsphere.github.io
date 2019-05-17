---
title: MindConnect-NodeJS - Agent Development - MindConnect Agent Methods
hide_license_text: True
show_mit_license_text: True
---


# MindConnect-NodeJS - Agent Development - <small>MindConnect Agent Methods</small>

Here are the most important methods of the ```MindConnectAgent```

### Constructor

Constructing the MindConnectAgent

``` typescript
/**
 * Creates an instance of AgentAuth.
 * @param {IMindConnectConfiguration} _configuration
 * @param {number} [_tokenValidity=600] // this was required in previous versions of the implmentation , kept for compatibility.
 * @param {string} [_basePath=process.cwd() + "/.mc/"]
 * @memberof AgentAuth
 */
constructor(
    configuration: IMindConnectConfiguration,
    protected _tokenValidity: number = 600,
    basePath: string | IConfigurationStorage = process.cwd() + "/.mc/"
) 
```

### SetupAgentCertificate

This is used for RSA_3072 agents.

```typescript
/**
 * Set up the certificate for RSA_3072 communication.
 * You can generate a certificate e.g. using openssl
 * openssl genrsa -out private.key 3072
 *
 * @param {(string | Buffer)} privateCert
 *
 * @memberOf AgentAuth
 */
public SetupAgentCertificate(privateCert: string | Buffer) 
```

### GetProfile

Returns the security profile of the agent.

```typescript
/**
 * returns the security profile of the agent
 *
 * @returns "SHARED_SECRET" || "RSA_3072"
 *
 * @memberOf AgentAuth
 */
public GetProfile()
```

### GetAgentToken

Acquires the agent token.

```typescript
/**
 * Returns the current agent token.
 * This token can be used in e.g. in Postman to call mindspher APIs.
 *
 * @returns {(Promise<string>)}
 *
 * @memberOf AgentAuth
 */
public async GetAgentToken()
```

### RenewToken

Renews the agent token. 

!!! info
    The library renews the tokens for you but you can enforce the token renewal if you really want to

```typescript
/**
 * The /exchange token handling. Handles validation, secret renewal and token renewal. Should be called
 * at the beginning of each operation which handles /exchange endpoint.
 * @private
 * @returns {Promise<boolean>}
 * @memberof AgentAuth
 */
public async RenewToken(): Promise<boolean>
```

### OnBoard

Onboard the agent and return the onboarding state.

```typescript
/**
 * Onboard the agent and return the onboarding state.
 *
 * @returns {Promise<OnBoardingState>}
 * @memberof MindConnectAgent
 */
public async OnBoard(): Promise<OnboardingStatus.StatusEnum>
```

### IsOnBoarded

Checks if the agent is onboarded.

```typescript
/**
 * Checks if the agent is onboarded.
 *
 * @returns {boolean}
 * @memberof MindConnectAgent
 */
public IsOnBoarded(): boolean
```

### ClientId

The agent id

```typescript
/**
 * Client Id
 * 
 * @returns 
 * 
 * @memberOf MindConnectAgent
 */
public ClientId()
```

### HasDataSourceConfiguration

Checks if the agent has a data source configuration.

```typescript
/**
 * Checks if the agent has a data source configuration
 *
 * @returns {boolean}
 * @memberof MindConnectAgent
 */
public HasDataSourceConfiguration(): boolean
```

### HasDataMappings

Checks if the agent has mappings

```typescript
/**
 * Checks if the agent has mappings
 *
 * @returns {boolean}
 * @memberof MindConnectAgent
 */
public HasDataMappings(): boolean
```

### PutDataSourceConfiguration

Stores the configuration in the mindsphere.

```typescript
/**
 * Stores the configuration in the mindsphere.
 *
 * By default the eTag parameter in the provided configuration is ignored, and the agent just updates the configuration every time the put method is stored
 * and automatically increases the eTag.
 * This is why its a good idea to check if the configuration was stored before the data was posted. If the ignoreEtag is set to false then the agent just uses
 * the eTag which was specified in the configuration. This might throw an "already stored" exception in the mindsphere.
 *
 * @param {DataSourceConfiguration} dataSourceConfiguration
 * @param {boolean} [ignoreEtag=true]
 * @returns {Promise<DataSourceConfiguration>}
 * @memberof MindConnectAgent
 */
public async PutDataSourceConfiguration(
    dataSourceConfiguration: DataSourceConfiguration,
    ignoreEtag: boolean = true
): Promise<DataSourceConfiguration
```

### GetDataSourceConfiguration

Get the DataSourceConfiguration from MindSphere.

```typescript
/**
 * Get the DataSourceConfiguration
 * 
 * @returns {Promise<DataSourceConfiguration>}
 * 
 * @memberOf MindConnectAgent
 */
public async GetDataSourceConfiguration(): Promise<DataSourceConfiguration> 
```

### GetDataMappings

Get Data Mapings from MindSphere.

```typescript
/**
 * Get Data Mapings
 * 
 * @returns {Promise<Array<Mapping>>} 
 * 
 * @memberOf MindConnectAgent
 */
public async GetDataMappings(): Promise<Array<Mapping>>
```

### PutDataMappings

Stores the data mappings in the mindsphere. (if you know the assetid as agents are not able to read the asset inforamtion)

```typescript
/**
 * Stores the data mappings in the mindsphere. (if you know the assetid)
 * 
 * @param {Mapping[]} mappings 
 * @returns {Promise<boolean>} 
 * 
 * @memberOf MindConnectAgent
 */
public async PutDataMappings(mappings: Mapping[]): Promise<boolean>
```

### Post Event

Posts the Events to the Exchange Endpoint.

```typescript
/**
 * Posts the Events to the Exchange Endpoint
 *
 * @see: https://developer.mindsphere.io/apis/api-advanced-eventmanagement/index.html
 *
 * @param {*} events
 * @param {Date} [timeStamp=new Date()]
 * @param {boolean} [validateModel=true]
 * @returns {Promise<boolean>}
 * @memberof MindConnectAgent
 */
public async PostEvent(
    event: BaseEvent,
    timeStamp: Date = new Date(),
    validateModel: boolean = true
): Promise<boolean> 
```

### PostData

Post Data Point Values to the Exchange Endpoint.

```typescript
/**
 * Post Data Point Values to the Exchange Endpoint
 *
 *
 * @see: https://developer.mindsphere.io/howto/howto-upload-agent-data/index.html
 *
 * @param {DataPointValue[]} dataPoints
 * @param {Date} [timeStamp=new Date()]
 * @param {boolean} [validateModel=true] you can set this to false to speed up the things if your agent is working.
 * @returns {Promise<boolean>}
 * @memberof MindConnectAgent
 */
public async PostData(
    dataPoints: DataPointValue[],
    timeStamp: Date = new Date(),
    validateModel: boolean = true
): Promise<boolean>
```

### BulkPostData

Bulk Post Data to exchange endpoint

```typescript
/**
 * Bulk Post Data to exchange endpoint
 * 
 * @param {TimeStampedDataPoint[]} timeStampedDataPoints 
 * @param {boolean} [validateModel=true] 
 * @returns {Promise<boolean>} 
 * 
 * @memberOf MindConnectAgent
 */
public async BulkPostData(
    timeStampedDataPoints: TimeStampedDataPoint[],
    validateModel: boolean = true
): Promise<boolean>
```

### Upload File

Upload file to MindSphere IOTFileService


```typescript
/**
 * Upload file to MindSphere IOTFileService
 *
 * * This method is used to upload the files to the MindSphere.
 * * It supports standard and multipart upload which can be configured with the [optional.chunk] parameter.
 *
 * * The method will try to abort the multipart upload if an exception occurs.
 * * Multipart Upload is done in following steps:
 *     * start multipart upload
 *     * upload in parallel [optional.parallelUploadChunks] the file parts (retrying [optional.retry] times if configured)
 *     * uploading last chunk.
 *
 * @param {string} entityId - asset id or agent.ClientId() for agent
 * @param {string} filepath - mindsphere file path
 * @param {(string | Buffer)} file - local path or Buffer
 * @param {fileUploadOptionalParameters} [optional] - optional parameters: enable chunking, define retries etc.
 * @param {(number | undefined)}[optional.part] multipart/upload part
 * @param {(Date | undefined)} [optional.timestamp] File timestamp in mindsphere.
 * @param {(string | undefined)} [optional.description] Description in mindsphere.
 * @param {(string | undefined)} [optional.type] Mime type in mindsphere.
 * @param {(number | undefined)} [optional.chunkSize] chunkSize. It must be bigger than 5 MB. Default 8 MB.
 * @param {(number | undefined)} [optional.retry] Number of retries
 * @param {(Function | undefined)} [optional.logFunction] log functgion is called every time a retry happens.
 * @param {(Function | undefined)} [optional.verboseFunction] verboseLog function.
 * @param {(boolean | undefined)} [optional.chunk] Set to true to enable multipart uploads
 * @param {(number | undefined)} [optional.parallelUploads] max paralell uploads for parts (default: 3)
 * @param {(number | undefined)} [optional.ifMatch] The etag for the upload.
 * @returns {Promise<string>} - md5 hash of the file
 *
 * @memberOf MindConnectAgent
 *
 * @example await agent.UploadFile (agent.GetClientId(), "some/mindsphere/path/file.txt", "file.txt");
 * @example await agent.UploadFile (agent.GetClientId(), "some/other/path/10MB.bin", "bigFile.bin",{ chunked:true, retry:5 });
 */
public async UploadFile(
    entityId: string,
    filepath: string,
    file: string | Buffer,
    optional?: fileUploadOptionalParameters
): Promise<string>
```

### GetMindConnectConfiguration

Gets the current agent configuration.

```
/**
 * Gets the current agent configuraton
 *
 * @returns {IMindConnectConfiguration}
 *
 * @memberOf MindConnectAgent
 */
public GetMindConnectConfiguration(): IMindConnectConfiguration
```

### GetValidator

Time series validator. Validates the data points against the configuration

```typescript
/**
 * Time series validator. Validates the data points against the configuration
 *
 * @returns {ajv.ValidateFunction}
 *
 * @memberOf MindConnectAgent
 */
public GetValidator(): ajv.ValidateFunction
```

### GetEventValidator

Event validator. Validates the data points against the configuration.

```typescript
/**
 * Event validator. Validates the data points against the configuration
 *
 * @returns {ajv.ValidateFunction}
 *
 * @memberOf MindConnectAgent
 */
 ```

