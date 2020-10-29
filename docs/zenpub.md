---
id: ZenPub
title: ZenPub server
---

<section class="reflow__doc">
  
[ZenPub server](https://github.com/dyne/zenpub) is the back-end software for the Reflow project.

It is based on [CommonsPub](http://commonspub.org), a [federated](./federation) free software app ecosystem.

## Stack

The server implementation language is Elixir (running on Erlang/OTP), a language designed for building reliable systems. It uses the Phoenix web framework and the Absinthe GraphQL Toolkit to deliver a <a href="https://graphql.org/" rel="nofollow">GraphQL API</a> which the frontend interacts with. It uses ActivityPub to deliver server-to-server [federation](/docs/federation).

[Read more about the full auto-generated API documentation](/api/index). 


## Documentation

Do you want to...

- Read about the backend architecture? Read the ZenPub [overview](https://github.com/dyne/zenpub/blob/flavour/zenpub/docs/ARCHITECTURE.md).

- Hack on the code? Read the ZenPub [Developer FAQs](https://github.com/dyne/zenpub/blob/flavour/zenpub/docs/HACKING.md).

- Understand the API implementation? Read the ZenPub [GraphQL guide](https://github.com/dyne/zenpub/blob/flavour/zenpub/docs/GRAPHQL.md).

- Deploy in production? Read the ZenPub [Deployment Docs](https://github.com/dyne/zenpub/blob/flavour/zenpub/docs/DEPLOY.md).

</section>