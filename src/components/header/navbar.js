import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
const NavBar = ({ color, active, changeActive, menu }) => {
  const [openDrop, setOpenDrop] = useState(false)
  const engRoute = ['/','services','portfolio','blog','contact']
  let menuItem = []
  if (menu) {
    const dataUse = menu.frontmatter.menu_vn || {}
    const dataArr = Object.values(dataUse).map(item => item) || []
    menuItem = dataArr.map((item, index) => {
      return (
        <li
          className={`${color} ${active === `${index+1}` ? "active" : ""} `}
          onClick={() => changeActive(`${index+1}`)}
        >
          <Link to={engRoute[index]}>{item}</Link>
        </li>
      )
    })
  }

  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setOpenDrop(!openDrop)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          style={{ display: `${openDrop ? "block" : "none"}` }}
        >
          <ul className="nav navbar-nav navbar-right">
            {menuItem}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ active }) => {
  return { active }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: value => dispatch({ type: `ACTIVE_NAVBAR`, active: value }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
