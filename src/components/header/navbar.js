import React, {useState} from "react"

const NavBar = ({color}) => {
  const [openDrop, setOpenDrop]=useState(false)
  return (
    <nav className="navbar navbar-default" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"        
          onClick={()=>setOpenDrop(!openDrop)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      <div
        className="collapse navbar-collapse"      
         style={{display:`${openDrop?"block":"none"}`}}
      >
        <ul className="nav navbar-nav navbar-right">
          <li className={`${color} active`}>
            <a href="/">Home</a>
          </li>
          <li className="">
            <a href="/services">Service</a>
          </li>
          <li className="">
            <a href="/portfolio">Portfolios</a>
          </li>
          <li className="">
            <a href="/blog">Blogs</a>
          </li>
          <li className="">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default NavBar
