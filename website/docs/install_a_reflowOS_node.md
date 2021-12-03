---
id: install_a_reflowOS_node
title: How to install a reflowOS instance
sidebar_label: "💾 Install an instance"
---

# ReflowOS instance installation & configuration

*These instructions are for setting up the core ReflowOS instance.* 

---

## Step 0 - Install Dependencies & Prepare Environment

1. Make sure you have [Docker](https://www.docker.com/), a recent [docker-compose](https://docs.docker.com/compose/install/#install-compose) (which supports v3 configs), and [make](https://www.gnu.org/software/make/) installed

2. Ensure that the docker daemon is running on your host.

3. Clone the ReflowOS git repositorya

```
git clone https://github.com/dyne/reflow-os
cd reflow-os
```

## Step 1 - Configure the instance

The app needs some environment variables to be configured in order to work.

In the `conf/` directory, there are following default config files:

* `bonfire-public.env`: default base configuration
* `bonfire-gensecrets.sh`: script to generate passwords and secrets


`MAIL_DOMAIN` and `MAIL_KEY` are needed to configure transactional email, sign up at [Mailgun](https://www.mailgun.com/) and then configure the domain name and key.

---

## Step 2 - Install

---

### Build & Run ReflowOS using Docker containers


1. Build & run the docker image with console running in shell

```sh
$ make

$
```
---

## Step 3 - Test

By default, the backend listens on port 4000 (TCP), so you can access an example front end with your browser pointing to http://localhost:4000/ (if you are on the same machine).

For further up to date build and configuration options please see the README.md file in the reflow-os git repository.

The WeLoop frontend is developed in a [seperate repository](https://github.com/reflow-project).

