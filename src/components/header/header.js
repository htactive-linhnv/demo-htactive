import React from "react"
import HeaderTop from "./header-top"
import HeaderFixed from './header-fixed'

const Header = (props) => {
  return (
    <header>
      <HeaderTop />
      <HeaderFixed/>
    </header>
  )
}

export default Header
