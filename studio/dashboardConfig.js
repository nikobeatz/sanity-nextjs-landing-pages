export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f33c3b68b0fbd00d52077be',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9qmgdbnm',
                  apiId: '29c81fd6-edbf-4e6a-9ec4-561dc2ab214c'
                },
                {
                  buildHookId: '5f33c3b68b0fbd009e207734',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bgzkrz26',
                  apiId: 'e37a0b13-1b94-458d-93d6-1f107d8409bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nikobeatz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bgzkrz26.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
