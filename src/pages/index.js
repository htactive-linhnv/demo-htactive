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
import Home1st from "../components/Home/Home1st/Home1st"
import { connect } from "react-redux"
import Helmet from "react-helmet"

const IndexPage = ({ data, color, footer,slug }) => { 
  console.log(slug);
   
  return (
    <Layout footer={footer} menu={data.menu_vn}>
      <Helmet></Helmet>
      <SEO title="Home" color={color} />
      <Banner data={data.slide_vn}></Banner>
      <PageTop data={'data.lead_vn'}/>
      <Home1st  data={data.home1st_vn}color={color} />
      <Home2nd data={data.home2nd_vn} color={color} />
      <BannerHome data={data.banner_vn} />
      <Home3rd data={data.home3rd_vn} />
    </Layout>
  )
}

const mapStateToProps = ({ color, footer }) => {
  return { color, footer }
}
export default connect(mapStateToProps, null)(IndexPage)

export const query = graphql`
  query {
    home1st_vn: markdownRemark(frontmatter: {home_1st_vn: {home_1st_des_vn: {ne: null}}}) {
      frontmatter {
        home_1st_vn {
          home_1st_des_vn
          home_1st_title_vn
          home_1st_vn_1 {
            home_box_desc_vn_1
            home_box_title_vn_1
          }
          home_1st_vn_2 {
            home_box_desc_vn_2
            home_box_title_vn_2
          }
          home_1st_vn_3 {
            home_box_desc_vn_3
            home_box_title_vn_3
          }
        }
      }
    }
    home2nd_vn: markdownRemark(frontmatter: {home_1st_vn: {home_1st_des_vn: {ne: null}}}) {
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
    home3rd_vn: markdownRemark(frontmatter: {home_1st_vn: {home_1st_des_vn: {ne: null}}}) {
      frontmatter {
        home_3rd_vn {
          home_3rd_desc_vn
          home_3rd_title_vn
          tab1_vn {
            tab_img_vn_1
            tab_desc_vn_1
            tab_title_vn_1
          }
          tab2_vn {
            tab_desc_vn_2
            tab_img_vn_2
            tab_title_vn_2
          }
          tab3_vn {
            tab_desc_vn_3
            tab_img_vn_3
            tab_title_vn_3
          }
          tab4_vn {
            tab_desc_vn_4
            tab_img_vn_4
            tab_title_vn_4
          }
        }
      }
    }
    banner_vn: markdownRemark(frontmatter: {home_1st_vn: {home_1st_des_vn: {ne: null}}}) {
      frontmatter {
        home_banner_vn {
          banner_img_vn
          home_banner_desc_vn
          home_banner_heading_vn
        }
      }
    }
    lead_vn: markdownRemark(frontmatter: {home_1st_vn: {home_1st_des_vn: {ne: null}}}) {
      frontmatter {
        lead_vn
      }
    }
    menu_vn: markdownRemark(frontmatter: {home_1st_vn: {home_1st_des_vn: {ne: null}}}) {
      frontmatter {
        menu_vn
      }
    }
    slide_vn: markdownRemark(frontmatter: {home_1st_vn: {home_1st_des_vn: {ne: null}}}) {
      frontmatter {
        slide_vn {
          slide_caption1_vn
          slide_caption2_vn
          slide_caption3_vn
          slide_detail1_vn
          slide_detail2_vn
          slide_detail3_vn
          slide_img1_vn
          slide_img2_vn
          slide_img3_vn
        }
      }
    }
  }
  
`
