import React, { useState, useEffect } from "react"
import Slide1 from "../../data/images/slider-1.jpg"
import Slide3 from "../../data/images/slider-3.jpg"
import Slide2 from "../../data/images/slider-background.jpg"
import MacIcon from "../../data/images/slider-2.png"

const Banner = () => {
  const listImg = [Slide1, Slide2, Slide3]
  const [counter, setCounter] = useState(0)
  const [progressTime, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(0)
      setCounter(counter =>
        counter === 2 ? (counter = 0) : (counter = counter + 1)
      )
    }, 10000)
    setInterval(() => {
      setTimer(progressTime => (progressTime += 0.1))
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [])
  const handleCounter = value => {
    if (value === "prev") {
      counter === 0 ? setCounter(2) : setCounter(counter - 1)
    } else {
      counter === 2 ? setCounter(0) : setCounter(counter + 1)
    }
  }

  return (
    <div className="banner">
      <div className="slideshow">
        <div
          className="slider-banner-container"
          style={{ backgroundImage: `url(${listImg[counter]})` }}
        >
          <div className="container banner-content">
            {counter === 0 && (
              <div className="banner-left-heading col-sm-9">
                <h2 className="tp-caption default_bg large sfr tp-resizeme start">
                  HT Active - Professional Software Solutions
                </h2>
                <ul>
                  <li>
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">
                      Provide Best Services
                    </span>
                  </li>
                  <li>
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">New Technology</span>
                  </li>
                  <li>
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">Best Quality</span>
                  </li>
                  <li>
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">Support 24/7</span>
                  </li>
                  <li>
                    <span className="dark_gray_bg right-text">
                      And much more ...
                    </span>
                  </li>
                </ul>
              </div>
            )}
            {counter === 1 && (
              <>
                <div className="banner-left-heading col-sm-6">
                  <h2 className="tp-caption default_bg large sfr tp-resizeme start">
                    We Provide All You Need
                  </h2>
                  <ul>
                    <li className="tp-caption ">
                      <span className="icon-check dark_gray_bg">
                        <i className="fa fa-check"></i>
                      </span>
                      <span className="right-text white_bg ">
                        Website Application
                      </span>
                    </li>
                    <li>
                      <span className="icon-check dark_gray_bg">
                        <i className="fa fa-check"></i>
                      </span>
                      <span className="right-text white_bg ">
                        Windows Application
                      </span>
                    </li>
                    <li>
                      <span className="icon-check dark_gray_bg">
                        <i className="fa fa-check"></i>
                      </span>
                      <span className="right-text white_bg ">
                        Mobile Application
                      </span>
                    </li>
                    <li>
                      <span className="icon-check dark_gray_bg">
                        <i className="fa fa-check"></i>
                      </span>
                      <span className="right-text white_bg ">Game</span>
                    </li>
                    <li>
                      <span className="dark_gray_bg right-text">
                        And more software solutions...
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 banner-right-mac">
                  <img src={MacIcon} alt="mac" />
                </div>
              </>
            )}
            {counter === 2 && (
              <div className="banner-left-heading col-sm-6">
                <h2 className="tp-caption default_bg large sfr tp-resizeme start">
                  Satisfaction is What you need
                </h2>
                <ul>
                  <li className="tp-caption ">
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">
                      Clean and unique design
                    </span>
                  </li>
                  <li>
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">
                      After sale support
                    </span>
                  </li>
                  <li>
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">
                      Cross-Browser/ Cross-Platform Compatible
                    </span>
                  </li>
                  <li>
                    <span className="icon-check dark_gray_bg">
                      <i className="fa fa-check"></i>
                    </span>
                    <span className="right-text white_bg ">
                      Young and Brilliant Team
                    </span>
                  </li>
                  <li>
                    <span className="dark_gray_bg right-text">
                      Dont miss out!
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="tp-leftarrow tparrows default round hidearrows"
            onClick={() => handleCounter("prev")}
          >
            <span className="next-symbol"> &lt;</span>
          </div>
          <div
            className="tp-rightarrow tparrows default round hidearrows"
            onClick={() => handleCounter("next")}
          >
            <span className="next-symbol"> &gt;</span>
          </div>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ width: `${progressTime}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
export default Banner
