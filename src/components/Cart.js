import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import { CartContext } from "../context"
import priceFormat from "../utils/priceFormat"

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [stripe, setStripe] = useState(null)

  const total = cart.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  )

  const handleSubmit = async event => {
    event.preventDefault()
    let item = cart.map(({ id, quantity }) => ({
      price: id,
      quantity: quantity,
    }))

    const { error } = await stripe.redirectToCheckout({
      lineItems: item,
      mode: "payment",
      successUrl: `${process.env.DOMAIN}${process.env.SUCCESS_REDIRECT}`,
      cancelUrl: `${process.env.DOMAIN}${process.env.CANCEL_REDIRECT}`,
    })
    if (error) {
      throw error
    }
  }

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PK))
  }, [])

  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map(swag => (
            <tr key={swag.id}>
              {console.log(swag)}
              <td>
                <img src={swag.metadata.image} alt={swag.name} /> {swag.name}
              </td>
              <td>USD {priceFormat(swag.price)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.quantity * swag.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={!cart.length}>
            Comprar
          </Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart
