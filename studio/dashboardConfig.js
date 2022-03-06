export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '622503db958f104ede5f0f9a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-mzod2ddh',
                  apiId: '1f94527c-dfae-410f-8695-65a6aa3d94d9'
                },
                {
                  buildHookId: '622503db7cd5720cb78f7106',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-fq1hhhg3',
                  apiId: '734ae238-cedd-448e-893d-14252d700d01'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/svtnc-web-support/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-fq1hhhg3.netlify.app', category: 'apps'}
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
