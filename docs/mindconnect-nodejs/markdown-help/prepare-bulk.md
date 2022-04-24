---
title: MindSphere CLI -  mdsp prepare-bulk Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp prepare-bulk Command

Syntax:

```bash
mdsp prepare-bulk
```

Help:

```bash
mdsp prepare-bulk --help
```

Alternative form:

```bash
mc prepare-bulk
```

(The CLI was using `mc` as default command name in older versions)

## Description

creates a template directory for timeseries (bulk) upload *

## Usage

Parameter list:

```text
Usage: mc prepare-bulk|pb [options]

creates a template directory for timeseries (bulk) upload *

Options:
  -d, --dir   config file with agent configuration (default: "bulkupload")
  -w, --twintype       twintype of asset [performance|simulation]
  -i, --assetid     mindsphere asset id
  -t, --typeid       typeid e.g. castidev.Engine
  -s, --size           entries per file  (default: "100")
  -f, --files         generated files  (default: "2")
  -o, --offset         offset in days from current date  (default: "0")
  -y, --retry        retry attempts before giving up (default: "3")
  -k, --passkey     passkey
  -v, --verbose              verbose output
  -h, --help                 display help for command

```

## Examples

Here are some examples of how to use the `mdsp prepare-bulk` command:

```text

  Examples:

    mc prepare-bulk  --typeid castidev.Engine 	 this creates a directory called bulkimport for new asset of type castidev.Engine
    mc pb --dir asset1 -i 123456...abc 		 this creates a directory called asset1 for existing asset
    mc pb -of 3 -t castidev.Engine 		 start data creation template 3 days before now

	use --mode performance for standard data generation or --mode simulation for high frequency data generation 
	The typeid must be derived from core.basicdevice and asset twintype must be simulation for high frequency data upload


```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.