---
title: MindSphere CLI -  mdsp oe-deploy-workflow Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp oe-deploy-workflow Command

Syntax:

```bash
mdsp oe-deploy-workflow
```

Help:

```bash
mdsp oe-deploy-workflow --help
```

Alternative form:

```bash
mc oe-deploy-workflow
```

(The CLI was using `mc` as default command name in older versions)

## Description

list, create/instantiate, update or delete/cancel workflow deployment model or instance(s) (open edge) *

## Usage

Parameter list:

```text
Usage: mdsp oe-deploy-workflow|oedw [options]

list, create/instantiate, update or delete/cancel workflow deployment model or instance(s) (open edge) *

Options:
  -m, --mode [list|create|instantiate|update|cancel|delete|template|info]  list | create | instantiate | update | cancel | delete | template |
                                                                           info (default: "list")
  -k, --key                                                           the workflow model key
  -i, --id                                                             the deployment model instance id
  -f, --file                                                         .mdsp.json file
  -md, --model                                                             include the model
  -u, --history                                                            include the transition history
  -c, --currentstate                                         current state value to filter
  -g, --group                                                       group value to filter
  -d, --deviceid                                                 deviceid to filter
  -o, --overwrite                                                          overwrite template file if it already exists
  -k, --passkey                                                   passkey
  -y, --retry                                                      retry attempts before giving up (default: "3")
  -v, --verbose                                                            verbose output
  -h, --help                                                               display help for command

```

## Examples

Here are some examples of how to use the `mdsp oe-deploy-workflow` command:

```text

  Examples:

    mc oe-deploy-workflow --mode list 			list all workflow instances descriptions belonging to the caller's tenant.
    mc oe-deploy-workflow --mode template 		create a template files to define the workflow state machine model.
    mc oe-deploy-workflow --mode create --file edge.app.model.mdsp.json 
	creates a new workflow model from template file.
    mc oe-deploy-workflow --mode instantiate --file edge.app.instance.mdsp.json 
	creates a new workflow instance from template file.
    mc oe-deploy-workflow --mode update --id "7d018c..." --file edge.app.status.mdsp.json 
	update a workflow instance.
    mc oe-deploy-workflow --mode info --id 		get details of a deployment workflow instance.
    mc oe-deploy-workflow --mode info --key 	get details of a deployment workflow model.
    mc oe-deploy-workflow --mode cancel --id  	cancel a deployment workflow.
    mc oe-deploy-workflow --mode delete --key  	delete a deployment workflow model.

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.