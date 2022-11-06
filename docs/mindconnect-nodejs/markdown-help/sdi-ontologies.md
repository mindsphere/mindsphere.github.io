---
title: MindSphere CLI -  mdsp sdi-ontologies Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp sdi-ontologies Command

Syntax:

```bash
mdsp sdi-ontologies
```

Help:

```bash
mdsp sdi-ontologies --help
```

Alternative form:

```bash
mc sdi-ontologies
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage ontologies for SDI *

## Usage

Parameter list:

```text
Usage: mc sdi-ontologies|sdo [options]

manage ontologies for SDI *

Options:
  -m, --mode [list|infer|update|template|info|delete]  list | infer | update | template | info | delete (default: "list")
  -d, --ontology                             ontology file with definition for --mode infer or update command
  -i, --ontologyid                         the ontology id for --mode info, update or delete command
  -o, --overwrite                                      overwrite template file if it already exists
  -k, --passkey                               passkey
  -y, --retry                                  retry attempts before giving up (default: "3")
  -v, --verbose                                        verbose output
  -h, --help                                           display help for command

```

## Examples

Here are some examples of how to use the `mdsp sdi-ontologies` command:

```text

  Examples:

    mdsp sdi-ontologies --mode list 		 list all sdi ontologies
    mdsp sdi-ontologies --mode template 		 create template file
    mdsp sdi-ontologies --mode infer --ontology  		 infer sdi  ontology
    mdsp sdi-ontologies --mode info --ontologyid    		 get sdi ontology info
    mdsp sdi-ontologies --mode delete --ontologyid  		 delete sdi ontology

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.