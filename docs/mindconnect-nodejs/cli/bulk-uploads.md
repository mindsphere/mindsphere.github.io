---
title: MindConnect-NodeJS - CLI - Uploading historical timeseries data
next:
    - title: Overview
      link: index
    - title: Setting up the CLI
      link: setting-up-the-cli
---

<!-- @format -->

# MindConnect-NodeJS - CLI - <small>Uploading historical timeseries data</small>

## Introduction

The CLI provides the command line tooling for import of the historical timeseries data to the MindSphere, which is something which you might need when starting to work with the platform. This set of commands sends the data directly to the (Bulk-)TimeSeries APIs of the MindSphere.

<!-- prettier-ignore-start -->
<i class="fas fa-exclamation-triangle"></i>
    Please be aware that the use of this feature has a direct impact
    on _your_ mindsphere resource consumption and that you might get a notice that you will need to upgrade your account's data ingest rate.
<!-- prettier-ignore-end -->

The upload of historical timeseries data to MindSphere is done in several steps:

-   Preparing the directory with the template `.csv` files for the data upload.
-   Importing your data into the prepared directory according to the created template
-   Converting the imported files to `.json` format.
-   Running the import jobs

As the bulk import is asynchronous you can check the progress of the job by running the `mc check-bulk` command.

## Preparing the directory for the data upload (`mc prepare-bulk`)

This command creates a directory with the template .csv files. You will need to create your files in the same format as the provided templates.

<!-- prettier-ignore-start -->
<i class="fas fa-exclamation-triangle"></i>
    The `twinType: performance` Bulk Import API expects all the data in the file to be from the same hour.
<!-- prettier-ignore-end -->

You can either create a new asset for the data or import the data to the existing asset by providing the `--assetid` parameter.

```text
mc prepare-bulk --help

Usage: prepare-bulk|pb [options]

creates a template directory for timeseries (bulk) upload *

Options:
  -d, --dir <directoryname>  config file with agent configuration (default: "bulkupload")
  -w, --twintype <mode>      twintype of asset [performance|simulation]
  -i, --assetid <assetid>    asset id from the mindsphere
  -t, --typeid <typeid>      typeid e.g. castidev.Engine
  -s, --size <size>          entries per file  (default: 100)
  -f, --files <files>        generated files  (default: 2)
  -o, --offset <days>        offset in days from current date  (default: 0)
  -y, --retry <number>       retry attempts before giving up (default: 3)
  -k, --passkey <passkey>    passkey
  -v, --verbose              verbose output
  -h, --help                 output usage information

  Examples:

    mc prepare-bulk  --typeid castidev.Engine  this creates a directory called bulkimport for new asset of type castidev.Engine
    mc pb --dir asset1 -i 123456...abc         this creates a directory called asset1 for existing asset
    mc pb -of 3 -t castidev.Engine             start data creation template 3 days before now


  use --mode performance for standard data generation or --mode simulation for high frequency data generation
  The typeid must be derived from core.basicdevice and asset twintype must be simulation for high frequency data upload
```

### Example - Simulation Asset

```bash
mc prepare-bulk  --typeid {yourtenant}.SimulationEngine \
--passkey {yourpasskey} --twintype simulation --dir bulkupload
```

will create a directory `bulkupload` with the following content

```bash
$ ls -la
total 21
drwxr-xr-x 1 sn0wcat 1049089   0 May 17 08:58 .
drwxr-xr-x 1 sn0wcat 1049089   0 May 17 08:58 ..
-rw-r--r-- 1 sn0wcat 1049089 365 May 17 08:58 asset.json
drwxr-xr-x 1 sn0wcat 1049089   0 May 17 08:58 csv
drwxr-xr-x 1 sn0wcat 1049089   0 May 17 08:58 json
```

You can edit the asset.json to change the asset data (name, location) and create/change the csv files according to your needs.

### Example - Performance Asset

This will create a similar directory for the performance assets.

```example
mc prepare-bulk  --assetid 123...ef \
--passkey {yourpasskey} --twintype performance --dir bulkupload1
```

## Uploading time series data (`mc run-bulk`)

This command can be used to

-   convert the csv files to json and verify their content (running `mc run-bulk` command without the `--start` parameter)
-   start the timeseries (bulk) upload jobs (with `--start`) command

```text
mc run-bulk --help

Usage: run-bulk|rb [options]

runs the timeseries (bulk) upload job from <directoryname> directory *

Options:
  -d, --dir <directoryname>  config file with agent configuration (default: "bulkupload")
  -y, --retry <number>       retry attempts before giving up (default: 3)
  -l, --parallel <number>    parallel chunk uploads (default: 3)
  -s, --size <size>          entries per file  (default: 9007199254740991)
  -f, --force                force generation of json files, file upload and creation of jobs
  -k, --passkey <passkey>    passkey
  -v, --verbose              verbose output
  -t, --start                start sending data to mindsphere
  -h, --help                 output usage information

  Examples:

    mc run-bulk runs the upload job from the  bulkimport directory
    mc run-bulk --dir asset1 --verbose runs the upload job from the asset1 with verbose output
```

### Example

```bash
mc run-bulk --passkey {yourpasskey}
```

will convert the csv files and produce an output similar to this one:

```text
Running timeseries bulk API ingest for simulationAsset of type castidev.SimulationEngine with twintype simulation
√ Done converting files to json.

run mc bulk-run with --start option to start sending data to mindsphere
```

The following command will start uploading the data to MindSphere

```bash
mc run-bulk --passkey {yourpasskey} --start
```

## Checking the progress of the upload jobs (`mc check-bulk`)

You can check the progress of your historical time series import by running the `mc check-bulk` command.

```bash
Usage: check-bulk|cb [options]

checks the progress of the upload jobs from <directoryname> directory *

Options:
  -d, --dir <directoryname>  config file with agent configuration (default: "bulkupload")
  -y, --retry <number>       retry attempts before giving up (default: 3)
  -k, --passkey <passkey>    passkey
  -v, --verbose              verbose output
  -h, --help                 output usage information

  Examples:

    mc check-bulk   displays job progress of bulkimport directory
    mc check-bulk --dir asset1 --verbose   displays job progress of asset1 directory with verbose output
```

### Example

The following command:

```bash
mc check-bulk --passkey {yourpasskey}
```

will product an output similar to this one:

```text
√ checking is done.
1 job(s) in status SUCCESS.
3 job(s) in status IN_PROGRESS.
```
