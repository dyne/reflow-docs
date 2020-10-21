---
id: ZenPub
title: ZenPub server
---

<section class="reflow__doc">
  
[ZenPub server](https://github.com/dyne/zenpub) is the back-end software for the Reflow project.

It is based on <a href="http://commonspub.org" rel="nofollow">CommonsPub</a>, a [federated](./federation) free software app ecosystem.

## Design Decisions

Feature goals:
- Flexibility for developers and deployments.
- Integrated federation with the existing fediverse.

Operational goals:

  - Easy to set up and run.
  - Light on resources for small deployments.
  - Scalable for large deployments.

Operationally, there's a tension between wanting to be able to scale instances and not wanting to burden small instances with high resource requirements or difficult setup.

There are no easy answers to this. Our current solution is heavily reliant on postgresql. We will monitor perforamnce and scaling and continually evolve our strategy.

## Stack

Our implementation language is Elixir (running on Erlang/OTP), a language designed for building reliable systems. It uses the Phoenix web framework and the Absinthe GraphQL Toolkit to deliver a <a href="https://graphql.org/" rel="nofollow">GraphQL API</a> which the frontend interacts with.

[Read more about the full auto-generated API documentation](/api/index). 

</section>