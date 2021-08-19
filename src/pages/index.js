import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Jumbo } from "../components"

// pass this information through props to the component
export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data, ...rest }) => {
  console.log(rest)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to /page 2</Link> <br />
      <Link to="/thanks/">Go to /thanks</Link>
    </>
  )
}

export default IndexPage
