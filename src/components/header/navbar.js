import React from "react"

const NavBar = () => {
  return (
    <nav className="navbar navbar-default" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      <div
        className="collapse navbar-collapse"
        id="navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li className="active">
            <a href="">Home</a>
          </li>
          <li className="">
            <a href="services">Service</a>
          </li>
          <li className="">
            <a href="products">Portfolios</a>
          </li>
          <li className="">
            <a href="news">Blogs</a>
          </li>
          <li className="">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default NavBar
