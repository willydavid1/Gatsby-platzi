import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Thanks = () => {
  return (
    <div>
      <SEO title="Successful purchase" />
      <Purchase>
        <h2>Successful purchase</h2>
        <p>I hope you enjoy it</p>
        <p>Don't stop learning</p>
        <span rol="img" aria-label="emoji">
          ❤
        </span>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default Thanks
