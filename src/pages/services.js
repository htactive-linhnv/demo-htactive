import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Parallax } from "react-parallax"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Services/banner"
import WebApp from "../components/Services/webApp"

const Services = ({ language }) => {
  return (
    <Layout>
      <SEO title="Services" />
      <Banner language={language} />
      <WebApp language={language} />
    </Layout>
  )
}
const mapStateToProps = ({ language }) => {
  return { language }
}

export default connect(mapStateToProps)(Services)
