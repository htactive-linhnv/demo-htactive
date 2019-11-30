import React, {useState, useEffect} from "react"
import { connect } from "react-redux"
import { Parallax } from "react-parallax"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Services/banner"
import WebApp from "../components/Services/webApp"

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { banner_services: { banner_img: { regex: "/img/" } } }
      }
    ) {
      edges {
        node {
          frontmatter {
            banner_services {
              banner_img
            }
          }
        }
      }
    }
  }
`
const Services = ({ data, language, changeActive }) => {
  changeActive("2")  
  return (
    <Layout>
      <SEO title="Services" />
      <Parallax
        bgImage={
          data.allMarkdownRemark.edges[0].node.frontmatter.banner_services
            .banner_img
        }
       
        strength={500}
      >
        <div style={{ height: 400 }}>
          <Banner language={language} />
        </div>
      </Parallax>
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
