/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Header from "./header/header"
import Footer from "./footer"
import StyleSwitcher from '../components/StyleSwitcher/StyleSwitcher'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layoutCss/assets/css/bootstrap.css"
import "./layoutCss/assets/css/carousel.css"
import "./layoutCss/assets/css/icons.css"
import "./layoutCss/assets/css/main.css"
import "./layoutCss/assets/css/plugins.css"
import "./layoutCss/assets/voc/css/animations.css"
import "./layoutCss/assets/voc/css/style.css"
import "./layout.css"
import "./minWidth992.css"
import "./maxWidth991.css"
import "./minWidth768.css"
import "./maxWidth768.css"
import { connect } from 'react-redux'


const Layout = ({ footer,children,color }) => {  
  return (
    <div className="page-wrapper">
      <StyleSwitcher></StyleSwitcher>
      <Header color={color} />
      <main>{children}</main>
      <Footer footer={footer}/>
      <ScrollUpButton AnimationDuration={1500} ShowAtPosition={0}
      />
      <div ><i className="fa fa-angle-up"></i></div>
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = ({ color }) => {
  return { color }
}
export default connect(mapStateToProps, null)(Layout)
