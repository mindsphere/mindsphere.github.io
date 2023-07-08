# mdsp assets Command

Syntax:

```bash
mdsp assets
```

Help:

```bash
mdsp assets --help
```

Alternative form:

```bash
mc assets
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or delete assets *

## Usage

Parameter list:

```text
Usage: mdsp assets|ast [options]

list, create or delete assets *

Options:
 -m, --mode [list|create|delete|template|tree] mode [list | create | delete | template | tree] (default: "list")
 -f, --file .mdsp.json file with asset definition
 -n, --assetname assetname
 -p, --parentid parentid
 -e, --externalid externalid
 -i, --assetid Insights Hub asset id
 -t, --typeid typeid
 -d, --desc description (default: "created with Insights Hub CLI")
 -w, --twintype digital twin type [performance|simulation]
 -c, --includeshared include shared aspect types
 -k, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp assets` command:

```text

 Examples:

 mdsp assets --mode create --typeid core.basicarea --assetname MyArea creates an asset in Insights Hub of type basicarea
 mdsp assets --mode create --file MyPump.asset.mdsp.json creates an asset from specified file template
 mdsp assets --mode list lists all assets in Insights Hub
 mdsp assets --mode list --typeid mclib lists all assets in Insights Hub of type core.mclib
 mdsp assets --mode delete --assetid 1234567..ef deletes asset with specified id from Insights Hub
 mdsp assets --mode template --typeid .Pump --assetname MyPump 
 creates a file template MyPump.asset.mdsp.json which can be use in create command

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
