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

All of these parts can run on a single server; or they can be separated with many load-balanced web-servers, a database cluster, and a file-server; or anywhere between those extremes.

Each instance stores the full data for local users, groups, and economic resources and activities (including personal information and private messages).

Due to federation, the instance also will contain partial data that has been federated from external users across the network. Each item in the database and search index always refers back to the originating instance for the full data (e.g.: memberships, roles and permissions ; current status, quantity or balance).


## Data flows

*Interactive diagram of the architecture from the point of view of data flows:*

<iframe style="border:none" width="800" height="1200" src="https://whimsical.com/embed/KaHd3DwFm69YMLj94fUweA"></iframe>


## Glossary

ActivityPub - a standard decentralised social networking protocol based on ActivityStreams.

ActivityStreams - a standard format for syndicating social activities.

API - Application Programming Interface. A set of definitions, protocols, and tools for building application software, to enable communication between various components.

Canonical - the main or reference location for something (eg. canonical URL)

Data handling module - a database abstraction library, using an ORM approach, which would have added support for caching and federation (when applicable).

Decentralisation - the process by which the activities of a network are distributed or delegated away from a central, authoritative location or group.

Federation - the ability for decentralised systems to send data to one another in a standardised way, to prevent fragmentation of the network. Email is a great example of a federated system.

GNU AGPL - a free, copyleft license published by the Free Software Foundation, and based on version 3 of the GNU General Public License (GPL) and the Affero General Public License. This license is compatible with the GPL and is recommended for any software that will commonly be run over a network.

GNU GPL - a widely used free software license guaranteeing end users the freedom to run, study, share and modify the libre software.

Instance - See also node. Can refer to an independently-hosted version of a software package.

Libre software - software that is distributed under terms that allow users to run the software for any purpose as well as to study, change, and distribute it (and any adapted versions).

Metadata - data that provides information about other data. For educational resources, it could describe various aspects of the material, including grade level, subject area, and content type or format.

Instance - an independently-hosted version of the ZenPub server.

Node - a member of a decentralised network, which can sometimes serve as client, sometimes as server. See also Instance.

Open Source - a decentralized software-development model that encourages open collaboration, with products such as source code, blueprints, and documentation freely available to the public.

ORM - Object-relational mapping, used to create a ‘virtual object database’ which can then be referenced programmatically (with less code and more flexibility as to the underlying data storage).

Protocol - a defined set of rules and formats that determine how data is transmitted.

SaaS - Software as a Service. Web-based software that’s centrally hosted and made available to use (free or by subscription).

Scaling horizontally - implies adding more nodes to a system to support its growth, for example installing copies of the same software on three web servers instead of just one.

Scaling vertically - implies adding resources (like CPUs or memory) to a single server in a system to support its growth.

Search index - a component of search engines which collects, parses, and stores data to facilitate fast and accurate search and information retrieval. Index design incorporates interdisciplinary concepts from linguistics, cognitive psychology, mathematics, informatics, and computer science.

Standard - a collection of agreed specifications, usually organised by a standards body such as the W3C.