import React, {useEffect} from "react"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Services/banner"
import WebApp from "../components/Services/webApp"
const Services = ({ language, changeActive }) => {
  useEffect(() => {
    changeActive("2")
    return ;
  })
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
const mapDispatchToProps = dispatch => {
  return {
    changeActive: active => dispatch({ type: `ACTIVE_NAVBAR`, active: active }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services)