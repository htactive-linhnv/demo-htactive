import React from "react"

const CardBlog = ({
  src,
  postday,
  postmonth,
  cardTitle,
  cardContent,
  author,
  commend,
  tag,
  linkBlog,
  linkImg,
}) => {
  return (
    <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
      <article className="clearfix blogpost">
        <div className="overlay-container blog-overlay">
          <img
            src={src}
            alt="Những Material component tuyệt vời trong React Native."
          />
          <div className="overlay">
            <div className="overlay-links">
              <a href={linkBlog}>
                <i className="fa fa-link" />
              </a>
              <a
                href={linkImg}
                className="popup-img-single"
                title="image title"
              >
                <i className="fa fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="blogpost-body">
          <div className="post-info">
            <span className="day">{postday}</span>
            <span className="month">{postmonth}</span>
          </div>
          <div className="blogpost-content">
            <header>
              <h2 className="title">
                <a href="blogPost">{cardTitle}</a>
              </h2>
              <div className="submitted">
                <i className="fa fa-user pr-5" /> by{" "}
                <a href="/blog">{author}</a>
              </div>
            </header>
            <p>{cardContent}</p>
          </div>
        </div>
        <footer className="clearfix hidden">
          <ul className="links pull-left hidden">
            <li>
              <i className="fa fa-comment-o pr-5" />{" "}
              <a href="/blog">{commend}</a> |
            </li>
            <li>
              <i className="fa fa-tags pr-5" /> <a href="/blog">{tag}</a>
            </li>
          </ul>
          <a className="pull-right link" href={linkBlog}>
            <span>Read more</span>
          </a>
        </footer>
      </article>
    </div>
  )
}
export default CardBlog
