# mdsp sdi-ingest-jobs Command

Syntax:

```bash
mdsp sdi-ingest-jobs
```

Help:

```bash
mdsp sdi-ingest-jobs --help
```

Alternative form:

```bash
mc sdi-ingest-jobs
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage ingest jobs for SDI *

## Usage

Parameter list:

```text
Usage: mdsp sdi-ingest-jobs|sdj [options]

manage ingest jobs for SDI *

Options:
 -m, --mode [list|create|template|info] list | create | template | info (default: "list")
 -j, --ingestjob the job information for --mode create command
 -i, --jobid the job id for --mode info command
 -o, --overwrite overwrite template file if it already exists
 -k, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-ingest-jobs` command:

```text

 Examples:

 mdsp sdi-ingest-jobs --mode list list all sdi data ingest jobs
 mdsp sdi-ingest-jobs --mode template create template file
 mdsp sdi-ingest-jobs --mode create --ingestjob create sdi ingest job
 mdsp sdi-ingest-jobs --mode info --jobid get sdi ingest job info

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
