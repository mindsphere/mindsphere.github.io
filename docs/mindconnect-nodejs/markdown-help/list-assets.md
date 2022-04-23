---
title: MindSphere CLI -  mdsp list-assets Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp list-assets Command

Syntax:

```bash
mdsp list-assets
```

Alternative form:

```bash
mc list-assets
```

(The CLI was using `mc` as default command name in older versions)

## Description

list assets in the tenant *

## Usage

List of all parameters and their description:

```text
Usage: mc list-assets|la [options]

list assets in the tenant *

Options:
  -f, --filter [filter]    filter (see:
                           https://developer.mindsphere.io/apis/advanced-assetmanagement/api-assetmanagement-references-filtering.html)
  -a, --assetname [name]   search for assets with string [name] in asset name
  -t, --typeid [typeid]    search for assets with string [typeid] in typeid
  -c, --includeshared      include shared assets
  -k, --passkey   passkey
  -y, --retry      retry attempts before giving up (default: "3")
  -v, --verbose            verbose output
  -h, --help               display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc list-assets --passkey mypasskey 						list all assets
    mc la --typeid core.mclib --assetname nodered --passkey mypasskey 		list all agents (assets of type core.mclib) with nodered in the name
    mc la --filter '{"name" : {"contains" : "Engine"}}' --passkey mypasskey 	list all assets where name contains string Engine

```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.