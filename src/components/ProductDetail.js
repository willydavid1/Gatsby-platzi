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
import { SEO, Stars } from "../components"

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
        <Stars />
        <small>{metadata.description}</small>

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
          <QtyButton onClick={() => qty && setQty(qty - 1)}>-</QtyButton>
          <input type="text" disabled value={qty} name="" id="" />
          <QtyButton onClick={() => setQty(qty + 1)}>+</QtyButton>
        </QtySelect>
        <Button>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
