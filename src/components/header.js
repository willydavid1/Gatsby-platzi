import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MenuItem, StyledHeader } from "../styles/components"
import { CartContext } from "../context"

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <StyledHeader>
      <Link to="/">
        <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Products</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://www.platzi.com/">Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">Cart</Link>
            <span style={{ marginLeft: "1rem", cursor: "pointer" }}>
              <img
                src="https://i.postimg.cc/L6wpMxLt/cart.png"
                alt="CartLogo"
              />
              {cart.length}
            </span>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
