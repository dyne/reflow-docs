import Layout from "@theme/Layout";
import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';




const Test = () => (
<div className="relative bg-white pt-16 overflow-hidden">
  <div className="relative">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Create and join economic networks</h2>
            <p className="mt-4 text-lg text-gray-500">Create public networks, where users can freely sign up to existing nodes, or start their own and interact with the network. 
            <br /> You can also create private and permissioned networks, relying on DecodeOS to anonymize all the activities behind a TOR layer.</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="pl-4 sm:pl-6  lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img className="" src="/img/network.svg" alt="Networks" />
        </div>
      </div>
    </div>
  </div>
  <div className="mt-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Create and manage groups, follow users and have meaningful discussions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
            Economic activities require coordination. ReflowOS enhances coordination by enabling users to create, join and moderate sub-groups within the network. Users can start discussions or post their offers and needs to the whole network or within a specific group (that can represent a neighborhood, a community of intents, etc).            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img src="img/pride.svg" alt="Customer profile user interface" />
        </div>
      </div>
    </div>
  </div>
  <div className="mt-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Publish and match needs and offers</h2>
            <p className="mt-4 text-lg text-gray-500">Needs and offers are a core aspect of any economic networks. They play a set of important roles such as connecting different stakeholders and sparking new economic relationships.
              But they also act as a network feedback system, signaling the sentiment of materials, services and skills most requested by the network participants and the abundance or availability of others.
              A participant can search for a specific tool, raw material, service or skill available in the network.</p>
            </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="pl-4 sm:pl-6  lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img className="" src="img/offers.svg" alt="Networks" />
        </div>
      </div>
    </div>
  </div>
  <div className="mt-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Generate a resource material passport
            </h2>
            <p className="mt-4 text-lg text-gray-500">
            Materials can be exchanged across the network, they can be transformed and combined with other materials to create new resources. Tracking any economic activity that happens to a resource will allow participants to take more informed and conscious decisions. It will empower the network, providing meaningful information about its supply chains and how to optimise them.</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img src="img/factory.svg" alt="Customer profile user interface" />
        </div>
      </div>
    </div>
  </div>
</div>

)


// const Social = ({baseUrl}) => (
//   <div className="right">
//     <div id="try">
//       {[
//         {
//           content:
//             'Economic activities require coordination. ReflowOS enhances coordination by enabling users to create, join and moderate sub-groups within the network. ' +
//             'Users can start discussions or post their offers and needs to the whole network or within a specific group (that can represent a neighborhood, a community of intents, etc). ',
//           image: `${baseUrl}img/pride.svg`,
//           imageAlign: 'left',
//           title: 'Create and manage groups, follow users and have meaningful discussions',
//         },
//       ]}
//     </div>
//   </div>
// );

// const MaterialPassport = ({baseUrl}) => (
  
//   <div className="right">
//     <div id="try">
//     {[
//       {
//         content:
//           'Materials can be exchanged across the network, they can be transformed and combined with other materials to create new resources. ' +
//           'Tracking any economic activity that happens to a resource will allow participants to take more informed and conscious decisions. ' +
//           'It will empower the network, providing meaningful information about its supply chains and how to optimise them. ',
//         image: `${baseUrl}img/factory.svg`,
//         imageAlign: 'left',
//         title: 'Generate a resource material passport',
//       },
//     ]}
//   </div>
//   </div>
  
// );

const Cta = () => (
<div className="bg-indigo-100">
  <div className="max-w-7xl  mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">Ready to dive in?</span>
    </h2>
    <div className="mt-8 flex">
      <div className="inline-flex rounded-md shadow">
        <a href="/docs/what_is_reflowOS" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Get started
        </a>
      </div>
      <div className="ml-3 inline-flex">
        <a href="https://github.com/dyne/reflow-os" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
          Learn more
        </a>
      </div>
    </div>
  </div>
</div>

);

// const EconomicNetwork = ({baseUrl}) => (
//   <div className="left">
//   <div background="light">
//     {[
//       {
//         content:
//           'Create <strong>public networks</strong>, where users can freely sign up to existing nodes, or start their own and interact with the network. <br/>  <br />You can also create <strong>private and permissioned networks</strong>, relying on **[DecodeOS](/docs/decodeOS)** to anonymize all the activities behind a TOR layer.',
//         image: `${baseUrl}img/network.svg`,
//         imageAlign: 'right',
//         title: 'Create and join economic networks',
//       },
//     ]}
//   </div>
//   </div>
// );

