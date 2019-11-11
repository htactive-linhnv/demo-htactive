import React, { useState } from 'react';
import { graphql } from 'gatsby';
import '../Home2nd/Home2nd.css'
export default ({ data }) => {
    const dataUse = data.about.edges[1].node.frontmatter.home_about_vn
    const dataArr = Object.values(dataUse).map(item => item)

    const [toggleStatus, setToggleStatus] = useState(0)
    const [panelClicked, setPanelClicked] = useState(false)
    const togglePanel = (status) => {
        toggleStatus !== status ? setToggleStatus(status) : setToggleStatus(0)
        toggleStatus !== status ? setPanelClicked(status) : setPanelClicked(0)

    }
    const dataRender = dataArr.map((item, index) => (
        <div className={toggleStatus-1 === index  ? " " : ""}>
            <div className={panelClicked-1 === index ? "panel panel-clicked test2" : "panel"} onClick={() => togglePanel(index+1)}>
                <span className="panel__name"><i className="fa fa-gavel"></i> {item.home_box_title_vn}</span>
                <span className="panel__toggle" >{toggleStatus-1 === index  ? " - " : " + "}</span>
            </div>
            <div className={toggleStatus-1 === index ? "toggle-text show-text test" : "toggle-text "}>
                {toggleStatus-1 === index ? <p style={{ padding: '15px 5px' }}> {item.home_box_desc_vn} </p> : null}
            </div>
        </div>
    ))
    return (

        <div style={{ height: 300 }}>
            {dataRender}
        </div>
    );
};

