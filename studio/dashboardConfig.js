export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61f78897e5fc604973710383',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ey4jzuq7',
                  apiId: '9d4cd7d1-9a47-44ab-931f-c8b76ec72c5b'
                },
                {
                  buildHookId: '61f788979823c94ff756b960',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p6m9w7ae',
                  apiId: '574c8645-32b7-41ec-8562-04723241e1fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codepic/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p6m9w7ae.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
