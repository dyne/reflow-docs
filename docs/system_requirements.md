---
id: system_requirements
title: System requirements
sidebar_label: 🔨 System requirements
---


## Server
For best performance, stability and functionality we have documented some recommendations for running a ReflowOS server.

You can either use Docker on any server that supports it, and the docker-compose file provided will manage the OS, database, and app/web servers for you, or you can deploy manually with the following:

| Platform |	Options|
| -- | -- |
| Operating System | Debian 10+ (Buster),  Alpine Linux 3+ (recommended), Ubuntu 20.04+ LTS, Red Hat Enterprise Linux 8+, SUSE Linux Enterprise Server 15+, openSUSE Leap 42.1+, or CentOS 8+ |
| Database	|  Postgres 12+ with Postgis extension |
| App Server | Erlang / Elixir
| Web proxy	 | Nginx or Caddyserver


### Memory
Memory requirements for running a ReflowOS server are greatly variable, depending on the numbers of users, apps, files and volume of server activity.

ReflowOS needs a minimum of 128MB RAM, and we recommend a minimum of 512MB.


### Web browser
For the best experience with the ReflowOS web interface, we recommend that you use the latest and supported version of a browser from this list, or one based on those:

- Microsoft Edge
- Mozilla Firefox
- Google Chrome/Chromium
- Apple Safari


### Deployment documentation
Please refer to the deploy guide published **[here](https://github.com/dyne/zenpub/blob/flavour/zenpub/DEPLOY.md)**