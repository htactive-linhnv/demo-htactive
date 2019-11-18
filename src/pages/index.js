import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Home2nd from '../components/Home/Home2nd/Home2nd'
import Home3rd from '../components/Home/Home3rd/Home3rd'
import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterTop from "../components/FooterTop/FooterTop"
import Banner from "../components/Home/banner"
import BannerHome from '../components/BannerHome/BannerHome'
import PageTop from "../components/Home/pageTop"
import Services from "../components/Home/Home1st"
import { changeColor } from '../state/app'
import { connect, dispatch } from 'react-redux'
const IndexPage = (props) => {
  console.log(props, "???");
  return (
    <Layout>
      <SEO title="Home" />
      <Banner></Banner>
      <PageTop/>
      <Services/>
      <div className="container">
        <br></br>
        <button onClick={() =>dispatch(props.changeColor("green"))}>Green</button>
        <button onClick={() =>dispatch(props.changeColor("yellow"))}>Yellow</button>
        <Home2nd test={props.data}  color={props.color}/>
      </div>
      <BannerHome />
      <div className="container">
        <Home3rd test={props.data} />
      </div>
      <FooterTop />
    </Layout >
  )
}



const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    changeColor: (color) => dispatch(changeColor({ type: 'CHANGE_COLOR',color:color }))
  }
}
export default connect(state => ({
  color: state.app.color
}), mapDispatchToProps)(IndexPage)


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
