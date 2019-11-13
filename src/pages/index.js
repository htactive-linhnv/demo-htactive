import React from "react"
import { Link, graphql } from "gatsby"
import Home2nd from '../components/Home2nd/Home2nd'
import Home3rd from '../components/Home3rd/Home3rd'
import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterTop from "../components/FooterTop/FooterTop"
import Contact from "../components/Contact"



export default ({data}) => {
  // console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      {/* <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form> */}
      <div className="container">
        <Home2nd test={data} />
        <Home3rd test={data} />
      </div>
      <Contact/>
      <FooterTop/>

    </Layout >
  )
}



export const query = graphql`
query {
    why : allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home_why_vn  {
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
