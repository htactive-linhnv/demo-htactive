import React from "react"
import CardBlog from "./blog-card"
import { ModalProvider } from "react-modal-hook"

const BlogContent = ({posts}) => {
  
  const data = [
    {
      src:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      postday: "15",
      postmonth: "Jun 2018",
      cardTitle: " Những Material component tuyệt vời trong React Native.",
      author: "Mạnh Nguyễn",
      cardContent: "Những Material component tuyệt vời trong React Native.",
      commend: "22 comment",
      tag: "tag1",
      linkImg:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      linkBlog: "/blogPost",
    }
  ]
  return (
    <ModalProvider>
      <section className="main-container" style={{ marginTop: "10px" }}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-12">
              <div className="masonry-grid row">
                {posts.map((item, index) => (
                  <CardBlog
                    key={index}
                    src={item.node.frontmatter[`thumbnail_${"en"}`]}
                    postday={item.node.frontmatter[`blog_date_${"en"}`].substring(8,10)}
                    postmonth={item.node.frontmatter[`blog_date_${"en"}`].substring(5,7)}
                    postyear={item.node.frontmatter[`blog_date_${"en"}`].substring(0,4)}
                    cardTitle={item.node.frontmatter[`blog_title_${"en"}`]}
                    author={item.node.frontmatter[`author_${'en'}`]}
                    cardContent={item.node.frontmatter[`blog_description_${'en'}`]}
                    linkImg={item.node.frontmatter[`thumbnail_${'en'}`]}
                    linkBlog={item.node.fields.slug}
                  />
                ))}
              </div>
              {/* masonry grid end */}
            </div>
          </div>
        </div>
      </section>
    </ModalProvider>
  )
}
export default BlogContent
