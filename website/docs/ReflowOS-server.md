---
id: ReflowOS-server
title: "🧩 ReflowOS server"
---

<section class="reflow__doc">
  
[ReflowOS server](https://github.com/dyne/reflow-os) is the back-end software for the Reflow project.

It is based on [Bonfire](http://bonfire.cafe), a [federated](./federation) free software app ecosystem.

## Stack

The server implementation language is Elixir (running on Erlang/OTP), a language designed for building reliable systems. It uses the Phoenix web framework and the Absinthe GraphQL Toolkit to deliver a <a href="https://graphql.org/" rel="nofollow">GraphQL API</a> which the frontend interacts with. It uses ActivityPub to deliver server-to-server [federation](/docs/federation).

[Read more about the full auto-generated API documentation](/static/api/index). 


## Documentation

Do you want to...

- Read about the backend architecture? Read the ReflowOS [overview](https://github.com/dyne/bonfire-app/blob/main/flavours/reflow/README.md).

- Hack on the code? Read the ReflowOS [Developer FAQs](https://github.com/dyne/bonfire-app/blob/main/docs/HACKING.md).

- Understand the API implementation? Read the ReflowOS [GraphQL guide](https://github.com/dyne/bonfire-app/blob/main/docs/GRAPHQL.md).

- Deploy in production? Read the ReflowOS [Deployment Docs](https://github.com/dyne/reflow-os/).

</section>