// const OffersNeeds = ({baseUrl}) => (
//   <div className="left">
//     <div background="light">
//     {[
//       {
//         content:
//           'Needs and offers are a core aspect of any economic networks. They play a set of important roles such as connecting different stakeholders and sparking new economic relationships.<br />' +
//           'But they also act as a network feedback system, signaling the sentiment of materials, services and skills most requested by the network participants and the abundance or availability of others.<br />'+
//           'A participant can search for a specific tool, raw material, service or skill available in the network. <p>'+
//           'To put the focus on circular economies, as opposed to most of the platforms, ReflowOS is driven by needs rather then offers, incentivising participants to produce and exchange materials and services based on existing and explicit needs, instead of pushing towards consumption based on available offers.',
//         image: `${baseUrl}img/offers.svg`,
//         imageAlign: 'right',
//         title: 'Publish and match needs and offers',
//       },
//     ]}
//   </div>
    
//   </div>
// );

const Features = () => (
<div className="py-12 bg-white">
  <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">A better way to send money.</h2>
    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <dt>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          </div>
          <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Encrypted</p>
        </dt>
        <dd className="mt-2 text-base text-gray-500">
        ReflowOS infrastructure leverages research from successful EU projects and relies on standard encryption protocols. Smart contracts are based on Zenroom VM. Permissioned networks are created on top of DecodeOS.
        </dd>
      </div>

      <div>
        <dt>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          </div>
          <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Federated</p>
        </dt>
        <dd className="mt-2 text-base text-gray-500">
          Stakeholders will engage in conversations and perform economic activities through the ActivityPub protocol and the ValueFlows vocabulary. Such protocols enable users to retain control of their data while fostering interoperability with the rest of the Reflow network and with other networks.
        </dd>
      </div>

      <div>
        <dt>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          </div>
          <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Extensible</p>
        </dt>
        <dd className="mt-2 text-base text-gray-500">
        ReflowOS is built to be remixed and extended based on diverse and evolving needs. Knowing that each community has different needs, ZenPub can be easily customised or extended with new functionality.
        </dd>
      </div>
    </dl>
  </div>
</div>

  // <div id="features" background="gray" layout="threeColumn">
  //   {[
  //     {
  //       content: 'ReflowOS infrastructure leverages research from successful EU projects and relies on standard encryption protocols. Smart contracts are based on **[Zenroom](/docs/ZenRoom)** VM. Permissioned networks are created on top of **[DecodeOS](/docs/decodeOS)**.',
  //       title: 'Encrypted',
  //     },
  //     {
  //       content: 'Stakeholders will engage in conversations and perform economic activities through the **[ActivityPub](/docs/federation)** protocol and the **[ValueFlows](/docs/valueflows)** vocabulary. Such protocols enable users to retain control of their data while fostering interoperability with the rest of the Reflow network and with other networks.',
  //       title: 'Federated',
  //     },
  //     {
  //       content: 'ReflowOS is built to be remixed and extended based on diverse and evolving needs. Knowing that each community has different needs, **[ZenPub](/docs/ZenPub)** can be easily customised or extended with new functionality.',
  //       title: 'Extensible',
  //     }
  //   ]}
  // </div>
);


const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-100">
            ReflowOS
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {props.siteConfig.tagline}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="/docs/what_is_reflowOS" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="https://github.com/dyne/reflow-os" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Github
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);



const Index = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <SplashContainer siteConfig={siteConfig} />
      <div className="mainContainer">
        <div className="left">
          <Features baseUrl={siteConfig.baseUrl} />
        </div>
        <Test />
        {/* <EconomicNetwork baseUrl={siteConfig.baseUrl} />
        <Social baseUrl={siteConfig.baseUrl} />
        <OffersNeeds baseUrl={siteConfig.baseUrl} />
        <MaterialPassport baseUrl={siteConfig.baseUrl} /> */}
        <Cta  baseUrl={siteConfig.baseUrl} />
      </div>
    </Layout>
  );
}

export default Index;
