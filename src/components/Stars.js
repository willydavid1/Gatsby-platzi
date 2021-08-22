import React, { useState } from "react"
import { SelectStars } from "../styles/components"

const Stars = () => {
  const [start, setStart] = useState(5)
  const handleClickStart = (value = 5) => {
    setStart(value)
  }

  return (
    <SelectStars selected={start}>
      <span onClick={() => handleClickStart(1)}>★</span>
      <span onClick={() => handleClickStart(2)}>★</span>
      <span onClick={() => handleClickStart(3)}>★</span>
      <span onClick={() => handleClickStart(4)}>★</span>
      <span onClick={() => handleClickStart(5)}>★</span>
    </SelectStars>
  )
}

export default Stars
