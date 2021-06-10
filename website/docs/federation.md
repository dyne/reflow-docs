---
id: federation
title: Federation
sidebar_label: "🌐 Federation"
---

## What's federation?

A **federated** social network is a system that is decentralised, developed and operated by distinct providers (something like email but for social networks). It consists of multiple social apps and websites, where users of each site can communicate with users of any of the other compatible sites. 

From a societal perspective, one may compare this concept to that of social media being a public utility, rather than a centralised service that a company tries to monopolise by locking users in. 

An application or website participating in a federated social network is interoperable with the other sites (known as *instances*) and federates (fetching and especially pushing data) with them based on their users interactions. Communication among the social websites is conducted through *social networking protocols*. 

  <img src='../img/decentralised.jpg'/>


## Federation protocols

**[ActivityPub](https://www.w3.org/TR/activitypub/)** is an open, decentralized *social networking protocol*, which defines a standard federated server-to-server API for delivering content and notifications.

  <img src='http://activitypub.rocks/static/images/ActivityPub-tutorial-image.png'/>

**ActivityStreams** is an open format specification [comprised of a JSON-based [syntax](https://www.w3.org/TR/activitystreams-core/) and an extensible [vocabulary](https://www.w3.org/TR/activitystreams-core/)] used to syndicate user activities in social web applications and services. It provides a general way to represent activities, using a simple actor+verb+object structure, for instance "*Alyssa followed Ben*" would be represented as `actor:alyssa, verb:follow, object:ben` or "*Ben added Paris to his list of places to visit*" would be represented as `actor:ben, verb:add, object:paris, target:places_to_visit`.

Both ActivityPub and ActivityStreams are [web standards defined by the W3C (World Wide Web Consortium)](https://www.w3.org/standards/about.html) and are used by many open source federated applications.

Do you know RSS? It is thanks to RSS that a user can subscribe to almost any news/blog/content feed in the world from any number of independently developed feed readers. ActivityPub is having the same impact on social network interactions. It enables a decentralized social web, where a network of servers talk to each other on behalf of individual users, very much like email which made up of different apps operated by different providers but with all users being able to communicate regardless. 

Advantages of a federated network:

- Robust and resilient
- Scales horizontally
- Private data stays on each user’s home instance
- Each instance is responsible for its content (moderation of discussions, etc)
- Standards-based but also extensible
- Open

## Economic federation

The above protocols and standard vocabularies are made for social activities, but what about conducting economic activities?

Fortunately these standards were designed to be extensible, and even more fortunate, some fine folks have been working on something that fits the gap perfectly: [ValueFlows](https://valueflo.ws/) is a set of common vocabularies to describe flows of economic resources of all kinds within distributed economic ecosystems.

[ZenPub](./ZenPub) has been developed as an implementation of a subset of ValueFlows's vocabularies, the Reflow client API is based on [ValueFlow's GraphQL API](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql#vf-graphql), and all economic data can federate over ActivityPub, by making ValueFlows JSON-encoded data available as an ActivityPub `actor` (for people, organisations, and groups), `activity` (eg. economic events) or `object` (eg. economic resources, proposals, processes, etc).

## What does it mean for Reflow?

We have built upon these standards so that any interaction one may have with an actor (person, organisation, group), or object (eg. a proposal or an economic resource) within the system (eg. posting a need in a neighborhood group, or recording the use of a 3D printer in a Fablab of a city one is visiting) can happen seamlessly even if the other people/groups involved are not users of the same instance, for example if one signed up to the Amsterdam Fablab of Reflow and then is interacting with resources and recording events on othe premises of the Barcelona Fablab, or another example can when there is more than one Fablab in the same city and resources and events by each of them can be networked and made available through every federated instance.

This can foster more connection and cooperation between participants in Reflow, but thanks to the heavy use of interoperable standards, it also means that future adaptations of ZenPub as well as entirely new projects will be able to integrate with Reflow as well.

This feature is being developed and tested in the course of the next cycle of development, following adoption by pilots and the evolution of requirements.
