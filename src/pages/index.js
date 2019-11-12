import React from "react"


import Banner from "../components/Home/banner"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner/>
  </Layout>
)

export default IndexPage
