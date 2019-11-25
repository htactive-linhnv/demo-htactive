import React, { useState } from "react"
import { Link } from "gatsby"
import "../Blog/blog-card.css"
import { useModal } from "react-modal-hook"
import ReactModal from "react-modal"
import { RemoveScrollBar } from "react-remove-scroll-bar"
import { connect } from "react-redux"

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
  toggleOverlay
}) => {
  const [open, setOpen] = useState(false)
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <div
        style={{ width: "100%" }}
        onClick={() => {
          hideModal()
          setOpen(false)
          toggleOverlay(false)
        }}
      >
        <div>&nbsp;</div>
        <img src={src}></img>
      </div>
    </ReactModal>
  ))
  return (
    <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
      {open && <RemoveScrollBar />}
      <article className="clearfix blogpost">
        <div className="overlay-container blog-overlay">
          <button
            className="overlay-btn"
            style={{
              position: "absolute",
              top: "86px",
              left: "180px",
              zIndex: "10",
              width: 50,
              height: 30,
              background: "transparent",
              border: "none",
              color: "transparent",
            }}
            onClick={() => {
              showModal()
              setOpen(true)
              toggleOverlay(true)
            }}
          >
            Click
          </button>
          <Link
            to={linkBlog}
            className="link-btn"
            style={{
              position: "absolute",
              top: "86px",
              left: "130px",
              zIndex: "10",
              width: 50,
              height: 30,
              background: "transparent",
              border: "none",
              color: "transparent",
            }}
          ></Link>
          <img
            src={src}
            alt="Những Material component tuyệt vời trong React Native."
          />
          <div className={"overlay "}>
            <div className="overlay-links">
              <Link to={"/"}>
                <i className="fa fa-link" />
              </Link>
              <a href={"/"} className="popup-img-single" title="image title">
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
                <a href="blogPost" class="post-title">{cardTitle}</a>
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
          <Link className="pull-right link" to={linkBlog}>
            <span>Read more</span>
          </Link>
        </footer>
      </article>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    toggleOverlay: open => dispatch({ type: `TOGGLE_OVERLAY`, open: open }),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(CardBlog)
