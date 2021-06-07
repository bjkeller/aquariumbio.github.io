# Aquarium.bio site

## configuration notes

This repo is setup to run as a VS Code devcontainer.

1. cloned repo from github. then created gatsby-pages branch b/c master/main is used for publishing pages.
2. created project with `npm init gatsby` into another directory and then copied everything but .git and node_modules.
   select responsive images, react helmet, and mdx.
   Then ran npm install.

3. These are installed:

- https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/

  note: add deploy script to publish to master

- https://www.gatsbyjs.com/plugins/gatsby-theme-material-ui/
- https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
- https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/
- https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
- https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/
- https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/ (don't think this is needed if use material-ui properly)


example using material ui: https://github.com/mui-org/material-ui/tree/master/examples/gatsby-theme

<!-- <p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1> -->

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
