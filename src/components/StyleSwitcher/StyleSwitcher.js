import React, { useState } from 'react';
import { connect, dispatch } from 'react-redux'
const StyleSwitcher = ({ data, color, footer, changeColor, changeFooter, changeLayout }) => {
    const [toggle, setToggle] = useState(false)
    const skinCSS = document.getElementById('skinCSS')
    const colorList = [
        'red', 'blue', 'green', 'orange', 'pink', 'purple', 'yellow', 'blue', 'pink','purple', 'red'
    ]
    const colorSelect = colorList.map((item, index) => <li key={index} className={item} data-style={item} title={item} onClick={() => changeColor(item)} />
    )
    const changeLayoutClass = (layout) => {
        let body = document.getElementsByTagName("BODY")[0]
        body.className = layout
        changeLayout(layout)
    }
    const toggleStyle = () => {
        setToggle(!toggle)
    }
    if (skinCSS) setTimeout(() => skinCSS.href = `skins/${color}.css`, 200)
    return (
        <div>
            <a className={toggle ? "trigger fade-out" : "trigger fade-in"} href="#"><i className="fa fa-linux" onClick={toggleStyle}></i></a>
            <div className={"style-switcher opened" + (toggle ? " slide-in-left " : " slide-out-left ")} style={{ left: '0px' }}>
                <div className="header">
                    <a className="trigger" href="/"><i className="fa fa-times" onClick={toggleStyle} /></a>
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
                        <li className="wide" onClick={() => changeLayoutClass("wide")} >
                            <i className="fa fa-arrow-left pr-10" />Wide<i className="fa fa-arrow-right pl-10" />
                        </li>
                        <li className="boxed selected" onClick={() => changeLayoutClass("boxed")} >
                            <i className="fa fa-arrow-right pr-5" />Boxed<i className="fa fa-arrow-left pl-5" />
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
