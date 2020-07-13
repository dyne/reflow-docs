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
      <div className="left">
        <Block id="try">
          {[
            {
              content:
                'Economic activities need coordination. ReflowOS enhances coordination allowing users to create, join and moderate focus groups within the network.' +
                'Users can post their offers and needs in the whole network or in a specific group (that can represent a neighborhood, a community of intends, etc), have public discussions or group specific and so on.',
              image: `${baseUrl}img/pride.svg`,
              imageAlign: 'left',
              title: 'Create and manage groups, follow users and have meaningful discussions',
            },
          ]}
        </Block>
      </div>
    );

    const MaterialPassport = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/factory.svg`,
            imageAlign: 'left',
            title: 'Generate a resource material passport',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const EconomicNetwork = () => (
      <div className="left">
      <Block background="light">
        {[
          {
            content:
              'ReflowOS can be used for creating public networks, where users can freely create an account on existing nodes, or start their own and interact with the network. <br/> **[Read more about open networks](#)**. <br /> <br /> But ReflowOS can be used also to create private and permissioned networks, relying on **[DecodeOS](#)** to anonymize all the activities behind a TOR layer. <br /> **[Read more about private networks]()**',
            image: `${baseUrl}img/network.svg`,
            imageAlign: 'right',
            title: 'Create and join open or permissioned economic networks',
          },
        ]}
      </Block>
      </div>
    );

    const OffersNeeds = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/offers.svg`,
            imageAlign: 'right',
            title: 'Publish and match offers and needs',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block id="features" background="gray" layout="threeColumn">
        {[
          {
            content: 'ReflowOS infrastructure leverages on research and work in multiple successfull EU projects and rely on high standard encryption protocols. Smart contracts are based on **[zenroom](https://zenroom.org)** VM, permissioned networks are based upon **[DecodeOS](https://decodeos.dyne.org/)**',
            title: 'Encrypted',
          },
          {
            content: 'Stakeholders will engage in conversations and perform economic activities through the **[ActivityPub](https://www.w3.org/TR/activitypub/)** protocol and the **[valueflows](https://valueflo.ws)** ontology. Such protocol allows to keep the ownership of its own data, meanwhile fostering interoperability with the rest of the network.',
            title: 'Federated',
          },
          {
            content: 'The ReflowOS is built to be remixed and extended based on the diverse and evolving communities needs. Confident that does not exist 2 communities with the same needs, **[CommonsPub](https://commonspub.org)** allows to create new functionalities by plugging new code easily',
            title: 'Extendable',
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
        <div className="blm">Black Lives Matter. <a href="#">Support the Equal Justice Initiative</a></div>
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
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
