---
tags: 
  - Insights Hub / Industrial IoT Tools and Libraries
---

# MindConnect-NodeJS Proxy Support

Set the `http_proxy` or `HTTP_PROXY` environment variable if you need to connect via proxy to Insights Hub. The settings are valid
for the MindConnect Agents, SDK, CLI, the development proxy and also for Node-RED agent.

## BASH (Linux, git bash...)

```shell
export HTTP_PROXY=http://localhost:8888
```

## Windows CMD

```cmd
set "HTTP_PROXY=http://localhost:8888"
```

## Windows PowerShell

```powershell
$Env:HTTP_PROXY="http://localhost:8888"
```
