import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = ({ siteTitle }) => (
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
          <span>
            <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="CartLogo" />
          </span>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
