import React from "react"
import { graphql } from "gatsby"
import Home2nd from "../components/Home/Home2nd/Home2nd"
import Home3rd from "../components/Home/Home3rd/Home3rd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterTop from "../components/FooterTop/FooterTop"
import Banner from "../components/Home/banner"
import BannerHome from "../components/BannerHome/BannerHome"
import PageTop from "../components/Home/pageTop"
import Services from "../components/Home/Home1st/Home1st"
import { connect } from "react-redux"
import Helmet from "react-helmet"

const IndexPage = ({ data, color, footer }) => {
  
  return (
    <Layout footer={footer}>
      <Helmet></Helmet>
      <SEO title="Home" color={color} />
      <Banner></Banner>
      <PageTop />
      <Services color={color} />
      <Home2nd data={data.home2nd} color={color} />
      <BannerHome />
      <Home3rd test={data} />
      <FooterTop />
    </Layout>
  )
}

const mapStateToProps = ({ color, footer }) => {
  return { color, footer }
}
export default connect(mapStateToProps, null)(IndexPage)

export const query = graphql`
  query {
    home2nd: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home_2nd_vn {
              about_paragraph_vn {
                about_img
                about_paragraph_title_vn
                about_paragraph_vn_1
                about_paragraph_vn_2
              }
              home_2nd_desc_vn
              home_2nd_title_vn
              panel_vn_1 {
                home_panel_desc_vn_1
                home_panel_title_vn_1
              }
              panel_vn_2 {
                home_panel_desc_vn_2
                home_panel_title_vn_2
              }
              panel_vn_3 {
                home_panel_desc_vn_3
                home_panel_title_vn_3
              }
              panel_vn_4 {
                home_panel_desc_vn_4
                home_panel_title_vn_4
              }
            }
          }
        }
      }
    
    
    }
  }
`
