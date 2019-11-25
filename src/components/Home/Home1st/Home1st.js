import React, { useState, useEffect } from "react"
import TextCenter from "../TextCenter/TextCenter"

import Home1stCard from "./Home1stCard"

const Home1st = ({data}) => {
  const dataUse = data.edges[1].node.frontmatter.home_1st_vn || {}
  const dataArr = Object.values(dataUse).map(item => item) || []
  const dataBox = dataArr.filter((item,index)=> index>1)
  const [scrollY, setScrollY] = useState(0)
  const icon = [
     "fa fa-laptop","fa fa-mobile","fa fa-gamepad"]
  const logit = () => {
    if(window)
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
    <section
      className="main-container "
      style={{ marginTop: 0, backgroundColor: "#f1f1f1" }}
    >
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <TextCenter head={dataArr[1]} description={dataArr[0]} />
              <div className="row list-card">
                {dataBox.map((item, index) => (
                  <Home1stCard
                    scrollY={scrollY}
                    key={index}
                    id={item}
                    icon={icon[index]}
                    title={item[`home_box_title_vn_${index+1}`]}
                    lead={item[`home_box_desc_vn_${index+1}`]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home1st
