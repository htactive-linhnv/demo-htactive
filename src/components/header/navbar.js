import React, { useState } from "react"
import { Link } from 'gatsby'
const NavBar = ({ color }) => {
  const navItem = ["home", "services", "portfolio", "blog", "contact"]

  const [openDrop, setOpenDrop] = useState(false)
  const pageIndex = 1;
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
            <li className={`${color} ` + (pageIndex === -1 ? "active" : "")}>
              <Link to="/">Home</Link>
            </li>
            <li className={`${color} ` + (pageIndex === 1 ? "active" : "")}>
              <Link to="/services">Service</Link>
            </li>
            <li className={`${color} ` + (pageIndex === 2 ? "active" : "")}>
              <Link to="/portfolio">Portfolios</Link>
            </li>
            <li className={`${color} ` + (pageIndex === 3 ? "active" : "")}>
              <Link to="/blog">Blogs</Link>
            </li>
            <li className={`${color} ` + (pageIndex === 4 ? "active" : "")}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
