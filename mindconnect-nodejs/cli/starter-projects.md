---
hide_license_text: True
show_mit_license_text: True
---

# MindConnect--NodeJS - CLI - <small>Starter Projects</small>

## Introduction

The CLI provides a convinient way to kick off your custom agent development.

## TypeScript Starter Project (`mc starter-ts`)

```text
Usage: starter-ts|st [options]

creates a starter project in typescript #

Options:
  -d, --dir <directoryname>  directory name (default: "starterts")
  -v, --verbose              verbose output
  -h, --help                 output usage information

  Examples:

    mc starter-ts                     this creates a directory called starterts
    mc st --dir mindconnect-agent     this creates a directory called mindconnect-agent
```

### Example

Run:

```bash
mc starter-ts
```

<!-- prettier-ignore-start -->
!!! info
    Run `npm install` in your starter project directory to install all dependencies
<!-- prettier-ignore-end -->

## JavaScript Starter Project (`mc starter-js`)

```text
Usage: starter-js|sj [options]

creates a starter project in javascript #

Options:
  -d, --dir <directoryname>  directory name (default: "starterjs")
  -v, --verbose              verbose output
  -h, --help                 output usage information

  Examples:

    mc starter-js                    this creates a directory called starterts
    mc sj --dir mindconnect-agent    this creates a directory called mindconnect-agent

```

### Example

Run

```bash
mc starter-js --dir mydir
```

to create a starter project in mydir directory.

<!-- prettier-ignore-start -->
!!! info
    Run `npm install` in your starter project directory to install all dependencies
<!-- prettier-ignore-end -->
