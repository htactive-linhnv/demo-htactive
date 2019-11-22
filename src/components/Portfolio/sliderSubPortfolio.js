import React, { useState, useEffect, useRef } from "react"

import htImg1 from "../../data/images/htactive-1.png"
import htImg2 from "../../data/images/htactive-2.png"
import htImg3 from "../../data/images/htactive-3.png"

const SubSlider = () => {
  const [item, setItem] = useState(1)
  const listImg = [
    { name: htImg1, id: 1 },
    { name: htImg2, id: 2 },
    { name: htImg3, id: 3 },
  ]
  const prevItemRef = useRef()
  useEffect(() => {
    prevItemRef.current = item
  })
  const prevItem = prevItemRef.current

  return (
    <div className="tab-pane" style={{ width: "600px" }}>
      <div
        className="owl-carousel content-slider-with-controls-bottom owl-theme"
        style={{ opacity: 1, display: "block" }}
      >
        <div className="owl-wrapper-outer">
          <div
            className="owl-wrapper"
            style={{ width: "2160px", left: "0px", display: " block" }}
          >
            {item === 1 && (
              <div
                className={`slide-item ${
                  prevItem < item ? "fade-in-left-1" : "fade-in-right-1"
                }`}
                style={{ width: "360px" }}
              >
                <div className="overlay-container">
                  <img src={htImg1} alt="HT Active 1" />
                  <a
                    href={htImg1}
                    className="popup-img overlay"
                    title="HT Active 1"
                  >
                    <i className="fa fa-search-plus" />
                  </a>
                </div>
              </div>
            )}
            {item === 2 && (
              <div
                className={`slide-item ${
                  prevItem < item ? "fade-in-left-1" : "fade-in-right-1"
                }`}
                style={{ width: "360px" }}
              >
                <div className="overlay-container">
                  <img src={htImg2} alt="HT Active 2" />
                  <a
                    href={htImg2}
                    className="popup-img overlay"
                    title="HT Active 2"
                  >
                    <i className="fa fa-search-plus" />
                  </a>
                </div>
              </div>
            )}
            {item === 3 && (
              <div
                className={`slide-item ${
                  prevItem < item ? "fade-in-left-1" : "fade-in-right-1"
                }`}
                style={{ width: "360px" }}
              >
                <div className="overlay-container">
                  <img src={htImg3} alt="HT Active 3" />
                  <a
                    href={htImg3}
                    className="popup-img overlay"
                    title="HT Active 3"
                  >
                    <i className="fa fa-search-plus" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="owl-controls clickable">
          <div className="owl-pagination">
            {listImg.map(img => (
              <div
                key={img.id}
                className={`owl-page ${item === img.id ? "active" : ""}`}
                onClick={() => setItem(img.id)}
              >
                <span></span>
              </div>
            ))}
          </div>
          <div className="owl-buttons">
            <div
              className="owl-prev"
              onClick={() => setItem(item === 1 ? 3 : item - 1)}
            >
              <span>&lt;</span>
            </div>
            <div
              className="owl-next"
              onClick={() => setItem(item === 3 ? 1 : item + 1)}
            >
              <span>&gt;</span>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}
export default SubSlider
