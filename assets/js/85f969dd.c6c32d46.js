"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[241],{3905:(n,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var t=a(7294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var s=t.createContext({}),c=function(n){var e=t.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},u=function(n){var e=c(n.components);return t.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?t.createElement(g,i(i({ref:e},u),{},{components:a})):t.createElement(g,i({ref:e},u))}));function d(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5721:(n,e,a)=>{a.r(e),a.d(e,{default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"api_tour",title:"API Tour",sidebar_label:"\ud83d\udcd5 API Tour"},s={unversionedId:"api_tour",id:"api_tour",isDocsHomePage:!1,title:"API Tour",description:"Here is a series of sample queries and mutations for the ReflowOS client API (which uses GraphQL) that will be needed to achieve the use cases proposed in this manual.",source:"@site/docs/api_tour.md",sourceDirName:".",slug:"/api_tour",permalink:"/docs/api_tour",version:"current",lastUpdatedBy:"Puria Nafisi Azizi",lastUpdatedAt:1650615525,formattedLastUpdatedAt:"4/22/2022",sidebar_label:"\ud83d\udcd5 API Tour",frontMatter:{id:"api_tour",title:"API Tour",sidebar_label:"\ud83d\udcd5 API Tour"},sidebar:"docs",previous:{title:"ValueFlows",permalink:"/docs/valueflows"},next:{title:"Maintenance",permalink:"/docs/maintenance"}},c=[{value:"Authentication",id:"authentication",children:[{value:"Register a new user",id:"register-a-new-user",children:[]},{value:"Confirm email",id:"confirm-email",children:[]},{value:"Login",id:"login",children:[]},{value:"Get the current user details",id:"get-the-current-user-details",children:[]},{value:"Display currently logged in agent profile",id:"display-currently-logged-in-agent-profile",children:[]},{value:"Display any agent profile",id:"display-any-agent-profile",children:[]}]},{value:"Define the network sentiment",id:"define-the-network-sentiment",children:[{value:"Create a location",id:"create-a-location",children:[]},{value:"Create a unit",id:"create-a-unit",children:[]},{value:"Record an offer (inventory entry)",id:"record-an-offer-inventory-entry",children:[]},{value:"Record a need (wishlist entry)",id:"record-a-need-wishlist-entry",children:[]},{value:"Publish an offer or a need (proposal)",id:"publish-an-offer-or-a-need-proposal",children:[]},{value:"Publish a proposal (by itself)",id:"publish-a-proposal-by-itself",children:[]},{value:"Create a process",id:"create-a-process",children:[]},{value:"Conduct an economic event that results in a completely new resource",id:"conduct-an-economic-event-that-results-in-a-completely-new-resource",children:[]},{value:"Conduct an economic event on an existing resource",id:"conduct-an-economic-event-on-an-existing-resource",children:[]},{value:"Conduct an economic event between an existing resource and a new resource",id:"conduct-an-economic-event-between-an-existing-resource-and-a-new-resource",children:[]},{value:"Look for proposals at a specific place",id:"look-for-proposals-at-a-specific-place",children:[]},{value:"Look for proposals near a specific location",id:"look-for-proposals-near-a-specific-location",children:[]},{value:"Look for proposals from a specific agent",id:"look-for-proposals-from-a-specific-agent",children:[]},{value:"Look for proposals with a specific scope (eg. a community)",id:"look-for-proposals-with-a-specific-scope-eg-a-community",children:[]},{value:"Look for all proposals tagged with a specific category / taxonomy",id:"look-for-all-proposals-tagged-with-a-specific-category--taxonomy",children:[]},{value:"Look for all EconomicEvents within a specific scope",id:"look-for-all-economicevents-within-a-specific-scope",children:[]},{value:"Look for all EconomicEvents of a specific agent",id:"look-for-all-economicevents-of-a-specific-agent",children:[]}]},{value:"Generate a material passport",id:"generate-a-material-passport",children:[{value:"Filter resources by current location",id:"filter-resources-by-current-location",children:[]},{value:"Filter resources by tags",id:"filter-resources-by-tags",children:[]},{value:"Track back from an EconomicResource",id:"track-back-from-an-economicresource",children:[]},{value:"Track back from an EconomicEvent",id:"track-back-from-an-economicevent",children:[]},{value:"Track back from a Process",id:"track-back-from-a-process",children:[]}]}],u={toc:c};function p(n){var e=n.components,a=(0,r.Z)(n,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a series of sample queries and mutations for the ",(0,o.kt)("a",{parentName:"p",href:"./ReflowOS-server"},"ReflowOS")," client API (which uses ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),") that will be needed to achieve the use cases proposed in this manual."),(0,o.kt)("p",null,"The API is flexible enough to satisfy a wider range of use cases and scenario, according to the stakeholders needs.\nThink of the following ones as a starting point to help shape your apps and ideas."),(0,o.kt)("p",null,"You can also refer to the ",(0,o.kt)("a",{parentName:"p",href:"/api/index"},"full auto-generated API documentation"),". "),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("h3",{id:"register-a-new-user"},"Register a new user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# TODO UPDATE for BONFIRE\nmutation {\n  createUser(\n    icon: {url: String}, \n    image: {url: String}, \n    user: {\n      email: String!,\n      extraInfo: Json,\n      location: String,\n      name: String!,\n      password: String!,\n      preferredUsername: String!,\n      summary: String,\n      wantsEmailDigest: Boolean!,\n      wantsNotifications: Boolean!,\n      website: String\n    }) {\n      email\n      isConfirmed\n      user {\n        preferredUsername\n        displayUsername\n        canonicalUrl\n        ...\n      }\n  }\n}\n")),(0,o.kt)("h3",{id:"confirm-email"},"Confirm email"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  confirmEmail(token: String) {\n    me {\n      isConfirmed\n    }\n    token\n  }\n}\n")),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    createSession(email: String!, password: String!) {\n      token # Use the token to activate a session with the server\n    }\n}\n")),(0,o.kt)("h3",{id:"get-the-current-user-details"},"Get the current user details"),(0,o.kt)("p",null,"The current logged in account and user. Contains different fields (including private information) than querying for myAgent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{me {\n  email\n  isConfirmed\n  isInstanceAdmin\n  user {\n    icon\n    image\n    name\n    preferredUsername\n  }\n}}\n")),(0,o.kt)("h3",{id:"display-currently-logged-in-agent-profile"},"Display currently logged in agent profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"}," {myAgent {\n  id\n  name\n  displayUsername\n  canonicalUrl\n  image\n  primaryLocation {\n    name\n    lat\n    long\n  }\n  intents {\n    name\n  }\n  proposals {\n    name\n  }\n  inventoriedEconomicResources {\n    name\n  }\n  economic_events {\n    name\n  }\n}}\n")),(0,o.kt)("h3",{id:"display-any-agent-profile"},"Display any agent profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"}," {agent(id: ID!) {\n  id\n  name\n  displayUsername\n  canonicalUrl\n  image\n  primaryLocation {\n    name\n    lat\n    long\n  }\n  intents {\n    name\n  }\n  proposals {\n    name\n  }\n  inventoriedEconomicResources {\n    name\n  }\n  economic_events {\n    name\n  }\n}}\n")),(0,o.kt)("h4",{id:"display-the-activities-on-the-local-instance-paginated"},"Display the activities on the local instance (paginated)"),(0,o.kt)("p",null,"Contains all activities from the instance. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{instance {\n  description\n  outbox(after: [id], before: [id], limit: Number) { # <- pagination\n    edges {\n      user {\n        icon {\n          url\n        }\n        name\n        image {\n          url\n        }\n      }\n      verb\n      context {\n        # it can be an intent, an economic event, a social activity, etc\n        __typename\n        ...on Intent {\n          name\n          canonicalUrl\n        }\n         ...on Comment {\n          content\n        }\n      }\n    }\n    totalCount\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}}\n")),(0,o.kt)("h4",{id:"display-a-users-activities-paginated"},"Display a user's activities (paginated)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{user(id: String!) {\n    outbox(after: [id], before: [id], limit: Number) {\n      edges {\n        user {\n          icon\n          name\n          image\n        }\n        verb\n        context {\n          __typename\n          ...on Intent {\n          name\n          canonicalUrl\n        }\n         ...on Comment {\n          content\n        }\n        }\n      }\n      totalCount\n      pageInfo\n    }\n  }\n}\n")),(0,o.kt)("h4",{id:"display-current-users-feed-paginated"},"Display current user's feed (paginated)"),(0,o.kt)("p",null,"Contains activities from people, agents or groups the current user is following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{me {\nuser(id: String!) {\n    inbox(after: [id], before: [id], limit: Number) {\n      edges {\n        user {\n          icon\n          name\n          image\n        }\n        verb\n        context {\n          __typename\n          ...on Intent {\n          name\n          canonicalUrl\n        }\n         ...on Comment {\n          content\n        }\n        }\n      }\n      totalCount\n      pageInfo\n    }\n  }\n}}\n")),(0,o.kt)("h4",{id:"display-all-users-paginated"},"Display all users (paginated)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{peoplePages(limit: 10) {\n  edges {\n    id\n    name\n    displayUsername\n    image\n    canonicalUrl\n  }\n}}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{organizationsPages(limit: 10) {\n  edges {\n    id\n    name\n    displayUsername\n    image\n    canonicalUrl\n  }\n}}\n")),(0,o.kt)("h2",{id:"define-the-network-sentiment"},"Define the network sentiment"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/define_the_network_sentiment"},"Read more about this usecase"))),(0,o.kt)("h4",{id:"phase-1-populate-the-network-with-activities"},"Phase 1. Populate the network with activities"),(0,o.kt)("h3",{id:"create-a-location"},"Create a location"),(0,o.kt)("p",null,"Populate the network with a set of meaningful locations, so that they will be filterable and associated with specific events."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createSpatialThing(\n    spatialThing: {\n    alt: Float,\n    lat: Float,\n    long: Float,\n    mappableAddress: String,\n    name: String!,\n    note: String\n  }) {\n    spatialThing {\n      id\n      name\n      lat\n      long\n      long\n      mappableAddress\n      note\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"create-a-unit"},"Create a unit"),(0,o.kt)("p",null,"Create the units that will be used within the network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createUnit(\n    unit: {\n      label: String!,\n      symbol: String!\n    }\n  ) {\n    unit {\n      id\n      label\n      symbol\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"record-an-offer-inventory-entry"},"Record an offer (inventory entry)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createOffer(intent: {\n      action:String!,\n      name: String,\n      note: String\n      atLocation: ID,\n      availableQuantity: {hasUnit: ID!, hasNumericalValue: String!},\n      due: DateTime,\n      image: {url: String},\n      tags: [ID!]\n    }\n  ) {\n    intent {\n      id\n      name\n      note\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"record-a-need-wishlist-entry"},"Record a need (wishlist entry)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createNeed(intent: {\n    action:String!,\n    name: String,\n    note: String\n    atLocation: ID,\n    availableQuantity: {hasUnit: String!, hasNumericalValue: String!},\n    due: DateTime,\n    image: {url: String},\n    tags: [ID!]\n  }\n  ) {\n    intent {\n      id\n      name\n      note\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"publish-an-offer-or-a-need-proposal"},"Publish an offer or a need (proposal)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Publish a proposal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createProposal(\n    proposal: {\n      hasEnd: Date,\n      inScopeOf: ID,\n    }\n  ) {\n    proposal {\n      id\n    }\n  }\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Link the offer or need (intent) to the proposal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  proposeIntent(\n        publishes: ID!  # the (Intent) to include as part of the proposal \n    publishedIn: ID! # the (Proposal) to include the intent in \n    reciprocal: Boolean # true if this is a reciprocal intent of this proposal, not primary (eg. what amount of currency is offered in exchange for the proposed need)\n  ) {\n        proposedIntent {\n      id\n      publishes {\n        name\n      }\n      publishedIn {\n        name\n      }\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"publish-a-proposal-by-itself"},"Publish a proposal (by itself)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createProposal(\n    proposal: {\n      name: String,\n      note: String,\n      eligibleLocation: ID,\n      hasEnd: Date,\n      inScopeOf:ID\n    }\n  ) {\n    proposal {\n      id,\n      name,\n      note\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"create-a-process"},"Create a process"),(0,o.kt)("p",null,"An activity that changes inputs into outputs. It could transform or transport economic resource(s)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createProcess(\n        process: {\n      name: String,\n      note: String,\n      hasEnd: DateTime,\n      hasBeginning: DateTime\n    }\n  ) {\n        process {\n      id\n      name\n      note\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"conduct-an-economic-event-that-results-in-a-completely-new-resource"},"Conduct an economic event that results in a completely new resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createEconomicEvent(\n        event: {\n      note: String,\n      action: String!, # eg. produce or raise\n      provider: ID!,\n      receiver: ID!,\n      resourceQuantity: {hasUnit: ID!, hasNumericalValue: Float!}\n    },\n    newInventoriedResource: { # details of the new resource\n      name: String\n    }\n  ) {\n        economicEvent {\n      id\n      note\n      receiver {\n        id\n        name\n        note\n      }\n      provider {\n        id\n        name\n        note\n      }\n      resourceQuantity {\n        hasNumericalValue\n        hasUnit {\n          label\n          symbol\n        }\n      }\n      resourceInventoriedAs { # the newly created resource\n        id\n        name\n        onhandQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n        accountingQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"conduct-an-economic-event-on-an-existing-resource"},"Conduct an economic event on an existing resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createEconomicEvent(\n        event: {\n      note: String,\n      action: String!, # eg. consume\n      resourceInventoriedAs: ID!, # what resource to act on\n      provider: ID!,\n      receiver: ID!,\n      resourceQuantity: {hasUnit: ID!, hasNumericalValue: Float!} # how much of the resource is affected\n    }\n  ) {\n        economicEvent {\n      id\n      note\n      resourceInventoriedAs { # updated details of the existing resource\n        id\n        name\n        onhandQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n        accountingQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"conduct-an-economic-event-between-an-existing-resource-and-a-new-resource"},"Conduct an economic event between an existing resource and a new resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createEconomicEvent(\n        event: {\n      note: String,\n      action: String!, # eg. transfer\n      provider: ID!,\n      receiver: ID!,\n      resourceInventoriedAs: ID!, # what resource are we transfering\n      resourceQuantity: {hasUnit: ID!, hasNumericalValue: Float!} # how much of the resource to transfer\n    },\n    newInventoriedResource: { # details of the transfered (part of the) resource\n      name: String\n    }\n  ) {\n        economicEvent {\n      id\n      note\n      resourceInventoriedAs { # updated details of the existing resource\n        id\n        name\n        onhandQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n        accountingQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n      }\n    }\n    resourceInventoriedAs { # details of the new transfered resource\n        id\n        name\n        onhandQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n        accountingQuantity {\n          hasNumericalValue\n          hasUnit {\n            label\n            symbol\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("h4",{id:"start-a-discussion-upon-an-offer-or-a-need"},"Start a discussion upon an offer or a need"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createThread(\n    contextId: ID # what are we commenting on (eg a proposal) or in what context are we starting a discussion (eg a community)\n    comment: {\n      content: String!\n    }\n  }) {\n    id\n    creator {\n      name\n      id\n      likerCount\n    }\n    name\n    content\n  }\n}\n")),(0,o.kt)("h4",{id:"phase-2-search-and-filter-aggregated-data"},"Phase 2. Search and filter aggregated data"),(0,o.kt)("h3",{id:"look-for-proposals-at-a-specific-place"},"Look for proposals at a specific place"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  proposalsFiltered(atLocation: ID) {\n    id\n    name\n    note\n    image\n  }\n}\n")),(0,o.kt)("h3",{id:"look-for-proposals-near-a-specific-location"},"Look for proposals near a specific location"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  proposalsFiltered(geolocation: {\n    nearAddress: String, # eg. Place de la Republique, Paris, France\n    distance: {meters: 5000}\n  }) {\n    id\n    name\n    note\n    image \n  }\n}\n")),(0,o.kt)("h3",{id:"look-for-proposals-from-a-specific-agent"},"Look for proposals from a specific agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  proposalsFiltered(agent: [ID]) {\n    id\n    name\n    note\n    image\n  }\n}\n")),(0,o.kt)("h3",{id:"look-for-proposals-with-a-specific-scope-eg-a-community"},"Look for proposals with a specific scope (eg. a community)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  proposalsFiltered(inScopeOf: [ID]) {\n    id\n    name\n    note\n    image\n  }\n}\n")),(0,o.kt)("h3",{id:"look-for-all-proposals-tagged-with-a-specific-category--taxonomy"},"Look for all proposals tagged with a specific category / taxonomy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  proposalsFiltered(tagIds: [ID]) {\n    id\n    name\n    note\n    image\n  }\n}\n")),(0,o.kt)("h3",{id:"look-for-all-economicevents-within-a-specific-scope"},"Look for all EconomicEvents within a specific scope"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  economicEventsFiltered(inScopeOf: [ID!]) {\n    id\n    provider {\n      id\n      name\n    }\n    receiver {\n      id\n      name\n    }\n    action\n  }\n}\n")),(0,o.kt)("h3",{id:"look-for-all-economicevents-of-a-specific-agent"},"Look for all EconomicEvents of a specific agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  economicEventsFiltered(agent: ID) {\n    id\n    provider {\n      id\n      name\n    }\n    receiver {\n      id\n      name\n    }\n    action\n  }\n}\n")),(0,o.kt)("h2",{id:"generate-a-material-passport"},"Generate a material passport"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/generate_a_material_passport"},"Read more about this usecase"))),(0,o.kt)("p",null,"To generate a material passport, it is needed to create economic events, resources and processes that are bound each other."),(0,o.kt)("p",null,"Following some examples of data coming from economic resource, event and process queries"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EconomicResource")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{"},'    "accountingQuantity": {\n      "hasNumericalValue": 0.0478270231353376,\n      "hasUnit": {\n        "label": "kilo"\n      }\n    },\n    "currentLocation": {\n      "lat": -18.895467439976088,\n      "long": 13.45323887068065,\n      "name": "Streich"\n    },\n    "id": "01EVTV5QR62V7A489V2W84NJHT",\n    "image": null,\n    "name": "Streich",\n    "note": "Dicta velit quo neque qui unde fuga non laboriosam! Aliquam eligendi ex autem ut ratione incidunt et maiores voluptas? Vitae et repellat exercitationem omnis quos eaque totam pariatur. Autem quam a officiis rerum fuga aspernatur.",\n    "primaryAccountable": {\n      "name": "Cruickshank-Hodkiewicz"\n    }\n  }```\n\n**Economic Event**\n```{\n    "action": {\n      "label": "transfer"\n    },\n    "id": "01EVTV5RCD4JTJDYX5HKERJ5KP",\n    "note": "Earum placeat eveniet sint sint exercitationem ea? Sint libero perspiciatis ad et harum aliquid et minus. Natus reprehenderit asperiores sapiente quae.",\n    "provider": {\n      "id": "01EVTV5F0PHMH7R1J5A1QXEZM1",\n      "name": "Cruickshank-Hodkiewicz"\n    },\n    "receiver": {\n      "id": "01EVTV5F0PHMH7R1J5A1QXEZM1",\n      "name": "Cruickshank-Hodkiewicz"\n    },\n    "resourceInventoriedAs": {\n      "name": "Waters",\n      "note": "Consequatur facilis dignissimos cum dolores dolorem qui facere numquam. Ea quia recusandae tempora modi facilis blanditiis dolores. Deserunt quia qui facere eius soluta vel quo itaque vitae. Nesciunt blanditiis ea nihil incidunt."\n    },\n    "resourceQuantity": {\n      "hasNumericalValue": 0.5173676470814242,\n      "hasUnit": {\n        "label": "kilo"\n      }\n    }\n  }```\n\n**Process**\n\n```{\n  finished: false,\n  id: "01EVTV5F0PHMH7R1J5A1QXEZM1",\n  name: "A sample process",\n  note: "Description of a sample process",\n  inputs: [],\n  outputs: []\n}```\n\n\n## Manage your inventory\n**[Read more about this usecase](/docs/create_and_manage_inventory)**\n\n### Filter resources by owner\n```graphql\n{\n  economicResourcesFiltered(agent:[ID]) {\n    name\n    note\n    id\n    image\n    accountingQuantity {\n      hasUnit {\n        label\n      }\n      hasNumericalValue\n    }\n    currentLocation {\n      name\n      lat\n      long\n    }\n    tags \n    \n  }\n}\n')),(0,o.kt)("h3",{id:"filter-resources-by-current-location"},"Filter resources by current location"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  economicResourcesFiltered(currentLocation:[ID]) {\n    name\n    note\n    id\n    image\n    accountingQuantity {\n      hasUnit {\n        label\n      }\n      hasNumericalValue\n    }\n    currentLocation {\n      name\n      lat\n      long\n    }\n    tags \n    \n  }\n}\n")),(0,o.kt)("h3",{id:"filter-resources-by-tags"},"Filter resources by tags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  economicResourcesFiltered(tags:[ID]) {\n    name\n    note\n    id\n    image\n    accountingQuantity {\n      hasUnit {\n        label\n      }\n      hasNumericalValue\n    }\n    currentLocation {\n      name\n      lat\n      long\n    }\n    tags \n  }\n}\n")),(0,o.kt)("h3",{id:"track-back-from-an-economicresource"},"Track back from an EconomicResource"),(0,o.kt)("p",null,"Currently is only possible to go one level back in the chain. It will always return an EconomicEvent, when tracing back from an EconomicResource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  economicResource(id: "ID") {\n    id\n    trace {\n      id\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"track-back-from-an-economicevent"},"Track back from an EconomicEvent"),(0,o.kt)("p",null,"Currently is only possible to go one level back in the chain. Tracing back from an EconomicEvent, it may return a Process or an EconomicResource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  economicEvent(id: "ID") {\n    id\n    trace {\n      __typename\n      ... on Process {\n        id\n      }\n      ... on EconomicResource {\n        id\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"track-back-from-a-process"},"Track back from a Process"),(0,o.kt)("p",null,"Currently is only possible to go one level back in the chain. Tracing back from a Process, it will return an EconomicEvent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  Process(id: "ID") {\n    id\n    trace {\n      __typename\n      id\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);