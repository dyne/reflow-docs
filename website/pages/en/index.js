/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('what_is_reflowOS.html')}>Get started</Button>
            <Button href="https://github.com/dyne/zenpub">Github</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const Social = () => (
      <div className="right">
        <Block id="try">
          {[
            {
              content:
                'Economic activities require coordination. ReflowOS enhances coordination by enabling users to create, join and moderate sub-groups within the network.' +
                'Users can start discussions or post their offers and needs to the whole network or within a specific group (that can represent a neighborhood, a community of intents, etc).',
              image: `${baseUrl}img/pride.svg`,
              imageAlign: 'left',
              title: 'Create and manage groups, follow users and have meaningful discussions',
            },
          ]}
        </Block>
      </div>
    );

    const MaterialPassport = () => (
      
      <div className="right">
        <Block id="try">
        {[
          {
            content:
              'Materials can be exchanged across the network, they can be transformed and combined with other materials to create new resources.' +
              'Tracking any economic activity that happens to a resource will allow participants to take more informed and conscious decisions.' +
              'It will empower the network, providing meaningful information about its supply chains and how to optimise them. ',
            image: `${baseUrl}img/factory.svg`,
            imageAlign: 'left',
            title: 'Generate a resource material passport',
          },
        ]}
      </Block>
      </div>
      
    );

    const Cta = () => (
      <div className='cta'>

        < a className = 'button'
        href = "/docs/what_is_reflowOS.html" > Learn more< /a>
         <a className='button' href="https://github.com/dyne/zenpub">Github</a> 
      </div>
    );

    const EconomicNetwork = () => (
      <div className="left">
      <Block background="light">
        {[
          {
            content:
              'Create <strong>public networks</strong>, where users can freely sign up to existing nodes, or start their own and interact with the network. <br/> -> **[Read more about open networks](#)**. <br /> <br />You can also create <strong>private and permissioned networks</strong>, relying on **[DecodeOS](https://decodeos.dyne.org/)** to anonymize all the activities behind a TOR layer. <br /> -> **[Read more about private networks]()**',
            image: `${baseUrl}img/network.svg`,
            imageAlign: 'right',
            title: 'Create and join economic networks',
          },
        ]}
      </Block>
      </div>
    );

    const OffersNeeds = () => (
      <div className="left">
        <Block background="light">
        {[
          {
            content:
              'Needs and offers are a core aspect of any economic networks. They play a set of important roles such as connecting different stakeholders and sparking new economic relationships.<br />' +
              'But they also act as a network feedback system, signaling the sentiment of materials, services and skills most requested by the network participants and the abundance or availability of others.<br />'+
              'A participant can search for a specific tool, raw material, service or skill available in the network. <p>'+
              'To put the focus on circular economies, as opposed to most of the platforms, ReflowOS is driven by needs rather then offers, incentivising participants to produce and exchange materials and services based on existing and explicit needs, instead of pushing towards consumption based on available offers.',
            image: `${baseUrl}img/offers.svg`,
            imageAlign: 'right',
            title: 'Publish and match needs and offers',
          },
        ]}
      </Block>
        
      </div>
    );

    const Features = () => (
      <Block id="features" background="gray" layout="threeColumn">
        {[
          {
            content: 'ReflowOS infrastructure leverages research from successful EU projects and relies on standard encryption protocols. Smart contracts are based on **[Zenroom](https://zenroom.org)** VM. Permissioned networks are created on top of **[DecodeOS](https://decodeos.dyne.org/)**.',
            title: 'Encrypted',
          },
          {
            content: 'Stakeholders will engage in conversations and perform economic activities through the **[ActivityPub](https://activitypub.rocks/)** protocol and the **[ValueFlows](https://valueflo.ws)** ontology. Such protocols enable users to retain control of their data while fostering interoperability with the rest of the Reflow network and with other networks.',
            title: 'Federated',
          },
          {
            content: 'ReflowOS is built to be remixed and extended based on diverse and evolving needs. Knowing that each community has different needs, **[ZenPub](https://github.com/dyne/zenpub)** can be easily customised or extended with new functionality.',
            title: 'Extensible',
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <div className="left">
            <Features />
          </div>
          {/* <FeatureCallout /> */}
          <EconomicNetwork />
          <Social />
          <OffersNeeds />
          <MaterialPassport />
          <Cta />
        </div>
      </div>
    );
  }
}

module.exports = Index;
