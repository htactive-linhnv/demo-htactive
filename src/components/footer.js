import React from "react"
// import Logo from "../contents/assets/images/logo_dark_gray.png"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-content">
                <div className="logo">
                  <a href="">
                    {/* <img src={Logo} alt="" /> */}
                  </a>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Your satisfaction is our success!</p>
                    <ul className="social-links circle">
                      <li className="facebook">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/htactive"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a target="_blank" href="https://twitter.com/hoangvhh">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="googleplus">
                        <a
                          target="_blank"
                          href="https://plus.google.com/u/0/117715430853979848085"
                        >
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li className="skype">
                        <a target="_blank" href="skype:hoangvhh">
                          <i className="fa fa-skype"></i>
                        </a>
                      </li>
                      <li className="linkedin">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/hoang-pham-6236b8b7"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-icons">
                      <li>
                        <i className="fa fa-map-marker pr-10"></i>{" "}
                        <span>
                          150 Duy Tan
                          <br />>
                          <span style={{marginLeft: "30px"}}>
                            Da Nang, Viet Nam
                          </span>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-phone pr-10"></i> (+84) 905 610 229
                      </li>
                      <li>
                        <i className="fa fa-mobile pr-10"></i> (+84) 1227 423
                        919
                      </li>
                      <li>
                        <i className="fa fa-envelope-o pr-10"></i>
                        <a href="mailto:recruit@htactive.com">
                          recruit@htactive.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="/about" className="link">
                  <span>About Us</span>
                </a>
              </div>
            </div>
            <div className="space-bottom hidden-lg hidden-xs"></div>
            <div className="col-sm-6 col-md-2">
              <div className="footer-content">
                <h2>Links</h2>
                <nav>
                  <ul className="nav nav-pills nav-stacked footer-nav">
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
                      <a href="contact">Contact</a>
                    </li>
                    <li className="">
                      <a href="news">Blogs</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="footer-content">
                <h2>CONNECT WITH US!</h2>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhtactive%2F&amp;tabs&amp;width=340&amp;height=214&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=1780445882280832"
                  width="340"
                  height="214"
                  style={{border: "none",overflow:"hidden",height:"213px"}}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="space-bottom hidden-lg hidden-xs"></div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>Copyright © 2019 by HT Active. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-collapse-2"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbar-collapse-2"
                >
                  <ul className="nav navbar-nav">
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
                      <a href="contact">Contact</a>
                    </li>
                    <li className="">
                      <a href="news">Blogs</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
