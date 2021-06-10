---
id: api_tour
title: API Tour
sidebar_label: "📕 API Tour"
---

Here is a series of sample queries and mutations for the [ZenPub](/docs/ZenPub) client API (which uses [GraphQL](https://graphql.org/)) that will be needed to achieve the use cases proposed in this manual.

The API is flexible enough to satisfy a wider range of use cases and scenario, according to the stakeholders needs.
Think of the following ones as a starting point to help shape your apps and ideas.

You can also refer to the [full auto-generated API documentation](/api/index). 

## Authentication

### Register a new user
```graphql
mutation {
  createUser(
    icon: {url: String}, 
    image: {url: String}, 
    user: {
      email: String!,
      extraInfo: Json,
      location: String,
      name: String!,
      password: String!,
      preferredUsername: String!,
      summary: String,
      wantsEmailDigest: Boolean!,
      wantsNotifications: Boolean!,
      website: String
    }) {
      email
      isConfirmed
      user {
        preferredUsername
        displayUsername
        canonicalUrl
        ...
      }
  }
}
```
### Confirm email

```graphql
mutation {
  confirmEmail(token: String) {
    me {
      isConfirmed
    }
    token
  }
}
```


### Login
```graphql
mutation {
    createSession(email: String!, password: String!) {
      token # Use the token to activate a session with the server
    }
}
```

### Get the current user details
The current logged in account and user. Contains different fields (including private information) than querying for myAgent.

```graphql
{me {
  email
  isConfirmed
  isInstanceAdmin
  user {
    icon
    image
    name
    preferredUsername
  }
}}
```
### Display currently logged in agent profile

```graphql
 {myAgent {
  id
  name
  displayUsername
  canonicalUrl
  image
  primaryLocation {
    name
    lat
    long
  }
  intents {
    name
  }
  proposals {
    name
  }
  inventoriedEconomicResources {
    name
  }
  economic_events {
    name
  }
}}
```

### Display any agent profile

```graphql
 {agent(id: ID!) {
  id
  name
  displayUsername
  canonicalUrl
  image
  primaryLocation {
    name
    lat
    long
  }
  intents {
    name
  }
  proposals {
    name
  }
  inventoriedEconomicResources {
    name
  }
  economic_events {
    name
  }
}}
```


#### Display the activities on the local instance (paginated)
Contains all activities from the instance. 

```graphql
{instance {
  description
  outbox(after: [id], before: [id], limit: Number) { # <- pagination
    edges {
      user {
        icon {
          url
        }
        name
        image {
          url
        }
      }
      verb
      context {
        # it can be an intent, an economic event, a social activity, etc
        __typename
        ...on Intent {
          name
          canonicalUrl
        }
         ...on Comment {
          content
        }
      }
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}}
```

#### Display a user's activities (paginated)
```graphql
{user(id: String!) {
    outbox(after: [id], before: [id], limit: Number) {
      edges {
        user {
          icon
          name
          image
        }
        verb
        context {
          __typename
          ...on Intent {
          name
          canonicalUrl
        }
         ...on Comment {
          content
        }
        }
      }
      totalCount
      pageInfo
    }
  }
}
```

#### Display current user's feed (paginated)
Contains activities from people, agents or groups the current user is following.

```graphql
{me {
user(id: String!) {
    inbox(after: [id], before: [id], limit: Number) {
      edges {
        user {
          icon
          name
          image
        }
        verb
        context {
          __typename
          ...on Intent {
          name
          canonicalUrl
        }
         ...on Comment {
          content
        }
        }
      }
      totalCount
      pageInfo
    }
  }
}}
```

#### Display all users (paginated) 

```graphql
{peoplePages(limit: 10) {
  edges {
    id
    name
    displayUsername
    image
    canonicalUrl
  }
}}
```

```graphql
{organizationsPages(limit: 10) {
  edges {
    id
    name
    displayUsername
    image
    canonicalUrl
  }
}}
```

## Define the network sentiment
**[Read more about this usecase](/docs/define_the_network_sentiment)**

#### Phase 1. Populate the network with activities

### Create a location
Populate the network with a set of meaningful locations, so that they will be filterable and associated with specific events.

```graphql
mutation {
  createSpatialThing(
    spatialThing: {
    alt: Float,
    lat: Float,
    long: Float,
    mappableAddress: String,
    name: String!,
    note: String
  }) {
    spatialThing {
      id
      name
      lat
      long
      long
      mappableAddress
      note
    }
  }
}
```

### Create a unit
Create the units that will be used within the network

```graphql
mutation {
  createUnit(
    unit: {
      label: String!,
      symbol: String!
    }
  ) {
    unit {
      id
      label
      symbol
    }
  }
}
```

### Record an offer (inventory entry)

```graphql
mutation {
  createOffer(intent: {
      action:String!,
      name: String,
      note: String
      atLocation: ID,
      availableQuantity: {hasUnit: ID!, hasNumericalValue: String!},
      due: DateTime,
      image: {url: String},
      tags: [ID!]
    }
  ) {
    intent {
      id
      name
      note
    }
  }
}
```

### Record a need (wishlist entry)
```graphql
mutation {
  createNeed(intent: {
    action:String!,
    name: String,
    note: String
    atLocation: ID,
    availableQuantity: {hasUnit: String!, hasNumericalValue: String!},
    due: DateTime,
    image: {url: String},
    tags: [ID!]
  }
  ) {
    intent {
      id
      name
      note
    }
  }
}
```

### Publish an offer or a need (proposal)

1. Publish a proposal

```graphql
mutation {
  createProposal(
    proposal: {
      hasEnd: Date,
      inScopeOf: ID,
    }
  ) {
    proposal {
      id
    }
  }
}
```

2. Link the offer or need (intent) to the proposal
```graphql
mutation {
  proposeIntent(
		publishes: ID!  # the (Intent) to include as part of the proposal 
    publishedIn: ID! # the (Proposal) to include the intent in 
    reciprocal: Boolean # true if this is a reciprocal intent of this proposal, not primary (eg. what amount of currency is offered in exchange for the proposed need)
  ) {
		proposedIntent {
      id
      publishes {
        name
      }
      publishedIn {
        name
      }
  	}
  }
}
```

### Publish a proposal (by itself)

```graphql
mutation {
  createProposal(
    proposal: {
      name: String,
      note: String,
      eligibleLocation: ID,
      hasEnd: Date,
      inScopeOf:ID
    }
  ) {
    proposal {
      id,
      name,
      note
    }
  }
}
```

### Create a process
An activity that changes inputs into outputs. It could transform or transport economic resource(s).

```graphql
mutation {
  createProcess(
		process: {
      name: String,
      note: String,
      hasEnd: DateTime,
      hasBeginning: DateTime
    }
  ) {
		process {
      id
      name
      note
  	}
  }
}
```

### Conduct an economic event that results in a completely new resource

```graphql
mutation {
  createEconomicEvent(
		event: {
      note: String,
      action: String!, # eg. produce or raise
      provider: ID!,
      receiver: ID!,
      resourceQuantity: {hasUnit: ID!, hasNumericalValue: Float!}
    },
    newInventoriedResource: { # details of the new resource
      name: String
    }
  ) {
		economicEvent {
      id
      note
      receiver {
        id
        name
        note
      }
      provider {
        id
        name
        note
      }
      resourceQuantity {
        hasNumericalValue
        hasUnit {
          label
          symbol
        }
      }
      resourceInventoriedAs { # the newly created resource
        id
        name
        onhandQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
        accountingQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
      }
  	}
  }
}
```


### Conduct an economic event on an existing resource

```graphql
mutation {
  createEconomicEvent(
		event: {
      note: String,
      action: String!, # eg. consume
      resourceInventoriedAs: ID!, # what resource to act on
      provider: ID!,
      receiver: ID!,
      resourceQuantity: {hasUnit: ID!, hasNumericalValue: Float!} # how much of the resource is affected
    }
  ) {
		economicEvent {
      id
      note
      resourceInventoriedAs { # updated details of the existing resource
        id
        name
        onhandQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
        accountingQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
      }
  	}
  }
}
```


### Conduct an economic event between an existing resource and a new resource

```graphql
mutation {
  createEconomicEvent(
		event: {
      note: String,
      action: String!, # eg. transfer
      provider: ID!,
      receiver: ID!,
      resourceInventoriedAs: ID!, # what resource are we transfering
      resourceQuantity: {hasUnit: ID!, hasNumericalValue: Float!} # how much of the resource to transfer
    },
    newInventoriedResource: { # details of the transfered (part of the) resource
      name: String
    }
  ) {
		economicEvent {
      id
      note
      resourceInventoriedAs { # updated details of the existing resource
        id
        name
        onhandQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
        accountingQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
      }
  	}
    resourceInventoriedAs { # details of the new transfered resource
        id
        name
        onhandQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
        accountingQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
      }
  	}
  }
}
```

#### Start a discussion upon an offer or a need
```graphql
mutation {
  createThread(
    contextId: ID # what are we commenting on (eg a proposal) or in what context are we starting a discussion (eg a community)
    comment: {
      content: String!
    }
  }) {
    id
    creator {
      name
      id
      likerCount
    }
    name
    content
  }
}
```

#### Phase 2. Search and filter aggregated data 

### Look for proposals at a specific place

```graphql
{
  proposalsFiltered(atLocation: ID) {
    id
    name
    note
    image
  }
}
```

### Look for proposals near a specific location

```graphql
{
  proposalsFiltered(geolocation: {
    nearAddress: String, # eg. Place de la Republique, Paris, France
    distance: {meters: 5000}
  }) {
    id
    name
    note
    image 
  }
}
```

### Look for proposals from a specific agent

```graphql
{
  proposalsFiltered(agent: [ID]) {
    id
    name
    note
    image
  }
}
```

### Look for proposals with a specific scope (eg. a community)

```graphql
{
  proposalsFiltered(inScopeOf: [ID]) {
    id
    name
    note
    image
  }
}
```

### Look for all proposals tagged with a specific category / taxonomy

```graphql
{
  proposalsFiltered(tagIds: [ID]) {
    id
    name
    note
    image
  }
}
```

### Look for all EconomicEvents with a specific scope

```graphql 
{
  economicEventsFiltered(in_scope_of: [ID!]) {
    id
    provider {
      id
      name
    }
    receiver {
      id
      name
    }
    action
  }
}
```

### Look for all EconomicEvents of a specific agent 

```graphql
{
  economicEventsFiltered(agent: ID) {
    id
    provider {
      id
      name
    }
    receiver {
      id
      name
    }
    action
  }
}
```

## Generate a material passport
**[Read more about this usecase](/docs/generate_a_material_passport)**

To generate a material passport, it is needed to create economic events, resources and processes that are bound each other.

Following some examples of data coming from economic resource, event and process queries

**EconomicResource**

```{
    "accountingQuantity": {
      "hasNumericalValue": 0.0478270231353376,
      "hasUnit": {
        "label": "kilo"
      }
    },
    "currentLocation": {
      "lat": -18.895467439976088,
      "long": 13.45323887068065,
      "name": "Streich"
    },
    "id": "01EVTV5QR62V7A489V2W84NJHT",
    "image": null,
    "name": "Streich",
    "note": "Dicta velit quo neque qui unde fuga non laboriosam! Aliquam eligendi ex autem ut ratione incidunt et maiores voluptas? Vitae et repellat exercitationem omnis quos eaque totam pariatur. Autem quam a officiis rerum fuga aspernatur.",
    "primaryAccountable": {
      "name": "Cruickshank-Hodkiewicz"
    }
  }```

**Economic Event**
```{
    "action": {
      "label": "transfer"
    },
    "id": "01EVTV5RCD4JTJDYX5HKERJ5KP",
    "note": "Earum placeat eveniet sint sint exercitationem ea? Sint libero perspiciatis ad et harum aliquid et minus. Natus reprehenderit asperiores sapiente quae.",
    "provider": {
      "id": "01EVTV5F0PHMH7R1J5A1QXEZM1",
      "name": "Cruickshank-Hodkiewicz"
    },
    "receiver": {
      "id": "01EVTV5F0PHMH7R1J5A1QXEZM1",
      "name": "Cruickshank-Hodkiewicz"
    },
    "resourceInventoriedAs": {
      "name": "Waters",
      "note": "Consequatur facilis dignissimos cum dolores dolorem qui facere numquam. Ea quia recusandae tempora modi facilis blanditiis dolores. Deserunt quia qui facere eius soluta vel quo itaque vitae. Nesciunt blanditiis ea nihil incidunt."
    },
    "resourceQuantity": {
      "hasNumericalValue": 0.5173676470814242,
      "hasUnit": {
        "label": "kilo"
      }
    }
  }```

**Process**

```{
  finished: false,
  id: "01EVTV5F0PHMH7R1J5A1QXEZM1",
  name: "A sample process",
  note: "Description of a sample process",
  inputs: [],
  outputs: []
}```


## Manage your inventory
**[Read more about this usecase](/docs/create_and_manage_inventory)**

### Filter resources by owner
```graphql
{
  economicResourcesFiltered(agent:[ID]) {
    name
    note
    id
    image
  	accountingQuantity {
      hasUnit {
        label
      }
      hasNumericalValue
    }
    currentLocation {
      name
      lat
      long
    }
    tags 
    
  }
}
```

### Filter resources by current location
```graphql
{
  economicResourcesFiltered(currentLocation:[ID]) {
    name
    note
    id
    image
  	accountingQuantity {
      hasUnit {
        label
      }
      hasNumericalValue
    }
    currentLocation {
      name
      lat
      long
    }
    tags 
    
  }
}
```

### Filter resources by tags
```graphql
{
  economicResourcesFiltered(tags:[ID]) {
    name
    note
    id
    image
  	accountingQuantity {
      hasUnit {
        label
      }
      hasNumericalValue
    }
    currentLocation {
      name
      lat
      long
    }
    tags 
  }
}
```

### Track back from an EconomicResource
Currently is only possible to go one level back in the chain. It will always return an EconomicEvent, when tracing back from an EconomicResource.

```graphql
{
  economicResource(id: "ID") {
    id
    trace {
      id
    }
  }
}
```

### Track back from an EconomicEvent
Currently is only possible to go one level back in the chain. Tracing back from an EconomicEvent, it may return a Process or an EconomicResource

```graphql
{
  economicEvent(id: "ID") {
    id
    trace {
      __typename
      ... on Process {
        id
      }
      ... on EconomicResource {
        id
      }
    }
  }
}
```


### Track back from a Process
Currently is only possible to go one level back in the chain. Tracing back from a Process, it will return an EconomicEvent

```graphql
{
  Process(id: "ID") {
    id
    trace {
      __typename
      id
    }
  }
}
```