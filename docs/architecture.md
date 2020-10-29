---
id: architecture
title: Architecture
sidebar_label: 🔩 Architecture
---

## Reflow is a decentralised network

The Reflow network is based on open protocols and standards to form a decentralised collection of independent *instances* that send, receive, and store data. 

## Components of a Reflow instance

A Reflow instance comprises: 

- the ZenPub server (running on a Elixir-capable web server)
- a ZenPub client (typically static JS/HTML/CSS/images which can be served by any web server)
- a database managed by PostgreSQL
- a file store for uploaded files
- an optional search index (powered by Meili)

### Zooming in on one instance

All of these components can run on a single server; or they can be separated with many load-balanced web-servers, a database cluster, and a file-server; or anywhere between those extremes.

Each instance stores the full data for local users, groups, and economic resources and activities (including personal information and private messages).

Due to federation, the instance also will contain partial data that has been federated from external users across the network. Each item in the database and search index always refers back to the originating instance for the full data (e.g.: memberships, roles and permissions ; current status, quantity or balance).


## Data flows

*Interactive diagram of the architecture from the point of view of data flows:*

<iframe style="border:none" width="800" height="1200" src="https://whimsical.com/embed/KaHd3DwFm69YMLj94fUweA"></iframe>

