---
title: MindSphere CLI -  mdsp sdi-ontology-jobs Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp sdi-ontology-jobs Command

Syntax:

```bash
mdsp sdi-ontology-jobs
```

Help:

```bash
mdsp sdi-ontology-jobs --help
```

Alternative form:

```bash
mc sdi-ontology-jobs
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage ontology jobs for SDI *

## Usage

Parameter list:

```text
Usage: mc sdi-ontology-jobs|sdb [options]

manage ontology jobs for SDI *

Options:
  -m, --mode [submit|info]               submit|info (default: "submit")
  -o, --ontology               ontology file (json or owl)
  -n, --name                       the ontology name (default: "myontology")
  -i, --ontologyid           the ontology id (for update)
  -k, --keymappingtype   key mapping type (default: "INNER JOIN")
  -s, --description         the ontology description (default: "created-by-mindsphere-cli")
  -j, --jobid                the jobid for --info command
  -k, --passkey                 passkey
  -y, --retry                    retry attempts before giving up (default: "3")
  -v, --verbose                          verbose output
  -h, --help                             display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-ontology-jobs` command:

```text

  Examples:

    mc sdi-ontology-jobs --mode submit --ontology 	 upload ontology
    mc sdi-ontology-jobs --mode info --jobid    			 get sdi ontology upload job info

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.