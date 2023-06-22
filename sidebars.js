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

  // But you can create a sidebar manually
  // tutorialSidebar: [
  docs: [
    'Introduction',
    'QucikStart',
    // 'Tutorials',
    {
      type: 'category',
      label: 'Tutorials',
      "link": {
        // "type": "generated-index",
        // "description": "Tutorials of SIMPO."
        type: 'doc',
        id: 'Tutorials/Tutorials', // Tutorials/Tutorials.mdx

      },
      items: [
        'Tutorials/Installtion',
        'Tutorials/BioModel',
        'Tutorials/DataSet',
        'Tutorials/Project',

      //   {
      //     type: 'category',
      //     label: 'Case Study',
      //     "link": {
      //       // "type": "generated-index",
      //       // "description": "Case Study of SIMPO."
      //       type: 'doc',
      //       id: 'Case Study',
      // },
      //     items: [
      //       'Case Study/ASM1',
      //     ]
      //   },



        // {
        //   type: 'category',
        //   label: 'SIMPO Pro',
        //   items: [
        //     'ChangeLog/SIMPO Pro/2023',
        //     'ChangeLog/SIMPO Pro/2022',
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'SIMPO Dashboard',
        //   items: [
        //     'ChangeLog/SIMPO Dashboard/2023',
        //     'ChangeLog/SIMPO Dashboard/2022',
        //     'ChangeLog/SIMPO Dashboard/2021'
        //   ]
        // },


      ],
    },

    {
      type: 'category',
      label: 'Case Study',
      "link": {
        "type": "generated-index",
        "description": "Case Study of SIMPO."
        // type: 'doc',
        // id: 'Case Study',
  },
      items: [
        // 'Case Study/ASM1',

        {
          type: 'category',
          label: 'AQUASIM',
          items: [
            'CaseStudy/AQUASIM/T2P17',
          ]
        },




      ]
    },

    {
      type: 'category',
      label: 'Change Log',
      "link": {
        "type": "generated-index",
        "description": "Change log of the core source code of SIMPO."
        // type: 'doc',
        // id: 'ChangeLog/index',
      },
      items: [

        {
          type: 'category',
          label: 'SIMPO Dash',
          items: [
            'ChangeLog/SIMPO Dash/2023',
            'ChangeLog/SIMPO Dash/2022',
            'ChangeLog/SIMPO Dash/2021'
          ]
        },

        {
          type: 'category',
          label: 'SIMPO Client',
          items: [
            'ChangeLog/SIMPO Client/2023',
          ]
        },

        {
          type: 'category',
          label: 'SIMPO',
          items: [
            'ChangeLog/SIMPO/2023',
            'ChangeLog/SIMPO/2022',
            'ChangeLog/SIMPO/2021'
          ]
        },

        {
          type: 'category',
          label: 'SIMPO Pro',
          items: [
            'ChangeLog/SIMPO Pro/2023',
            'ChangeLog/SIMPO Pro/2022',
          ]
        },


        // {
        //   type: 'doc',
        //   id: 'ChangeLog/SIMPO/2023',
        // },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'ChangeLog',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],
};

module.exports = sidebars;
