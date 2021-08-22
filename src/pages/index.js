import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Jumbo, Products } from "../components"

// pass this information through props to the component
export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripePrice.edges} />
      <Link to="/page-2/">Go to /page 2</Link> <br />
      <Link to="/thanks/">Go to /thanks</Link>
    </>
  )
}

export default IndexPage
