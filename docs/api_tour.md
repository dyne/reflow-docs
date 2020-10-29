---
id: api_tour
title: API Tour
sidebar_label: 📕 API Tour
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
      email: String!
      extraInfo: Json
      location: String
      name: String!
      password: String!
      preferredUsername: String!
      summary: String
      wantsEmailDigest: Boolean!
      wantsNotifications: Boolean!
      website: String
    }) {
    me {
      email
      isConfirmed
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

### Display the user profile
The current logged user. Contains more information than just the `user` type

```graphql
me {
  email
  isConfirmed
  isInstanceAdmin
  user {
    icon
    image
    name
    preferredUsername
  }
}
```

### Display any user profile

```graphql
user(username: String!) {
  id
  name
  preferredUsername
  image
  icon
}
```


#### Display the instance timeline (paginated)
Contains all activities from the instance. 

```graphql
instance {
  description
  outbox(after: [id], before: [id], limit: Number) {
    edges {
      user {
        icon
        name
        image
      }
      verb
      context {
        ... # it can be an intent, an economic event, or a social activity
      }
    }
    totalCount
    pageInfo
  }
}
```

#### Display a user's activities (paginated)
```graphql
me {
  email
  isConfirmed
  isInstanceAdmin
  user {
    icon
    image
    name
    outbox(after: [id], before: [id], limit: Number) {
      edges {
        user {
          icon
          name
          image
        }
        verb
        context {
          ... # it can be an intent, an economic event, or a social activity
        }
      }
      totalCount
      pageInfo
    }
  }
}
```

#### Display a user's feed (paginated)
Contains activities from people, agents or groups the user is following.

```graphql
user(id: String!) {
    icon
    image
    name
    inbox(after: [id], before: [id], limit: Number) {
      edges {
        user {
          icon
          name
          image
        }
        verb
        context {
          ... # it can be an intent, an economic event, or a social activity
        }
      }
      totalCount
      pageInfo
    }
  }
}
```

### Display all users (paginated) 

```graphql
users(after: after, limit: limit) {
  edges:{
    id
    name
    preferredUsername
    image
    icon
  }
}
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

### Create an offer

```graphql
mutation {
  createOffer(intent: {
    action:String!,
    name: String,
    note: String
    atLocation: ID,
    availableQuantity: {hasUnit: String!, hasNumericalValue: String!},
    due: DateTime,
    image: {url: String},
    tags: [ID!]
  }
  isProposal: true
  ) {
    intent {
      id
      name
      note
    }
  }
}
```

### Create a need
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
  isProposal: true
  ) {
    intent {
      id
      name
      note
    }
  }
}
```

### Create a proposal

```graphql
mutation {
  createProposal(
    proposal: {
      name: String,
      note: String,
      eligibleLocation: ID
    }
  ) {
    proposal {
      name,
      note
      publishes {
        id
        reciprocal
        publishes {
          name
          note
          id
        }
      }
    }
  }
}
```

### Propose an offer or a need as part of a proposal

- Include an existing intent as part of a proposal. @param publishedIn the (Proposal) to include the intent in @param publishes the (Intent) to include as part of the proposa


```graphql
mutation {
  proposeIntent(
		publishes: ID! 
    publishes: ID!
    reciprocal: Boolean
  ) {
		proposedIntent {
      id
      publishes {
        name
        note
      }
      publishedIn {
        name
        eligibleLocation {
          name
        }
      }
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
      note:String,
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


### Create an economic event

```graphql
mutation {
  createEconomicEvent(
		event: {
      note:String,
      action: ID!,
      provider: ID!,
      receiver: ID!,
      resourceInventoriedAs: ID,
      resourceQuantity: {hasUnit: ID!, hasNumericalValue: Float!}
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
  	}
  }
}
```


#### Phase 2. Search and filter aggregated data 






## Generate a material passport


## Manage your inventory


#### Start a discussion 
```graphql
mutation {
  createThread(
    contextId: String
    comment: {
      content: String!
    }
  }) {
    id
    creator {
      name
      id
      likerCount
      ...
    }
    name
    content
    ...
  }
}
```






