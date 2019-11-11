/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layoutCss/assets/css/bootstrap.css"
import "./layoutCss/assets/css/carousel.css"
import "./layoutCss/assets/css/icons.css"
import "./layoutCss/assets/css/main.css"
import "./layoutCss/assets/css/plugins.css"

import "./layoutCss/assets/voc/css/animations.css"
import "./layoutCss/assets/voc/css/style.css"

import "./layout.css"


const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
