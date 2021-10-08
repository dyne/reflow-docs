---
id: components
title: Components
sidebar_label: "🧩 Components"
---

<section class="reflow__doc">

## Server backend

[ReflowOS server](https://github.com/dyne/reflow-os) is the back-end software for the Reflow project.

It is based on [Bonfire](http://bonfire.cafe), a [federated](./federation) free software app ecosystem.

The ReflowOS server implementation language is Elixir (running on Erlang/OTP), a language designed for building reliable systems. It uses the Phoenix web framework and the Absinthe GraphQL Toolkit to deliver a <a href="https://graphql.org/" rel="nofollow">GraphQL API</a> which the frontend interacts with. It uses ActivityPub to deliver server-to-server [federation](/docs/federation).

[Read more about in the API tour](./api_tour). 

## Client frontend

[Reflow WeLoop client](https://github.com/reflow-project/weloop) is an example front-end software for the Reflow project, which connects to the [API](./api_tour) of a [ReflowOS server](./ZenPub).

It is based on web technologies so you can use it with any modern browser (desktop or mobile). The client is written in React (TypeScript and JavaScript).

The WeLoop client, the mobile app and any other frontend to REFLOWOS is **work in progress** available by 1Q 2021 according to the REFLOW project plan.

## Cloud container

The ReflowOS cloud container is designed to connect a distributed cloud of micro-services through a private and anonymous peer-to-peer network cluster, enforcing privacy by design principles and lowering the liability of network and service providers.

This component will be deployed once REFLOW pilots are ready to test [federation](./federation) features according to specific requirements.

## Smart contracts

Development of crypto smart-contracts and blockchain integration is on-schedule and was delivered at end of 1Q 2021 according to the REFLOW project plan.

The DECODE technology adopted is [Zenroom](https://zenroom.org): a tiny secure execution environment that integrates in any platform and application, even on a chip or a web page. It can authenticate, authorize access and execute human-readable smart contracts for blockchains, databases and much more. It helps to implement a cryptographic stack inside REFLOW OS by keeping it simple, understandable and maintainable.

</section>
