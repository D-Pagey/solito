/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  mySidebar: [
    // 'welcome',
    'welcome',
    'install',
    'gradual-adoption',
    'methodology',
    {
      type: 'category',
      label: 'Starters',
      items: [
        {
          type: 'doc',
          id: 'starter',
          label: 'Minimal',
        },
        {
          type: 'doc',
          id: 'tailwind',
          label: 'Tailwind CSS',
        },
        {
          type: 'doc',
          id: 'expo-router',
          label: 'Expo Router',
        },
      ],
    },
    // {
    //   type: 'ref',
    //   label: 'Welcome',
    //   id: 'welcome',
    // },
    // {
    //   type: 'ref',
    //   id: 'install',
    //   label: 'Installation',
    // },
    {
      type: 'category',
      items: [
        'usage/link',
        'usage/text-link',
        'usage/moti-link',
        'usage/use-router',
        'usage/params',
        'usage/use-link',
      ],
      label: 'API',
      collapsed: false,
    },
    {
      type: 'category',
      items: ['guides/new-route', 'guides/dynamic-route', 'guides/expo-router'],
      label: 'Guides',
      collapsed: false,
    },
    {
      type: 'category',
      items: [
        'recipes/redirects',
        'recipes/tree-shaking',
        'recipes/use-is-focused',
        'recipes/scroll-view',
        'recipes/deep-linking',
        'recipes/modals',
        'recipes/deploying',
      ],
      label: 'Recipes',
      collapsed: false,
    },
    // {
    //   type: 'category',
    //   items: [
    //     // 'typescript/navigation-options',
    //     'typescript/next-replacements',
    //   ],
    //   label: 'TypeScript',
    // },
    'resources',
    // 'community',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
}

module.exports = sidebars
