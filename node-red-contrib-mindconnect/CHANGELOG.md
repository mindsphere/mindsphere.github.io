---
title: MindConnect Node-RED Node - Changelog
hide_license_text: True
show_mit_license_text: True
hide_community_button: True
---

# MindConnect Node-RED Node - <small>Changelog</small>

## 3.4.0 (Vienna Caracals) - April 2019

## New Features 3.4.0

- updated to version 3.4.0. of mindconnect-nodejs library.
- auto keep-alive: the node will renew the token every hour even when there is no data sent.
- programatic delivery of the configuration - prerequisite for auto-configuration node which is coming in next versions
- moved schema-validation to mindconnect-schema.ts, improved code and documentation
- new msg._error message with timestamped error property for better flows

## 3.3.0 (Vienna Panthers) - February 2019

### New Features 3.3.0

- Updated to version 3.3.0. of mindconnect library
- added container build process on hub.docker.com
- direct link to configuration settings in MindSphere from Node-RED UI
- improved error handling

### Bugfix 3.3.0

- fixed the issue #3 Failed to load mindconnect node when modifying the URL root path #3

## 3.2.0 (Vienna Lynx) - January 2019

### New Features 3.2.0

- Updated to version 3.2.0. of mindconnect library
- MIT License
- use flows.json as default

## 3.0.2 (Vienna Wildcats) - November 2018

### New Features 3.0.2

- Updated to version 3.0.2. of mindconnect library
- Improved documentation

## 3.0.1 (Vienna Wildcats) - November 2018

### New Features 3.0.1

- Preparation for release
- Added support for RSA_3072
- Added Bulk Upload
- Retries for mindsphere operations

## 3.0.0 - Beta 2 (Vienna Kittens) - April 2018

### New Features 3.0.0 - beta 2

- Added support for events.
- Added support for file upload.
- Added editable node name.
- Added editable settings for validation and chunking.
- Added security audit and legal audit to build in preparation for publication.

## 3.0.0 - alpha 1 (Vienna Horses) - April 2018

### New Features 3.0.0 - alpha 1

- Provided Docker Images for x86 and arm architectures.
- Provided Docker Images for x86 and arm architectures with siemens proxy (COIA) support.
- Shamelessly upgraded the version to 3.0.0 to match mindconnect-nodejs library.
- Initial support for nodejs.
- Retired mindsphere 2 branch.