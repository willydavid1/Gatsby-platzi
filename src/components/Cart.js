import React, { useContext } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import { CartContext } from "../context"
import priceFormat from "../utils/priceFormat"

const Cart = () => {
  const { cart } = useContext(CartContext)

  const total = cart.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  )

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
          <Button>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart
