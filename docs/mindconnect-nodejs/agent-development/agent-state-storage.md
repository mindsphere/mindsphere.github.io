---
title: Mindconnect-NodeJS - Agent Development - Agent State Storage
next:
    - title: Getting Started
      link: mindconnect-agent
    - title: Retrying the Operations
      link: retrying-operations
    - title: MindConnect Agent Methods
      link: mindconnect-agent-docs
    - title: Starter Projects
      link: starter-projects
---

<!-- @format -->

# Mindconnect-NodeJS - Agent Development - <small>Agent State Storage</small>

## Introduction

The agents need to manage their state information over time.
This state information consists of

-   agent secrets
-   agent configuration
-   agent mappings
-   history of agent secrets
-   list of uploaded files and corresponding eTags (so that agents can overwrite the files if necessary)

This information needs to be persisted over time.

<!-- prettier-ignore-start -->
<i class="fas fa-info-circle"></i>
    The agents store the eTag of the file so that they can overwrite these files in the future.
    This will change once agents can read the eTags of the files.
<!-- prettier-ignore-end -->

## Storage Provider - Default Implementation

The default implementation stores the state in the hidden .mc directory in the root directory of your project.

```bash
ls -la .mc

total 8
drwxr-xr-x 1 sn0wcat 1049089    0 May 17 17:41 .
drwxr-xr-x 1 sn0wcat 1049089    0 May 17 17:41 ..
-rw-r--r-- 1 sn0wcat 1049089 2814 May 17 17:41 8ed19ef5515542b4bb05842bfbd48f38.json
```

## Storing the data using different storage provider

If you need to store the data in a different or more secure fashion you can provide your own implementation of the StorageProvider. You need to implement the following interface

```javascript
/**
 * Per default, the library stores the agent settings in the directory .mc
 * You can pass a class which implements a ConfigurationStorage in the constructor if you want to store
 * the settings somewhere else. (e.g. database, encrypted file system etc)
 * @export
 * @interface ConfigurationStorage
 */
export interface IConfigurationStorage {
    GetConfig(config: IMindConnectConfiguration): IMindConnectConfiguration;
    SaveConfig(config: IMindConnectConfiguration): Promise<IMindConnectConfiguration>;
}
```

The GetConfig method should check if the config has changed and return no value so that the agent can be onboarded again

```javascript
if (_.isEqual(json.content, configuration.content)) {
    return json;
} else {
    log("The configuration has changed we will onboard again.");
}
```

### Example

```javascript
export class MySecureStorage implements IConfigurationStorage {
    private lock: AsyncLock;

    private encrypt(): string {
        //... your secure implementation
    }

    private decrypt(): string {
        //... your secure implementation
    }

    public GetConfig(configuration: IMindConnectConfiguration): IMindConnectConfiguration {
        try {
            const json = <IMindConnectConfiguration>(
                const result = fs.readFileSync (path.resolve(`${this._basePath}/${configuration.content.clientId}.bin`));
                return this.decrypt(result);
            );
            if (_.isEqual(json.content, configuration.content)) {
                return json;
            } else {
                log("The configuration has changed we will onboard again.");
            }
        } catch (err) {
            log(`There is no configuration stored yet for agent with id ${configuration.content.clientId}`);
        }

        return configuration;
    }

    public async SaveConfig(config: IMindConnectConfiguration): Promise<IMindConnectConfiguration> {
        const fileName = `${this._basePath}/${config.content.clientId}.bin`;
        return await this.lock.acquire(fileName, () => {
            const data = JSON.stringify(config);
            fs.writeFileSync(fileName, this.encrypt(data));
            return config;
        });
    }

    constructor(private _basePath: string) {
        if (!fs.existsSync(this._basePath)) {
            fs.mkdirSync(this._basePath);
        }

        this.lock = new AsyncLock({});
    }
}

```

## Using your storage

You can pass the instance of your storage provider to the MindConnectAgent constructor.

```javascript
const agent = new MindConnectAgent(configuration, undefined, new MySecureStorage());
```
