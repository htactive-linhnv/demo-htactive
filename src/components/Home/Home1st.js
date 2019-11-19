import React from "react"
const Services = () => {
  return (
    <section className="main-container " style={{ marginTop: 0, backgroundColor:"#f1f1f1" }}>
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
                    data-effect-delay="0"
                  >
                    <i className="fa fa-laptop"></i>
                    <h2>Web applications</h2>
                    <p>
                      Design and develop web applications, hosting service,
                      domain, SEO.
                 </p>
                    <a href="services" className="btn-default btn">
                      Read More
                 </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="200"
                  >
                    <i className="fa fa-mobile"></i>
                    <h2>Mobile Applications</h2>
                    <p>
                      Design and develop mobile applications, publish and app
                      store optimization.
                 </p>
                    <a href="services" className="btn-default btn">
                      Read More
                 </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="400"
                  >
                    <i className="fa fa-gamepad"></i>
                    <h2>Mobile Games</h2>
                    <p>
                      Design and develop mobile games, publish and app store
                      optimization.
                 </p>
                    <a href="services" className="btn-default btn">
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