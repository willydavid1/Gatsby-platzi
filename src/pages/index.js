import React from "react"
import { Link } from "gatsby"
import { SEO, Jumbo } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to /page 2</Link> <br />
    <Link to="/thanks/">Go to /thanks</Link>
  </>
)

export default IndexPage
