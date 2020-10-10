---
title: MindConnect-NodeJS - Agent Development - MindConnect Agent Methods
next:
    - title: Getting Started
      link: mindconnect-agent
    - title: Retrying the Operations
      link: retrying-operations
    - title: Starter Projects
      link: starter-projects
    - title: Agent State Storage
      link: agent-state-storage
---

<!-- @format -->

# MindConnect-NodeJS - Agent Development - <small>MindConnect Agent Methods</small>

MindConnect Agent implements the V3 of the MindSphere API.

The synchronous methods (IsOnBoarded, HasConfiguration, HasDataMapping...) are operating on agent state storage only.

The asynchronous methods (GetDataSourceConfiguration, BulkPostData...) are calling MindSphere APIs.

## IsOnBoarded

```javascript
/**
 *
 * Check in the local storage if the agent is onboarded.
 *
 * * This is a local agent state storage setting only. MindSphere API is not called.
 *
 * @returns {boolean}
 * @memberof MindConnectAgent
 */
public IsOnBoarded(): boolean
```

## HasDataSourceConfiguration

```javascript
/**
 * Checks in the local storage if the agent has a data source configuration.
 *
 * * This is a local agent state storage setting only. MindSphere API is not called.
 * * Call await GetDataSourceConfiguration() if you want to check if there is configuration in the mindsphere.
 *
 *
 * @returns {boolean}
 * @memberof MindConnectAgent
 */
public HasDataSourceConfiguration(): boolean
```

## HasDataMappings

```javascript
/**
 * Checks in the local storage if the agent has configured mappings.
 *
 * * This is a local agent state storage setting only. MindSphere API is not called.
 * * Call await GetDataMappings() to check if the agent has configured mappings in the MindSphere.
 *
 * @see https://opensource.mindsphere.io/docs/mindconnect-nodejs/agent-development/agent-state-storage.html
 *
 * @returns {boolean}
 * @memberof MindConnectAgent
 */
public HasDataMappings(): boolean
```

## PutDataSourceConfiguration

```javascript

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
): Promise<DataSourceConfiguration>
```

## GetDataSourceConfiguration

```javascript
/**
 * Acquire DataSource Configuration and store it in the Agent Storage.
 *
 * @see https://opensource.mindsphere.io/docs/mindconnect-nodejs/agent-development/agent-state-storage.html
 *
 * @returns {Promise<DataSourceConfiguration>}
 *
 * @memberOf MindConnectAgent
 */
public async GetDataSourceConfiguration(): Promise<DataSourceConfiguration>
```

## GetDataMappings

```javascript
/**
 * Acquire the data mappings from the MindSphere and store them in the agent state storage.
 *
 * @see https://opensource.mindsphere.io/docs/mindconnect-nodejs/agent-development/agent-state-storage.html
 *
 * @returns {Promise<Array<Mapping>>}
 *
 * @memberOf MindConnectAgent
 */
public async GetDataMappings(): Promise<Array<Mapping>>
```

## PutDataMappings

```javascript
/**
 * Store data mappings in the mindsphere and also in the local agent state storage.
 *
 * @see https://opensource.mindsphere.io/docs/mindconnect-nodejs/agent-development/agent-state-storage.html
 *
 * @param {Mapping[]} mappings
 * @returns {Promise<boolean>}
 *
 * @memberOf MindConnectAgent
 */
public async PutDataMappings(mappings: Mapping[]): Promise<boolean>
```

## DeleteAllMappings

```javascript
/**
 * Deletes all mappings from the agent
 *
 * @memberOf MindConnectAgent
 */
public async DeleteAllMappings();
```

## PostEvent

```javascript
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
public async PostEvent
        event: BaseEvent | CustomEvent,
        timeStamp: Date = new Date(),
        validateModel: boolean = true
    ): Promise<boolean>
```

## Post Data

