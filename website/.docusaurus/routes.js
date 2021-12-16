
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','5c3'),
  
  routes: [
{
  path: '/docs/api_tour',
  component: ComponentCreator('/docs/api_tour','342'),
  exact: true,
},
{
  path: '/docs/architecture',
  component: ComponentCreator('/docs/architecture','54f'),
  exact: true,
},
{
  path: '/docs/bugtracker',
  component: ComponentCreator('/docs/bugtracker','7f8'),
  exact: true,
},
{
  path: '/docs/changelog',
  component: ComponentCreator('/docs/changelog','b16'),
  exact: true,
},
{
  path: '/docs/components',
  component: ComponentCreator('/docs/components','0b0'),
  exact: true,
},
{
  path: '/docs/create_and_manage_inventory',
  component: ComponentCreator('/docs/create_and_manage_inventory','cd3'),
  exact: true,
},
{
  path: '/docs/decodeOS',
  component: ComponentCreator('/docs/decodeOS','8ea'),
  exact: true,
},
{
  path: '/docs/define_the_network_sentiment',
  component: ComponentCreator('/docs/define_the_network_sentiment','c6f'),
  exact: true,
},
{
  path: '/docs/encryption',
  component: ComponentCreator('/docs/encryption','f14'),
  exact: true,
},
{
  path: '/docs/federation',
  component: ComponentCreator('/docs/federation','6e6'),
  exact: true,
},
{
  path: '/docs/first_steps',
  component: ComponentCreator('/docs/first_steps','98c'),
  exact: true,
},
{
  path: '/docs/generate_a_material_passport',
  component: ComponentCreator('/docs/generate_a_material_passport','044'),
  exact: true,
},
{
  path: '/docs/glossary',
  component: ComponentCreator('/docs/glossary','65f'),
  exact: true,
},
{
  path: '/docs/guides',
  component: ComponentCreator('/docs/guides','38b'),
  exact: true,
},
{
  path: '/docs/install_a_reflowOS_node',
  component: ComponentCreator('/docs/install_a_reflowOS_node','32e'),
  exact: true,
},
{
  path: '/docs/maintenance',
  component: ComponentCreator('/docs/maintenance','a97'),
  exact: true,
},
{
  path: '/docs/ReflowOS-client',
  component: ComponentCreator('/docs/ReflowOS-client','a3f'),
  exact: true,
},
{
  path: '/docs/ReflowOS-server',
  component: ComponentCreator('/docs/ReflowOS-server','898'),
  exact: true,
},
{
  path: '/docs/setup_a_network',
  component: ComponentCreator('/docs/setup_a_network','7d7'),
  exact: true,
},
{
  path: '/docs/system_requirements',
  component: ComponentCreator('/docs/system_requirements','cda'),
  exact: true,
},
{
  path: '/docs/usecases',
  component: ComponentCreator('/docs/usecases','2eb'),
  exact: true,
},
{
  path: '/docs/value_networks',
  component: ComponentCreator('/docs/value_networks','0cc'),
  exact: true,
},
{
  path: '/docs/valueflows',
  component: ComponentCreator('/docs/valueflows','0f5'),
  exact: true,
},
{
  path: '/docs/what_is_reflowOS',
  component: ComponentCreator('/docs/what_is_reflowOS','bfe'),
  exact: true,
},
{
  path: '/docs/ZenRoom',
  component: ComponentCreator('/docs/ZenRoom','00a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
