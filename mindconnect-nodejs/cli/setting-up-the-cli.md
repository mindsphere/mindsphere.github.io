---
hide_license_text: True
show_mit_license_text: True
---

# MindConnect-NodeJS - <small>Setting up the CLI</small>

## Acquiring service credentials

The first step in setting up the command line interface is to acquire the [service credentials](/howto/howto-selfhosted-api-access.html#creating-service-credentials). These credentials can be used to access the MindSphere APIs in order to perform the administrative tasks.

After the service credentials have been aquired you can register them with the command line interface. You will have to create and remember a passkey at this moment which must be used in other CLI commands to unlock the credential store.

## Command Overview

```bash
$ mc service-credentials --help

Usage: service-credentials|sc [options]
provide login for commands which require technical user credentials *

Options:  -u, --user <username>      service credentials: username  -p, --password <password>  service credendials: password
  -g, --gateway <gateway>    region string or full gateway url (e.g. eu1, eu2 or https://gateway.eu1.mindsphere.io)
  -t, --tenant <tenant>      your tenant name
  -k, --passkey <passkey>    passkey (you will use this in the commands which require service credentials)
  -v, --verbose              verbose output
  -h, --help                 output usage information

  Example:

    mc service-credentials --user tenantx001 --password xxxx-xxx-x-x --gateway eu1 --tenant tenantx --passkey mypasskey

  Important:

    you need to supply the service credentials for this operation and provide the passkey

    how to get service credentials:
    https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html#creating-service-credentials
```

## Example

Let's assume that we have acquired the {your_username} {your_password} credentials from mindsphere support and that your tenant is called {your_tenant} on the {eu1|eu2...} instance on the mindsphere.

You can register this with the library by running the following command:

```bash
mc service-credentials --user {your_username} --password {your_password} --t tenantx \
--gateway {eu1|eu2.. } --passkey {your_passkey}
```

The gateway paramter can also be a full url like this `https://gateway.eu1.mindsphere.io`

## Location of stored credentials

The credentials you have created are stored in the %HOME% directory of the user (%USERPROFILE% on windows) in a hidden folder called .mc

```bash
ls -la .mc/auth.json
-rw-r--r-- 1 sn0wcat 1049089 249 Oct  2  2018 .mc/auth.json
```

The credentials are encrypted with the passkey you provided during the creation. This passkey must be provided to all other commands which require service credentials.
