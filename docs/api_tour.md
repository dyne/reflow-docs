---
id: api_tour
title: API
sidebar_label: 📕 API
---


## API Tour
Below a series of sampe queries and mutations that will be needed to perform the most common tasks available within the network.
API are designed and implemented following the use cases and requirements collected in the deliverable 2.1.



# Social features

### Queries
#### List all users (paginated) 
```graphql
users(after: after, limit: limit) {
  edges:{
    id
    name
    preferredUsername
    image
    icon
    ...
  }
}
```
#### List all groups (paginated)
```graphql
communities(after: [], limit: ) {
  edges:{
    id
    name
    note
    image
    members {
      totalCount
      edges {
        id
        name
        preferredUsername
        ...
      }
    }
    ...
  }
}
```
#### Display a user by username/id
```graphql
user(username: String!) {
  id
    name
    preferredUsername
    image
    icon
    ...
}
```

#### Display logged user details
The current user. Contains more information than just the user type

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
    communities
  }
}
```

#### Display the instance timeline (paginated)
```graphql
instance {
  description
  ...
  outbox(after: [id], before: [id], limit: Number) {
    edges {
      user {
        icon
        name
        image
        ...
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

#### Display federated timeline (paginated)
```graphql
me {
  email
  isConfirmed
  isInstanceAdmin
  user {
    icon
    image
    name
    ...
    outbox(after: [id], before: [id], limit: Number) {
      edges {
        user {
          icon
          name
          image
          ...
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

#### Display user timeline (paginated)
```graphql
user {
    icon
    image
    name
    ...
    inbox(after: [id], before: [id], limit: Number) {
      edges {
        user {
          icon
          name
          image
          ...
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

#### Admin: display all flags
#### List all taxonomy tags (paginated)
#### List all geolocations (paginated)



### Mutation
#### Login
```graphql
mutation {
    createSession(email: String!, password: String!) {
      token # Use the token to activate a session with the server
    }
}
```
#### Signup
```graphql
mutation {
  createUser(
    icon {url: String}, 
    image {url: String}, 
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
#### Create a new group
```graphql
mutation {
  createCommunity(
    icon {url: String}, 
    image {url: String}, 
    community: {
      extraInfo: Json
      name: String!
      preferredUsername: String!
      summary: String
    }) {
    community {
      name
      summary
      ...
    }
  }
}
```

#### Report a group
```graphql
mutation {
  createFlag(
    contextId: String!, message: String!
    }) {
    id
    creator {
      name
      id
      ...
    }
    isResolved
    message
    ...
  }
}
```
#### Join a group
```graphql
mutation {
  createFollow(
    contextId: String!
    }) {
    id
    creator {
      name
      id
      ...
    }
    context {
      # the group followed
    }
    ...
  }
}
```

#### Edit a group

```graphql
mutation {
  updateCommunity(
    communitytId: String!
    icon {url: String}, 
    image {url: String}, 
    community: {
      extraInfo: Json
      name: String!
      summary: String
    }
    }) {
    id
    creator {
      name
      id
      ...
    }
    context {
      # the group followed
    }
    ...
  }
}
```

#### Leave a group

#### Create a new organisation
#### Request to join an organisation
#### Edit an organisation
#### Leave an organisation
#### Invite an agent to an organisation
#### Remove an agent from an organisation


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

#### Reply to a discussion



#### Edit user profile
#### Like
#### Unlike
#### Block a user/agent/actor
#### Flag/report anything
#### Follow/unfollow a user
#### Follow/unfollow a taxonomy (optional)
#### Follow/unfollow an intent (optional)
#### Follow/unfollow a thread (optional)
#### Admin: invite users
#### Admin: delete flagged content

### Queries
#### List all users (paginated) 
```graphql
users(after: after, limit: limit) {
  edges:{
    id
    name
    ...
  }
}
```
#### List all groups (paginated)
#### Display a user by username/id
#### Display logged user details
#### Display instance timeline (paginated)
#### Display federated timeline (paginated)
#### Display user timeline (paginated)
#### Admin: display all flags
#### List all taxonomy tags (paginated)
#### List all geolocations (paginated)



## Setup "knowledge" information

#### 1. Create unit 
- Create a new unit, like: meter, m
```graphql
mutation {
  createUnit(unit:{label:"meter", symbol:"m"}) {
      unit {
        id
        label
        symbol
      }
  }
}
```
####  Edit unit 
- edit an existing unit
```graphql
mutation {
  updateUnit(unit: {
  id: "01EED499JV5VFXK1Y2QPN9RA05", 
  label: "centimeter", 
  symbol: "cm"
 }) {
  unit {
    id
    label
    symbol
    }
  }
}
```

#### 3. Delete unit
- Delete an existing unit
```graphql
mutation {
  deleteUnit(id: "01EED499JV5VFXK1Y2QPN9RA05") 
}
``` 

## Users can publish offers & needs

### Mutations

#### Create a new intent
- The user can publish with/without context (eg. in a group or only on their profile), an offer or a need for a resource/skill. 
```graphql
mutation { 
createIntent (
intent:{
  action: "produce"
  name:"test-intent", 
  note: "test note",
  atLocation: "location_id",
  resourceQuantity: {
    hasNumericValue: 1.0,
    hasUnit: "unit_id"
  },
  due: "2020-08-18T8:00:00-5:00",
  finished: false,
  image: "http://example.images.com/my-image.png",
  provider: "provider_id",Create an agreement between existing offers and need
  receiver: "receiver_id",
  resourceConformsTo: "resourceConformsTo_id",
 })
 {
  intent {
    id
    action
    name
    note
    atLocation
    resourceQuantity {
      hasUnit
      hasNumericValue
    }
    due
    finished
    image
    resourceInventoriedAs {
      id
    }
    resourceConformsTo {
      id
    }
    provider {
      id
    }
  }
}}
```

#### 2. Edit the intent
- The user can update an existing offers/needs editing specific fields

```graphql
mutation {
  updateIntent(intent: {
    id:"01EED1CHW4GTXB05GR6WGRFD4V", 
    name:"new intent",
  	finished: true,
    due:"2020-08-18T8:00:00-5:00",
    note:"new note",
    image: "http://example.images.com/my-image.png",
    provider:"provider_id_2",
    receiver:"receiver_id_2",
    resourceInventoriedAs: "resource_id"
  }) {
    intent {
      id
      name
    }
  }
}
```

#### Delete the intent
- Delete the intent by its id
```graphql
deleteIntent(id: "intent_id") -> true
```

#### Match offer/need
- Create an agreement between existing offers and needs



#### Start a thread on an intent
- Create a new discussion over a thread, add comment to an existing discussion 


#### Create geolocation
- Add a new spatial thing
```graphql
mutation {
 createSpatialThing(spatialThing:{
  name:"Willy Street Coop", 
  note: "test note", 
  lat: 45.44, 
  long: 83.666, 
  alt: 423,
  mappableAddress: "1221 Williamson St., Madison, WI 53703"
  }){
  spatialThing {
    id
    note
    name
    lat
    long
    alt
    mappableAddress
  }
}}
```
- Add a new spatial thing with geolocation
```graphql
mutation {
 createSpatialThing(spatialThing:{
  name: "Willy Street Coop", 
  note: "test note", 
  mappableAddress: "1221 Williamson St., Madison, WI 53703"
  }){
  spatialThing {
    id
    note
    name
    lat
    long
    alt
    mappableAddress
  }
}}
```

#### Edit geolocation
- Edit an existing spatialThing
```graphql
mutation {
 updateSpatialThing(spatialThing:{
  name: "Willy open Coop", 
  note: "updated test note", 
  mappableAddress: "1221 Williamson St., Madison, WI 53703"
  }){
  spatialThing {
    id
    note
    name
    lat
    long
    alt
    mappableAddress
  }
}}
```
#### Delete geolocation
- Delete an existing spatialThing
```graphql
mutation {
 deleteSpatialThing(id: "spatialThing_id")
}
```

#### Create taxonomy tag
#### Edit taxonomy tag
#### Delete taxonomy tag


### Queries

#### List all offers (paginated)
#### List all needs (paginated)
####  List a specific offer by id 
```graphql
intent(id: "intent_id") {...}
```
####  List a specific need by id
```graphql
intent(id: "intent_id") {...}
```
#### Filter offers by taxonomy
#### Filter offers by geolocation
#### Filter needs by taxonomy
#### Filter needs by geolocation
#### Filter needs/offers by distance from a geolocation
#### List all units (paginated)
#### List all measures (paginated)
#### List all geolocations (paginated)
#### List all taxonomies (paginated)
#### Get a specific unit by id
#### Get a specific geolocation by id
#### Get a specific taxonomy tag by id

# Track Materials

### Mutations
#### Create a new economic event
```graphql
mutation {
  createEconomicEvent(event: {
   action:"produce",
   atLocation:"location_id",
  hasPointInTime:"2020-08-18T8:00:00-5:00",
    note:"test event",
    provider:"provider_id",
    receiver:"receiver_id",
    resourceClassifiedAs:["taxonomies_id"],
    resourceInventoriedAs:"resource_id",
    resourceConformsTo: "resourceConformsTo_id",
    resourceQuantity: {
      hasUnit: "unit_id",
      hasNumericalValue: 2.0
    }
    toResourceInventoriedAs: "toResourceInventoriedAs_id" 
  },
  newInventoriedResource: {
    currentLocation: "location_id",
    image:"http://example.images.com/my-image.png",
    name:"resource name",
    note: "resource note"
  }) {
   economicEvent {
    id
   }
  }
}
```

### Edit an economic event
it seems is not possible to edit lot of fields, why?
```graphql
mutation {
  updateEconomicEvent(event: {
    id:"id",
    note:"test event"
  }) {
   economicEvent {
    id
  }
  }
}
```

### Delete an economic event
```graphql
mutation {
  deleteEconomicEvent(id:"id")
}
```

### Create a new process
```
mutation {
  createProcess(process: {
    name: "process_name",
    note:"process_note",
    hasEnd: "datetime",
    classifiedAs: ["hashtag"],
    finished:false,
  }) {
    process {
      id
    }
  }
}
```


### Update a resource

```graphql
mutation {
  updateEconomicResource(resource: {
    id:"id",
    note:"updated"
  }) {
   economicResource
    id
   }
  }
}
```

### Queries
#### List all available resources (paginated)
#### List all resources that belongs to an agent (intentory)
#### List a specific resource by its id
#### Filter resources by geolocation (paginated)
#### Filter resources by hashtag (paginated)
#### Trace back all economic activities related to a specific resource (material passport)



# Integrations

## Zenroom
### Encryption
- [ ] Encrypt discussion
- [ ] Smart contract for offers/needs matching (?)
- [ ] Smart contract for generating a safe material passport
- [ ] ACL ?


## DecodeOS
- [ ] Deploy an autonomous network
- [ ] Federate under tor bridge
- [ ] Invite new users to the network






