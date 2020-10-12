---
id: federation
title: Federation
sidebar_label: 🌐 Federation
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

## Economic federation

The above protocols have been designed for social activities, but what of economic activities?

*[Talk about VF vocab and interop...]*

## What does it mean for Reflow?

We have built upon these standards so that any interaction you may have with an actor (person, organisation, group), or object (eg. a proposal or an economic resource) within the system (eg. posting a need in your neighborhood group, or recording the use of a 3D printer in a Fablab of a city you are visiting) can happen seamlessly even if the other people/groups involved are not users of the same instance as you (eg. you signed up to the Waag Amsterdam *instance* of Reflow, and are interacting with resources and recording events in the Fablab group on Iaac Barcelona instance). 