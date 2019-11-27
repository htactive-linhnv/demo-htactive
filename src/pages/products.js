import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Portfolio/banner"
import PortfolioContent from "../components/Portfolio/portfolioContent"
const PortfolioPage = () => {

  return (
    <Layout>
      <SEO title="Portfolio" />

      <Banner />

      <PortfolioContent />
    </Layout>
  )
}
export default PortfolioPage
