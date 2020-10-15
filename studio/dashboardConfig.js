export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f88c23c27622f225797226c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-drnj9t1p',
                  apiId: 'a2e49a5f-dac7-4de5-8c77-6da5c5acb3fb'
                },
                {
                  buildHookId: '5f88c23c40c9ee292af6b87d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6ghqxufc',
                  apiId: '8a854ec4-ce9e-4c3f-9907-f99e087fc3a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raymondpe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6ghqxufc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
