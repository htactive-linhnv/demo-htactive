import React from "react"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import "../BannerHome/BannerHome.css"
const BannerHome = ({ data }) => {
  const dataUse = data.edges[1].node.frontmatter.home_banner_vn || {}
  const dataArr = Object.values(dataUse).map(item => item) || []  
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="section parallax light-translucent-bg parallax-bg-"
        layers={[
          {
            image: dataArr[0],
            amount: 0.7,
          },
        ]}
        style={{
          height: "auto",
        }}
      >
        <div className="container">
          <div className="call-to-action">
            <div className="row">
              <div className="col-lg-8 col-sm-12">
                <h1 className="title text-center">
                  {dataArr[2]}
                </h1>
                <p className="text-center">
                {dataArr[1]}
                </p>
              </div>
              <div className="col-lg-4 col-s,-12">
                <div className="text-center">
                  <a href="/contact" className="btn btn-default btn-lg">
                        Liên hệ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}

export default BannerHome
