import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { connect } from "react-redux"

const Contact = ({ changeActive }) => {
  changeActive("5")
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    changeActive: active => dispatch({ type: `ACTIVE_NAVBAR`, active: active }),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Contact)