```javascript
/**
 * Post Data Point Values to the Exchange Endpoint
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

## BulkPostData

```javascript
/**
 * Post Bulk Data Point Values to the Exchange Endpoint.
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

## UploadFile

```javascript
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

## GenerateDataSourceConfiguration

```javascript
/**
 * Generates a Data Source Configuration for specified Asset Type
 *
 * you still have to generate the mappings (or use ConfigureAgentForAssetId method)
 *
 * @example
 * config = await agent.GenerateDataSourceConfiguration("castidev.Engine");
 *
 * @param {string} assetTypeId
 * @param {("NUMERICAL" | "DESCRIPTIVE")} [mode="DESCRIPTIVE"]
 * @returns {Promise<DataSourceConfiguration>}
 *
 * * NUMERICAL MODE will use names like CF0001 for configurationId , DS0001,DS0002,DS0003... for data source ids and DP0001, DP0002... for dataPointIds
 * * DESCRIPTIVE MODE will use names like CF-assetName for configurationId , DS-aspectName... for data source ids and DP-variableName for data PointIds (default)
 * @memberOf MindConnectAgent
 */
public async GenerateDataSourceConfiguration(
    assetTypeId: string,
    mode: "NUMERICAL" | "DESCRIPTIVE" = "DESCRIPTIVE"
): Promise<DataSourceConfiguration>
```

## GenerateMappings

```javascript
/**
 * Generate automatically the mappings for the specified target assetid
 *
 * !Important! this only works if you have created the data source coniguration automatically
 *
 * @example
 * config = await agent.GenerateDataSourceConfiguration("castidev.Engine");
 * await agent.PutDataSourceConfiguration(config);
 * const mappings = await agent.GenerateMappings(targetassetId);
 * await agent.PutDataMappings (mappings);
 *
 * @param {string} targetAssetId
 * @returns {Mapping[]}
 *
 * @memberOf MindConnectAgent
 */
public GenerateMappings(targetAssetId: string): Mapping[]
```

## ConfigureAgentForAssetId

```javascript
/**
 * This method can automatically create all necessary configurations and mappings for selected target asset id.
 *
 * * This method will automatically create all necessary configurations and mappings to start sending the data
 * * to an asset with selected assetid in Mindsphere
 *
 * @param {string} targetAssetId
 * @param {("NUMERICAL" | "DESCRIPTIVE")} mode
 * @param {boolean} [overwrite=true] ignore eTag will overwrite mappings and data source configuration
 *
 * * NUMERICAL MODE will use names like CF0001 for configurationId , DS0001,DS0002,DS0003... for data source ids and DP0001, DP0002... for dataPointIds
 * * DESCRIPTIVE MODE will use names like CF-assetName for configurationId , DS-aspectName... for data source ids and DP-variableName for data PointIds (default)
 * @memberOf MindConnectAgent
 */
public async ConfigureAgentForAssetId(
  targetAssetId: string,
  mode: "NUMERICAL" | "DESCRIPTIVE" = "DESCRIPTIVE",
  overwrite: boolean = true
)
```

## SDK

```javascript
/**
 * MindSphere SDK using agent authentication
 *
 * ! important: not all APIs can be called with agent credentials, however MindSphere is currently working on making this possible.
 *
 *  * Here is a list of some APIs which you can use:
 *
 *  * AssetManagementClient (Read Methods)
 *  * MindConnectApiClient
 *
 * @returns {MindSphereSdk}
 *
 * @memberOf MindConnectAgent
 */
public Sdk(): MindSphereSdk
```

## GetValidator

```javascript
/**
 * Ajv Validator (@see https://github.com/ajv-validator/ajv) for the data points. Validates if the data points array is only
 * containing dataPointIds which are configured in the agent configuration.
 *
 * @returns {ajv.ValidateFunction}
 *
 * @memberOf MindConnectAgent
 */
public GetValidator(): ajv.ValidateFunction
```

## GetEventValidator

```javascript
/**
 *
 * Ajv Validator (@see https://github.com/ajv-validator/ajv) for the events. Validates the syntax of the mindsphere events.
 *
 * @returns {ajv.ValidateFunction}
 *
 * @memberOf MindConnectAgent
 */
public GetEventValidator(): ajv.ValidateFunction

```

## GetMindConnectConfiguration

```javascript
/**
 * Get local configuration from the agent state storage.
 *
 * * This is a local agent state storage setting only. MindSphere API is not called.
 *
 * @see https://opensource.mindsphere.io/docs/mindconnect-nodejs/agent-development/agent-state-storage.html
 *
 * @returns {IMindConnectConfiguration}
 *
 * @memberOf MindConnectAgent
 */
public GetMindConnectConfiguration(): IMindConnectConfiguration
```
