import React, {useEffect} from "react"
import {connect} from "react-redux"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Portfolio/banner"
import PortfolioContent from "../components/Portfolio/portfolioContent"

const PortfolioPage = ({language, data, changeActive, changeSlug}) => {
  useEffect(() => {
    changeActive("3")
    changeSlug("/")
    return ;
  })
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Banner language={language} />
      <PortfolioContent  language={language} dataCategories={data.allMarkdownRemark.edges}/>
    </Layout>
  )
}

const mapStateToProps = ({ language }) => {
  return { language }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: active => dispatch({ type: `ACTIVE_NAVBAR`, active: active }),
    changeSlug: slug => dispatch({ type: `CHANGE_SLUG`, slug: slug }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioPage)

export const query=graphql`
{
  allMarkdownRemark(filter: {fields: {slug: {regex: "/en/portfolio/categories/"}}}) {
    edges {
      node {
        frontmatter {
          portfolio_category {
            category_title
            id
            language
            tag_name
          }
        }
      }
    }
  }
}
`


