import React from "react"


const PageTop = () => {
    return (
        <div className="page-top" style={{ marginTop: "0px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="call-to-action">

                            <p className="lead">We strive to offer the best solution for your business.</p>
                            <a className="btn btn-white more" href="/services">
                                Read More<i className="pl-10 fa fa-info"></i>
                            </a>

                            <a href="/contact" className="btn btn-default contact">
                                Contact<i className="pl-10 fa fa-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageTop