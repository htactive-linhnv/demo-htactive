import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const RelatedPost = ({ tags, slug }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allPost: allMarkdownRemark(
          filter: { fields: { slug: { regex: "/blog/" } } }
        ) {
          edges {
            node {
              frontmatter {
                tags_en
                blog_description_en
                blog_title_en
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  const relatedPosts = data.allPost.edges
    .filter(
      item =>
        tags &&
        item.node.frontmatter.tags_en &&
        item.node.frontmatter.tags_en.indexOf(tags[0]) !== -1 &&
        item.node.fields.slug !== slug
    )
    .slice(0, 2)
  const relatedCard = relatedPosts.map(({ node }) => (
    <div className="image-box">
      <div className="image-box-body">
        <h3 className="title">
          <Link to={node.fields.slug}>
            {node.frontmatter[`blog_title_${"en"}`]}
          </Link>
        </h3>
        <p>{node.frontmatter[`blog_description_${"en"}`]}</p>
        <Link to={node.fields.slug} className="link">
          <span>Read more</span>
        </Link>
      </div>
    </div>
  ))
  return (
    <aside className="col-md-3 col-md-offset-1">
      <div className="sidebar">
        <div className="block clearfix">
          <h3 className="title">Related posts</h3>
          <div className="separator" />
          {relatedCard}
        </div>
      </div>
    </aside>
  )
}

export default RelatedPost
