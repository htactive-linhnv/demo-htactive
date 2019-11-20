import React from "react"
import NavBar from "./navbar"
import red from "../../data/images/logo_red.png"
import blue from "../../data/images/logo_blue.png"
import green from "../../data/images/logo_green.png"
import orange from "../../data/images/logo_orange.png"
import pink from "../../data/images/logo_pink.png"
import purple from "../../data/images/logo_purple.png"
import yellow from "../../data/images/logo_yellow.png"
const HeaderFixed = ({ color }) => {
  let logo
  switch (color) {
    case "red": logo = red; break
    case "blue": logo = blue; break
    case "green": logo = green; break
    case "orange": logo = orange; break
    case "pink": logo = pink; break
    case "purple": logo = purple; break
    case "yellow": logo = yellow; break
    default: logo = red; break;
  }
  return (
    <header className="header fixed clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="header-left clearfix">
              <div className="logo">
                <a href="">
                  <img id="logo" src={logo} alt="htactive" />
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
                <NavBar color = {color} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default HeaderFixed
