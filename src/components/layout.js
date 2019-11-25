import React from "react"
import PropTypes from "prop-types"
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"
import Header from "./header/header"
import Footer from "./footer"
import FooterTop from './FooterTop/FooterTop'
import StyleSwitcher from "../components/StyleSwitcher/StyleSwitcher"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layoutCss/assets/css/bootstrap.css"
import "./layoutCss/assets/css/carousel.css"
import "./layoutCss/assets/css/icons.css"
import "./layoutCss/assets/css/main.css"
import "./layoutCss/assets/css/plugins.css"
import "./layoutCss/assets/voc/css/animations.css"
import "./layoutCss/assets/voc/css/style.css"
import "./layout.css"
import "./ResponsiveCss/minWidth992.css"
import "./ResponsiveCss/maxWidth991.css"
import "./ResponsiveCss/minWidth768.css"
import "./ResponsiveCss/maxWidth768.css"
import "./ResponsiveCss/maxWidth480.css"
import { connect } from 'react-redux'


const Layout = ({ footer,children,color,open,menu,language}) => {  
  return (
    <div className={ "page-wrapper " +  (open ? "blur-bg" : "")}>
      <StyleSwitcher></StyleSwitcher>
      <Header menu ={menu} color={color}  language={language} />
      <main>{children}</main>
      <FooterTop />
      <Footer footer={footer} />
      <ScrollUpButton AnimationDuration={1500} ShowAtPosition={0} />
      <div>
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = ({ color,open,footer,language}) => {
  return { color,open,footer,language }
}
export default connect(mapStateToProps, null)(Layout)
