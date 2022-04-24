---
title: MindSphere CLI -  mdsp identity-management Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---

# MindSphere CLI: mdsp identity-management Command

Syntax:

```bash
mdsp identity-management
```

Help:

```bash
mdsp identity-management --help
```

Alternative form:

```bash
mc identity-management
```

(The CLI was using `mc` as default command name in older versions)

## Description

manage mindsphere users, groups and roles *

## Usage

Parameter list:

```text
Usage: mc identity-management|iam [options]

manage mindsphere users, groups and roles *

Options:
  -m, --mode [list|create|assign|remove|delete|info]  Mode can be list | create | assign | remove | delete | info (default: "list")
  -u, --user [user]                                   user name
  -g, --group [group]                                 user group
  -r, --role [role]                                   user role
  -s, --subtenant                          subtenant for user
  -m, --membergroup [membergroup]                     member group
  -l, --memberrole [memberrole]                       member role
  -t, --meta                                          include meta information (ids, login details etc.)
  -w, --raw                                           don't automatically preceed group names with mdsp_usergroup or role with mdsp_customrole
  -k, --passkey                              passkey
  -v, --verbose                                       verbose output
  -h, --help                                          display help for command

```

## Examples

Here are some examples of how to use the `mdsp identity-management` command:

```text

  Example:

    mc iam --mode list --user 		 list all users
    mc iam --mode list --user [user] 	 list all users which contain [user] in the login name
    mc iam --mode list --group 		 list all groups
    mc iam --mode list --group [group] 	 list all groups which contain [group] in the name
    mc iam --mode list --role 		 list all roles
    mc iam --mode list --role [role] 	 list all roles which contain [role] in the name

    mc iam --mode info --user [user] --meta 	 get all infos about users which contain [user] in the login name
    mc iam --mode info --group [group] --meta 	 get all infos about groups which contain [group] in the name
    mc iam --mode info --role [role]  --meta 	 get all infos about roles which contain [role] in the name

    mc iam --mode create|delete --user  	 create or delete user
    mc iam --mode create|delete --group   create or delete group
    mc iam --mode create|delete --role   	 create or delete role
    mc iam --mode create --user  --subtenant subtenant 	 create user in specified subtenant

    mc iam --mode assign --user  --group  	 assign user to user group group
    mc iam --mode assign --user  --role  	 assign role to user user
    mc iam --mode assign --user  --group  	 assign user to user group group
    mc iam --mode assign --group  --membergroup  	 assign membergroup to user group group
    mc iam --mode assign --group  --role  			 assign role to user group group
    mc iam --mode assign --role  --memberrole  	 assign member role to custom role role

    mc iam --mode remove --user  --group  	 remove user from user group group
    mc iam --mode remove --user  --role  	 remove role from user user
    mc iam --mode remove --user  --group  	 remove user from user group group
    mc iam --mode remove --group  --membergroup  	 remove membergroup from user group group
    mc iam --mode remove --group  --role  			 remove role from user group group
    mc iam --mode remove --role  --memberrole  	 remove member role from custom role role

```

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.