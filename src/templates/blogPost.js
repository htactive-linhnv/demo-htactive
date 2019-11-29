import React,{useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const BlogPost = (props) => {
  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])
  return (
    <Layout>
      <SEO title="Blog" />
      <section className={`main-container ${scrollY>182?"solveBlink":""}`}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-8">
              {/* page-title start */}
              {/* ================ */}
              <h1 className="page-title">
                Những Material component tuyệt vời trong React Native.
              </h1>
              {/* page-title end */}
              {/* blogpost start */}
              <article className="clearfix blogpost full">
                <div className="blogpost-body">
                  <div className="side">
                    <div className="post-info">
                      <span className="day day--big">
                        {getDate(post.frontmatter[`blog_date_${language}`])[0]}
                      </span>
                      <span className="month">
                        {
                          monthList[
                            getDate(
                              post.frontmatter[`blog_date_${language}`]
                            )[1]
                          ]
                        }
                      </span>
                      <span className="year">
                        {getDate(post.frontmatter[`blog_date_${language}`])[2]}
                      </span>
                    </div>
                    <div id="affix" className="affix-top">
                      <span className="share">Share this</span>
                      <div id="share" className="sharrre">
                        <ul className="social-links clearfix">
                          <li className="facebook">
                            <a
                              target="_blank"
                              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftrusting-brown-c4f562.netlify.com${post.fields.slug}%2F`}
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="twitter">
                            <a
                              href={`https://twitter.com/intent/tweet/?text=Check%20out%20this%20website!&url=https%3A%2F%2Ftrusting-brown-c4f562.netlify.com${post.fields.slug}%2F&via=HTActive"`}
                              target="_blank"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="googleplus">
                            <a
                              href={`https://plus.google.com/share?url=https%3A%2F%2Ftrusting-brown-c4f562.netlify.com${post.fields.slug}%2F`}
                              target="_blank"
                            >
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
                          {post.frontmatter[`author_${language}`]}
                        </Link>
                      </div>
                    </header>
                    <div
                      className="blogPost-content"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  </div>
                  {}
                </div>
              </article>
            </div>
            <RelatedPost
              slug={post.fields.slug}
              tags={post.frontmatter[`tags_${language}`]}
            />
            {/* sidebar end */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

const mapStateToProps = ({ language }) => {
  return { language }
}
export default connect(
  mapStateToProps,
  null
)(BlogPost)
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
        tags_vn
        author_vn
        blog_title_vn
        blog_date_vn
      }
    }
  }
`
