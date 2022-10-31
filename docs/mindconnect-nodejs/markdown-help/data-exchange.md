---
title: MindSphere CLI -  mdsp data-exchange Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp data-exchange Command

Syntax:

```bash
mdsp data-exchange
```

Help:

```bash
mdsp data-exchange --help
```

Alternative form:

```bash
mc data-exchange
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, upload, download and manage data exchange files and directories *

## Usage

Parameter list:

```text
Usage: mdsp data-exchange|dx [options]

list, upload, download and manage data exchange files and directories *

Options:
  -m, --mode [list|info|download|upload|rename|delete|renamedir|mkdir|rmdir]  mode [list | info | download | upload | rename | renamedir |
                                                                              delete | mkdir | rmdir ] (default: "list")
  -f, --file                                                            file path
  -n, --dirname                                                      directory name for --mode mkdir command
  -w, --newname                                                      new file or directory name for --mode rename or renamedir command
  -d, --dirid                                                          directory id [private | public | ] (default: "public")
  -i, --fileid                                                        fileid
  -r, --recursive                                                             used for --mode rmdir command, deletes all content in directory
  -k, --passkey                                                      passkey
  -y, --retry                                                         retry attempts before giving up (default: "3")
  -v, --verbose                                                               verbose output
  -h, --help                                                                  display help for command

```

## Examples

Here are some examples of how to use the `mdsp data-exchange` command:

```text

  Examples:

    mc data-exchange --mode list 					  list all entries in public data exchange root
    mc data-exchange --mode list --dirid private 			  list all entries in private data exchange root
    mc data-exchange --mode info --dirid  			  get full info about the specified directory
    mc data-exchange --mode info --fileid  			  get full info about the specified
    mc data-exchange --mode download --fileid  			  download file with specified id
    mc data-exchange --mode upload --file  --dirid  	  upload file to specified directory
    mc data-exchange --mode rename --fileid  --newname   rename the specified file
    mc data-exchange --mode renamedir --dirid  --newname  rename the specified directory
    mc data-exchange --mode delete --fileid  			  delete file with specified id
    mc data-exchange --mode rmdir --dirid  			  delete directory with specified id
    mc data-exchange --mode rmdir --dirid  --recursive 		  delete directory with specified id recrusively

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.