import React from "react"
import HeaderTop from "./header-top"
import HeaderFixed from "./header-fixed"

const Header = ({ menu,color }) => {
  return (
    <header>
      <HeaderTop />
      <HeaderFixed menu= {menu} color={color} />
    </header>
  )
}

export default Header
