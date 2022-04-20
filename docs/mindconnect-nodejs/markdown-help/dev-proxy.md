---
title: MindSphere CLI -  mdsp dev-proxy Command
next:
    - title: Overview
      link: ../cli/index
    - title: Setting up the CLI
      link: ../cli/setting-up-the-cli
---


# MindSphere CLI: mdsp dev-proxy Command

Syntax:

```bash
mdsp dev-proxy
```

Alternative form:

```bash
mc dev-proxy
```

(The CLI was using `mc` as default command name in older versions)

## Description

starts mindsphere development proxy & (optional passkey) *

## Usage

List of all parameters and their description:

```text
Usage: mc dev-proxy|px [options]

starts mindsphere development proxy & (optional passkey) *

Options:
  -m, --mode [credentials|session]  service/app credentials authentication of session authentication (default: "session")
  -o, --port                  port for web server (default: "7707")
  -r, --norewrite                   don't rewrite hal+json urls
  -w, --nowarn                      don't warn for missing headers
  -d, --dontkeepalive               don't keep the session alive
  -v, --verbose                     verbose output
  -s, --session            borrowed SESSION cookie from brower
  -x, --xsrftoken        borrowed XSRF-TOKEN cookie from browser
  -h, --host                  the address where SESSION and XSRF-TOKEN have been borrowed from
  -t, --timeout            keep alive timeout in seconds (default: "60")
  -k, --passkey            passkey
  --help                            display help for command

```

## Examples

These are some examples of how to use the command. 

```text

  Examples:

    mc dev-proxy  				 runs on default port (7707) using cookies
    mc dev-proxy --mode credentials --port 7777 --passkey $MDSP_PASSKEY 
                                        	 runs on port 7777 using app/service credentials

  Configuration:

    	- create environment variables: MDSP_HOST, MDSP_SESSION and MDSP_XSRF_TOKEN using borrowed cookies 

    see more documentation at https://opensource.mindsphere.io/docs/mindconnect-nodejs/development-proxy.html


```

The most commmands use the client provided by TypeScript SDK to call the corresponding MindSphere API endpoint.

See [MindSphere API documentation](https://documentation.mindsphere.io/MindSphere/apis/index.html) for more information about MindSphere APIs.