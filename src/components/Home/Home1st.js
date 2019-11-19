import React from "react"
import Radium, { Style } from 'radium';
// import '../layoutCss/assets/voc/css/skins/blue.css'
const Services = ({ color, colorHover }) => {  
  const style = {
    btn: {
      // border: `1px solid ${color}`,
      // backgroundColor: `${color}`,
      // ':hover': {
      //   backgroundColor: ` ${color}!important`
      // },
    }
  }
  
  return (
    <section className="main-container gray-bg" style={{ marginTop: 0 }} >
  />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center title">SERVICE</h1>
              <div className="separator"></div>
              <p className="lead text-center">
                By using our services, you will get all of the great experience.
           </p>
              <div className="row">
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="0" key={4} style={style.faIcon}
                  >
                    <i className="fa fa-laptop" key={7} style={style.faIcon}></i>
                    <h2>Web applications</h2>
                    <p>
                      Design and develop web applications, hosting service,
                      domain, SEO.
                 </p>
                    <a href="services" className="btn-default btn" key={1} style={style.btn}>
                      Read More
                 </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="200" key={5} style={style.faIcon}
                  >
                    <i className="fa fa-mobile" key={8} style={style.faIcon}></i>
                    <h2>Mobile Applications</h2>
                    <p>
                      Design and develop mobile applications, publish and app
                      store optimization.
                 </p>
                    <a href="services" className="btn-default btn" key={2} style={style.btn}>
                      Read More
                 </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="400" key={6} style={style.faIcon}
                  >
                    <i className="fa fa-gamepad" key={9} style={style.faIcon} ></i>
                    <h2>Mobile Games</h2>
                    <p>
                      Design and develop mobile games, publish and app store
                      optimization.
                 </p>
                    <a href="services" className="btn-default btn" key={3} style={style.btn}>
                      Read More
                 </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services