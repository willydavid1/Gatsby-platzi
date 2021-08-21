import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Jumbo } from "../components"
import styled from "styled-components"

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

const Button = styled.button`
  width: 10rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${({ color }) => color ?? "#ffffff"};
  cursor: pointer;
  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Button>Button</Button> <br />
      <Link to="/page-2/">Go to /page 2</Link> <br />
      <Link to="/thanks/">Go to /thanks</Link>
    </>
  )
}

export default IndexPage
