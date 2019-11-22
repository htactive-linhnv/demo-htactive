import React from "react"
import BannerAnim from "rc-banner-anim"
import {RemoveScrollBar} from 'react-remove-scroll-bar'

const { Element } = BannerAnim
const BgElement = Element.BgElement

const BigSlider = ({ listImg }) => {
  return (
    <>
    <RemoveScrollBar />
    <div className="shield"/>
      <div className="big-slider">
        <BannerAnim autoPlayEffect={false}>
          {listImg.map(item => (
            <Element key={item.id} prefixCls="banner-user-elem">
              <BgElement
                key="bg"
                className="bg"
                style={{
                    top:"20px",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "200px auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              />
            </Element>
          ))}
        </BannerAnim>     
    </div>
    </>
  )
}
export default BigSlider
