import React from "react"
import Logo from "../../data/images/logo_dark_gray.png"
import NavBar from "./navbar"


const HeaderFixed = () => {

  return (
    <header className="header fixed clearfix">
      <div className="container">
        <div className="row header-fixed">
          <div className="col-md-3 ">
            <div className="header-left clearfix">
              <div className="logo">
                <a href="">
                  <img id="logo" src={Logo} alt="htactive" />
                </a>
              </div>
              <div className="site-slogan">
                Your Satisfaction Is Our Success
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="header-right clearfix">
              <div className="main-navigation animated">
                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default HeaderFixed
