import React from "react"
import { Link, graphql } from "gatsby"
import Home2nd from '../components/Home2nd/Home2nd'
import Home3rd from '../components/Home3rd/Home3rd'
import Layout from "../components/layout"
import SEO from "../components/seo"



export default (props) => {
  console.log(props);
  return (
    <Layout>
      <SEO title="Home" />
      <Home2nd data = {props.data}/>
      <Home3rd data = {props.data}/>
    </Layout>
  )

}



export const query = graphql`
query {
    why : allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home_why_vn {
              tab1_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
              tab2_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
              tab3_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
              tab4_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
            }
          }
        }
      }
    },
    about : allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home_about_vn {
              panel_vn1 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
              panel_vn2 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
              panel_vn3 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
              panel_vn4 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
            }
          }
        }
      }
    }
  }
  
`
