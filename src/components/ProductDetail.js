import React, { useState } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Button,
  QtyButton,
  QtySelect,
  SizeButton,
  SizeSelect,
  StyledProductDetail,
  Tag,
} from "../styles/components"
import SEO from "./seo"

const ProductDetail = ({ unit_amount, id, product: { name, metadata } }) => {
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)

  const formattedPrice = priceFormat(unit_amount)

  const handleChangeSize = (newSize = 2) => {
    setSize(newSize)
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata?.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formattedPrice}</b>
        {metadata?.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => handleChangeSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => handleChangeSize(2)}>S</SizeButton>
            <SizeButton onClick={() => handleChangeSize(3)}>M</SizeButton>
            <SizeButton onClick={() => handleChangeSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => qty && setQty(qty - 1)}>-</button>
          <input type="text" disabled value={qty} name="" id="" />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
