const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const DisplayWorklow = path.resolve(`./src/components/displayworkflow.tsx`)
  return graphql(`
  {
    githubData {
      data {
        search {
          repos {
            repo {
              description
              url
              readme {
                text
              }
              name
              updatedAt
              languages {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create workflow pages.
    const workflows = result.data.githubData.data.search.repos

    workflows.forEach((wf, index) => {
      const first = index === 0;
      const last = index === workflows.length - 1;

      const next = last ? workflows[0].repo.name : workflows[index + 1].repo.name;
      const previous = first ? workflows[workflows.length - 1].repo.name : workflows[index - 1].repo.name;

      const workflow = {
        description: wf.repo.description,
        name: wf.repo.name,
        updatedAt: wf.repo.updatedAt,
        languages: wf.repo.languages.nodes.map((n) => n.name),
        url: wf.repo.url,
        readme: wf.repo.readme.text,
        previous: previous,
        next: next,
      };

      createPage({
        path: `workflow/${wf.repo.name}`,
        component: DisplayWorklow,
        context: {
          workflow
        },
      })
    })

    return null
  })
}
