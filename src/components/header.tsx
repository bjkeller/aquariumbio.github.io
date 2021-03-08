import { graphql, useStaticQuery } from "gatsby"
import React from "react"

type QueryProps = {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

const HEADER_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Header = () => {
    const data = useStaticQuery<QueryProps>(HEADER_QUERY)
    const { title } = data.site.siteMetadata

    return (
        <header>
            <div>
                <h1>
                    {title}
                </h1>
            </div>
        </header>
    )
}

export default Header
