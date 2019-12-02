import React from "react"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

const Banner = ({ language }) => { 

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/portfolio/banner/" } } }
      ) {
        edges {
          node {
            frontmatter {
              banner_portfolio {
                banner_img
                banner_title
                language
                banner_leads {
                  banner_lead
                }
              }
            }
          }
        }
      }
    }
  `)
  const dataFromQuery = data.allMarkdownRemark.edges
  const rawData = dataFromQuery.find(
    item => item.node.frontmatter.banner_portfolio.language === language
  )
  const bannerData = rawData.node.frontmatter.banner_portfolio  
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
        style={{height:"400px"}}
       
      >
        <div className="banner-page">
          <div className="container banner-lead">
            <div className="space-top"></div>
            <h1 className="first-title">{bannerData.banner_title}</h1>
            <div className="separator-2"></div>
            <p className="lead">
            {bannerData.banner_leads[0].banner_lead}
            <br/>
            <br/>
            {bannerData.banner_leads[1].banner_lead}
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}
export default Banner