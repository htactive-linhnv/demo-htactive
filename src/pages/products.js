import React, { useEffect, useState } from "react"
import { Parallax } from "react-parallax"
import PortfolioBanner from "../data/images/portfolio-3.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Portfolio/banner"
import PortfolioContent from "../components/Portfolio/portfolioContent"
const PortfolioPage = () => {
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
    <Layout>
      <SEO title="Portfolio" />
      <Parallax 
      bgImage={PortfolioBanner} 
      strength={500}
      style={{marginTop:`${scrollY>182?"147px":"0"}`}}
      >
        <div style={{ height: 400 }}>
          <Banner />
        </div>
      </Parallax>
      <PortfolioContent />
    </Layout>
  )
}
export default PortfolioPage
