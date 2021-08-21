import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"
import { GlobalStyles } from "../styles"
import "./layout.css"

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>Made with love</Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
