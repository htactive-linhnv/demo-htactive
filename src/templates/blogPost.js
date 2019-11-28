import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import RelatedPost from "../components/Blog/RelatedPost"

const blogPost = ({ data }) => {
  const post = data.post
  const monthList = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]
  const getDate = date => {
    if (date) {
      const day = date.substring(8, 10)
      let month = date.substring(5, 7)
      const year = date.substring(0, 4)
      month = month.includes("0") ? month.substring(1, 2) : month
      return [day, month, year]
    }
    return ["11", "12", "2019"]
  }
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="main col-md-8">
              <h1 className="page-title">
                {post.frontmatter[`blog_title_${"en"}`]}
              </h1>
              <article className="clearfix blogpost full">
                <div className="blogpost-body">
                  <div className="side">
                    <div className="post-info">
                      <span className="day day--big">
                        {getDate(post.frontmatter[`blog_date_${"en"}`])[0]}
                      </span>
                      <span className="month">
                        {
                          monthList[
                            getDate(post.frontmatter[`blog_date_${"en"}`])[1]
                          ]
                        }
                      </span>
                      <span className="year">
                        {getDate(post.frontmatter[`blog_date_${"en"}`])[2]}
                      </span>
                    </div>
                    <div id="affix" className="affix-top">
                      <span className="share">Share this</span>
                      <div id="share" className="sharrre">
                        <ul className="social-links clearfix">
                          <li className="facebook">
                            <a href="/">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="/">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="googleplus">
                            <a href="/">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blogpost-content">
                    <header>
                      <div className="submitted">
                        <i className="fa fa-user pr-5" /> by{" "}
                        <Link to="/blog">
                          {post.frontmatter[`author_${"en"}`]}
                        </Link>
                      </div>
                    </header>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </div>
                  {}
                </div>
              </article>
            </div>
            <RelatedPost
              slug={post.fields.slug}
              tags={post.frontmatter[`tags_${"en"}`]}
            />
            {/* sidebar end */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default blogPost
export const query = graphql`
  query($slug: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        tags_en
        author_en
        blog_title_en
        blog_date_en
      }
    }
  }
`

