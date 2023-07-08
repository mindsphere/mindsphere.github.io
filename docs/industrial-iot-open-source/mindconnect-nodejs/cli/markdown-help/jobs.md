# mdsp jobs Command

Syntax:

```bash
mdsp jobs
```

Help:

```bash
mdsp jobs --help
```

Alternative form:

```bash
mc jobs
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create or stop jobs *

## Usage

Parameter list:

```text
Usage: mdsp jobs|jb [options]

list, create or stop jobs *

Options:
 -m, --mode [list|create|stop|template|info] list | create | stop | template | info (default: "list")
 -f, --file .mdsp.json file with job definition (default: "jobmanager.job.mdsp.json")
 -i, --jobid the job id
 -e, --message the message filter (contains) for list command
 -s, --status the status filter (equals, e.g. STOPPED, FAILED...) for list command
 -d, --modelid the modelid filter (equals) for list command
 -o, --overwrite overwrite template file if it already exists
 -k, --passkey passkey
 -y, --retry retry attempts before giving up (default: "3")
 -v, --verbose verbose output
 -h, --help display help for command

```

## Examples

Here are some examples of how to use the `mdsp jobs` command:

```text

 Examples:

 mdsp jobs --mode list list all jobs
 mdsp jobs --mode list --status FAILED --message import list all jobs which failed on import
 mdsp jobs --mode list --modelid list all jobs for specified model
 mdsp jobs --mode list --modelid list all jobs for specified model
 mdsp jobs --mode list --modelid list all jobs for specified model
 mdsp jobs --mode template create template file for job creation
 mdsp jobs --mode create --file create job
 mdsp jobs --mode info --jobid get infos about the job
 mdsp jobs --mode stop --jobid stop job with job id

```

See [Insights Hub API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about Insights Hub APIs.
