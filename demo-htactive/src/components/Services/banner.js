import React from "react"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import { graphql, useStaticQuery } from "gatsby"

const Banner = ({ language }) => {


  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/services/banner/" } } }
      ) {
        edges {
          node {
            frontmatter {
              banner_services {
                banner_lead
                banner_title
                banner_img
                language
              }
            }
          }
        }
      }
    }
  `)
  const dataFromQuery = data.allMarkdownRemark.edges
  const rawData = dataFromQuery.find(
    item => item.node.frontmatter.banner_services.language === language
  )
  const bannerData = rawData.node.frontmatter.banner_services
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="section dark-translucent-bg parallax-bg"
        layers={[
          {
            image: bannerData.banner_img,
            amount: 0.7,
          },
        ]}
        style={{
          height: "400px",
        }}
      >
        <div className="banner-page">
          <div className="container banner-lead">
            <div className="space-top"></div>
            <h1 className="first-title">{bannerData.banner_title}</h1>
            <div className="separator-2"></div>
            <p className="lead">
              {bannerData.banner_lead.split(".")[0]}.
              <br />
              {bannerData.banner_lead.split(".")[1]}.
              <br />
              {bannerData.banner_lead.split(".")[2]}.
              <br />
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}
export default Banner
