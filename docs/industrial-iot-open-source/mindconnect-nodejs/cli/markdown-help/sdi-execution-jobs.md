# mdsp sdi-execution-jobs Command

Syntax:

```bash
mdsp sdi-execution-jobs
```

Help:

```bash
mdsp sdi-execution-jobs --help
```

Alternative form:

```bash
mc sdi-execution-jobs
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage data execution jobs for SDI *

## Usage

Parameter list:

```text
Usage: mdsp sdi-execution-jobs|sdx [options]

manage data execution jobs for SDI *

Options:
 -m, --mode [list|create|template|info|delete|result] list | create | template | info | delete | result (default: "list")
 -d, --executionjob data execution job file with definition for --mode create command
 -q, --queryid the query id
 -i, --jobid the executionjob id for --mode info, update or delete command
 -r, --result result file for --mode result (default: "sdi.jobresult.mdsp.json")
 -o, --overwrite overwrite template file if it already exists
 -k, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-execution-jobs` command:

```text

 Examples:

 mdsp sdi-execution-jobs --mode list list all sdi data execution jobs
 mdsp sdi-execution-jobs --mode template create template file
 mdsp sdi-execution-jobs --mode create --executionjob create sdi data execution job
 mdsp sdi-execution-jobs --mode update --executionjob --jobid update sdi data executionjob
 mdsp sdi-execution-jobs --mode info --jobid get sdi data execution job info
 mdsp sdi-execution-jobs --mode result --jobid get execution job results
 mdsp sdi-execution-jobs --mode delete --jobid delete sdi data execution job

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
