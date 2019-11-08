import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Link to="/service">Go to page 2</Link>
  </Layout>
)

export default Services
