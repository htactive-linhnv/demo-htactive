import React, {useState} from "react"
import { Link } from "gatsby"
import {connect} from "react-redux"

const CardPort = ({ image, title, content, link, language, changeSlug}) => {
  let slug= language==="vn"?`${link.slice(3,link.length)}`:`${link}`;
  const [animationCard, setAnimationCard]= useState(1)  
  return (
    <div className="col-md-3 col-sm-6 isotope-item fWeb ">
      <div className="image-box slide-in-fwd-center">
        <div className="overlay-container">
          <img src={image} alt={title} />
        </div>
        <div className="image-box-body">
          <h3 className="title">
            <Link to={link} onClick={() => changeSlug(slug)}>
              {title}
            </Link>
          </h3>
          <p className="cutline">{content}</p>
          <Link to={link} className="link" onClick={() => changeSlug(slug)}>
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ language }) => {
  return { language }
}
const mapDispatchToProps = dispatch => {
  return {
    changeSlug: value => dispatch({ type: `CHANGE_SLUG`, slug: value }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardPort)