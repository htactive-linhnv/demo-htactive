import React, { useState, useEffect } from 'react';
import { connect, dispatch } from 'react-redux'
import '../layoutCss/assets/plugins/style-switcher/style-switcher.css'
const StyleSwitcher = ({ data, color, footer, changeColor, changeFooter, changeLayout }) => {
    const skinCSS = document.getElementById('skinCSS')
    console.log("YOO");
    const changeColorClass = (color) => {
        changeColor(color);
    }
    if (localStorage.getItem('color')) {
        if (skinCSS) setTimeout(() => skinCSS.href = `skins/${localStorage.getItem('color')}.css`, 200)
        changeColorClass(localStorage.getItem('color'))
    }
    const [toggle, setToggle] = useState(true)
    const [loading, setLoading] = useState(false)
    const colorList = [
        'red', 'blue', 'green', 'orange', 'pink', 'purple', 'yellow'
    ]
    const colorSelect = colorList.map( (item, index) =>
        <li key={index} className={`${item} ` + (item === color ? 'selected' : '')}
            data-style={item}
            title={item}
            onClick={() => {
                localStorage.setItem("color", item)
                if (skinCSS) setTimeout(() => skinCSS.href = `skins/${item}.css`, 200)
                changeColorClass(item)
            }} />
   
    )
    const changeLayoutClass = (layout) => {
        let body = document.getElementsByTagName("BODY")[0]
        body.className = layout
        changeLayout(layout)
    }
    const toggleStyle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <span className="trigger" ><i className={"fa fa-linux " + (toggle ? "fade-out" : "fade-in")} onClick={toggleStyle}></i></span>
            <div className={"style-switcher opened" + (toggle ? " slide-in-left " : " slide-out-left ")} style={{ left: '0px' }}>
                <div className="header">
                    <span className="trigger" ><i className="fa fa-times" onClick={toggleStyle} /></span>
                    <h2>Style Switcher</h2>
                </div>
                <div className="clearfix body">
                    <h3>Predifined Colors</h3>
                    <ul className="styleChange">
                        {colorSelect}
                    </ul>
                    <hr />
                    <h3>Footer</h3>
                    <ul className="footerChange">
                        <li className="dark" data-style="dark" title="dark" onClick={() => changeFooter('')}><i className="fa fa-square-o" /> Dark</li>
                        <li className="light selected" data-style="light" title="light" onClick={() => changeFooter('light')}><i className="fa fa-square-o" /> Light</li>
                    </ul>
                    <hr />
                    <h3>Layout Mode</h3>
                    <ul className="layoutChange">
                        <li className={"wide" + (layout ==="wide" ? "selected" : "")} onClick={() => changeLayoutClass("wide")} >
                            <i className="fa fa-arrow-left pr-10" data-style="wid" title="wide" />
                            Wide
                            <i className="fa fa-arrow-right pl-10" />
                        </li>
                        <li className={"boxed" + (layout ==="wide" ? "" : "selected")}  data-style="boxed" title="boxed" onClick={() => changeLayoutClass("boxed")} >
                            <i className="fa fa-arrow-right pr-10" />
                            Boxed
                            <i className="fa fa-arrow-left pl-10" />
                        </li>
                    </ul>
                    <h3>Patterns</h3>
                    <ul className="patternChange">
                        <li className="pattern-0" data-style="pattern-0" title="white background" />
                        <li className="pattern-1" data-style="pattern-1" title="pattern-1" onClick={() => changeLayoutClass("boxed pattern-1")} />
                        <li className="pattern-2" data-style="pattern-2" title="pattern-2" onClick={() => changeLayoutClass("boxed pattern-2")} />
                        <li className="pattern-3" data-style="pattern-3" title="pattern-3" />
                        <li className="pattern-4" data-style="pattern-4" title="pattern-4" />
                        <li className="pattern-5 selected" data-style="pattern-5" title="pattern-5" onClick={() => changeLayoutClass("boxed pattern-5")} />
                        <li className="pattern-6" data-style="pattern-6" title="pattern-6" />
                        <li className="pattern-7" data-style="pattern-7" title="pattern-7" onClick={() => changeLayoutClass("boxed pattern-7")} />
                        <li className="pattern-8" data-style="pattern-8" title="pattern-8" onClick={() => changeLayoutClass("boxed pattern-8")} />
                        <li className="pattern-9" data-style="pattern-9" title="pattern-9" />
                    </ul>
                    <ul className="resetAll">
                        <li className="btn btn-default btn-sm" title="Reset">Reset All</li>
                    </ul>
                </div>
            </div>



        </div >
    );
};
const mapStateToProps = ({ color, footer }) => {
    return { color, footer }
}
const mapDispatchToProps = dispatch => {
    return {
        changeFooter: (footer) => dispatch({ type: `CHANGE_FOOTER`, footer: footer }),
        changeColor: (color) => dispatch({ type: `CHANGE_COLOR`, color: color }),
        changeLayout: (layout) => dispatch({ type: `CHANGE_LAYOUT`, layout: layout }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StyleSwitcher)
