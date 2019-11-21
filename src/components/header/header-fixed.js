import React, { useState, useEffect } from "react"
import NavBar from "./navbar"

const HeaderFixed = ({ color }) => {
  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])

  return (
    <header
      className="header fixed clearfix"
      style={{ position: `${scrollY > 182 ? "fixed" : "relative"}`, top: "0", right:"0", left:"0" ,zIndex:"200000"}}
    >    
      <div className="container">
        <div className="row header-fixed">
          <div className="col-md-3 ">
            <div className="header-left clearfix">
              <a href="/">
                <div className="logo" style={{}}></div>
              </a>
              <div className="site-slogan">
                Your Satisfaction Is Our Success
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="header-right clearfix">
              <div className="main-navigation animated">
                <NavBar color={color} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default HeaderFixed
