import React from "react"

const Services = () => {
  return (
    <section
      className="main-container "
      style={{ marginTop: 0, backgroundColor: "#f1f1f1" }}
    >
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center title">SERVICE</h1>
              <div className="separator"></div>
              <p className="lead text-center">
                By using our services, you will get all of the great experience.
              </p>
              <div className="row list-card">
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="0"
                    key={4}
                  >
                    <i className="fa fa-laptop" key={7}></i>
                    <h2 className="card-title">Web applications</h2>
                    <p className="card-content">
                      Design and develop web applications, hosting service,
                      domain, SEO.
                    </p>
                    <a href="services" className="btn-default btn" key={1}>
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="200"
                    key={5}
                  >
                    <i className="fa fa-mobile" key={8}></i>
                    <h2 className="card-title">Mobile Applications</h2>
                    <p className="card-content">
                      Design and develop mobile applications, publish and app
                      store optimization.
                    </p>
                    <a href="services" className="btn-default btn" key={2}>
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="box-style-1 white-bg object-non-visible animated object-visible fadeInUpSmall"
                    data-animation-effect="fadeInUpSmall"
                    data-effect-delay="400"
                    key={6}
                  >
                    <i className="fa fa-gamepad" key={9}></i>
                    <h2 className="card-title">Mobile Games</h2>
                    <p className="card-content">
                      Design and develop mobile games, publish and app store
                      optimization.
                    </p>
                    <a href="services" className="btn-default btn" key={3}>
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
