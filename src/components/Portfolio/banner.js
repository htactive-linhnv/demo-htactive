import React,{useState, useEffect} from "react"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

const Banner = () => {
  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])
  return (
    <ParallaxProvider>
    <ParallaxBanner
      className="section parallax dark-translucent-bg parallax-bg-"
      layers={[
        {
          image: bannerData.banner_img,
          amount: 0.7,
        },
      ]}
      style={{
        marginTop: `${scrollY > 182 ? "147px" : "0"}`,
        height: "400px",
      }}
    >
    <div className="banner-page"> 
      <div className="container banner-lead">
        <div className="space-top"></div>
        <h1>Our Portfolios</h1>
        <div className="separator-2"></div>
        <p className="lead">
          Projects made by HT Active, from mobile applications, mobile games to
          website. Our products work perfectly on Android, iOS and Windows.{" "}
          <br />
          <br />
          Please click on each item to see detail.
        </p>
      </div>
    </div>
    </ParallaxBanner>
    </ParallaxProvider>
  )
}
export default Banner
