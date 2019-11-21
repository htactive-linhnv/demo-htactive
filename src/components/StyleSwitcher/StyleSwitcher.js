
  
import React, { useState, useEffect } from "react"
import { connect, dispatch } from "react-redux"
import "../layoutCss/assets/plugins/style-switcher/style-switcher.css"
const StyleSwitcher = ({
  data,
  color,
  footer,
  mode,
  changeColor,
  changeFooter,
  changeLayout,
}) => {
  let skinCSS = document.getElementById("skinCSS")
  const [toggle, setToggle] = useState(3)
  const colorList = [
    "red",
    "blue",
    "green",
    "orange",
    "pink",
    "purple",
    "yellow",
  ]
  const changeColorClass = color => {
    if (skinCSS) setTimeout(() => (skinCSS.href = `skins/${color}.css`), 200)
    localStorage.setItem("color", color)
    changeColor(color)
  }
  const colorSelect = colorList.map(item => (
    <li
      className={`${item} ` + (item === color ? "selected" : "")}
      data-style={item}
      title={item}
      onClick={() => {
        changeColorClass(item)
      }}
    />
  ))
  const changeLayoutClass = layout => {
    let body = document.getElementsByTagName("BODY")[0]
    body.className = layout
    changeLayout(layout)
  }
  const toggleStyle = type => {
    setToggle(type)
  }
  const resetAll = () => {
    changeColor("red")  
    changeLayoutClass("wide")
    changeFooter("")
    if (skinCSS) setTimeout(() => (skinCSS.href = `skins/red.css`), 150)
    localStorage.setItem("color", color)
  }
  return (
    <div>
      <span className="trigger">
        <i
          className={"fa fa-gears " + (toggle === 2 ? "fade-out" : "fade-in")}
          onClick={() => toggleStyle(2)}
        ></i>
      </span>
      <div
        className={
          "style-switcher opened" +
          (toggle === 2 ? " slide-in-left " : " slide-out-left ") +
          (toggle === 3 ? "hideStyleSwitcher" : "")
        }
        style={{ left: "0px" }}
      >
        <div className="header">
          <span className="trigger">
            <i className="fa fa-times" onClick={() => toggleStyle(1)} />
          </span>
          <h2>Style Switcher</h2>
        </div>
        <div className="clearfix body">
          <h3>Predifined Colors</h3>
          <ul className="styleChange">{colorSelect}</ul>
          <hr />
          <h3>Footer</h3>
          <ul className="footerChange">
            <li
              className={"dark " + (footer === "" ? "selected" : "")}
              data-style="dark"
              title="dark"
              onClick={() => changeFooter("")}
            >
              <i className="fa fa-square-o" /> Dark
            </li>
            <li
              className={"light " + (footer === "light" ? "selected" : "")}
              data-style="light"
              title="light"
              onClick={() => changeFooter("light")}
            >
              <i className="fa fa-square-o" /> Light
            </li>
          </ul>
          <hr />
          <h3>Layout Mode</h3>
          <ul className="layoutChange">
            <li
              className={"wide " + (mode === "wide" ? "selected" : "")}
              onClick={() => changeLayoutClass("wide")}
            >
              <i
                className="fa fa-arrow-left pr-10"
                data-style="wid"
                title="wide"
              />
              Wide
              <i className="fa fa-arrow-right pl-10" />
            </li>
            <li
              className={"boxed " + (mode.includes("boxed") ? "selected" : "")}
              data-style="boxed"
              title="boxed"
              onClick={() => changeLayoutClass("boxed")}
            >
              <i className="fa fa-arrow-right pr-10" />
              Boxed
              <i className="fa fa-arrow-left pl-10" />
            </li>
          </ul>
          <h3>Patterns</h3>
          <ul className="patternChange">
            <li
              className={"pattern-0" + (mode.includes("0") ? " selected" : "")}
              data-style="pattern-0"
              title="white background"
            />
            <li
              className={"pattern-1" + (mode.includes("1") ? " selected" : "")}
              data-style="pattern-1"
              title="pattern-1"
              onClick={() => changeLayoutClass("boxed pattern-1")}
            />
            <li
              className={"pattern-2" + (mode.includes("2") ? " selected" : "")}
              data-style="pattern-2"
              title="pattern-2"
              onClick={() => changeLayoutClass("boxed pattern-2")}
            />
            <li
              className={"pattern-3" + (mode.includes("3") ? " selected" : "")}
              data-style="pattern-3"
              title="pattern-3"
              onClick={() => changeLayoutClass("boxed pattern-3")}
            />
            <li
              className={"pattern-4" + (mode.includes("4") ? " selected" : "")}
              data-style="pattern-4"
              title="pattern-4"
              onClick={() => changeLayoutClass("boxed pattern-4")}
            />
            <li
              className={"pattern-5" + (mode.includes("5") ? " selected" : "")}
              data-style="pattern-5"
              title="pattern-5"
              onClick={() => changeLayoutClass("boxed pattern-5")}
            />
            <li
              className={"pattern-6" + (mode.includes("6") ? " selected" : "")}
              data-style="pattern-6"
              title="pattern-6"
              onClick={() => changeLayoutClass("boxed pattern-6")}
            />
            <li
              className={"pattern-7" + (mode.includes("7") ? " selected" : "")}
              data-style="pattern-7"
              title="pattern-7"
              onClick={() => changeLayoutClass("boxed pattern-7")}
            />
            <li
              className={"pattern-8" + (mode.includes("8") ? " selected" : "")}
              data-style="pattern-8"
              title="pattern-8"
              onClick={() => changeLayoutClass("boxed pattern-8")}
            />
            <li
              className={"pattern-9" + (mode.includes("9") ? " selected" : "")}
              data-style="pattern-9"
              title="pattern-9"
              onClick={() => changeLayoutClass("boxed pattern-9")}
            />
          </ul>
          <ul className="resetAll">
            <li
              className="btn btn-default btn-sm"
              onClick={resetAll}
              title="Reset"
            >
              Reset All
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ color, footer, mode }) => {
  return { color, footer, mode }
}
const mapDispatchToProps = dispatch => {
  return {
    changeFooter: footer => dispatch({ type: `CHANGE_FOOTER`, footer: footer }),
    changeColor: color => dispatch({ type: `CHANGE_COLOR`, color: color }),
    changeLayout: mode => dispatch({ type: `CHANGE_LAYOUT`, mode: mode }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleSwitcher)

