import React from "react"

import { StyledJumbo } from "../styles/components"
import Image from "./image"

const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue tu swag exclusivo!</h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}

export default Jumbo
