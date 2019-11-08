import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Link to="/contact">Go to page 2</Link>
  </Layout>
)

export default Contact
