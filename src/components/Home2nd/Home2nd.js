import React, { useState } from 'react';
import { graphql } from 'gatsby';
import '../Home2nd/Home2nd.css'
import ParagraphLeft from '../ParagraphLeft/ParagraphLeft';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Collapse, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TextCenter from '../TextCenter/TextCenter';

const { Panel } = Collapse;
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
export default ({ test }) => {
    const dataUse = test.about.edges[0].node.frontmatter.home_about_vn || {}
    const dataArr = Object.values(dataUse).map(item => item) || []

    const [toggleStatus, setToggleStatus] = useState(0)
    const [panelClicked, setPanelClicked] = useState(false)
    const togglePanel = (status) => {
        toggleStatus !== status ? setToggleStatus(status) : setToggleStatus(0)
        toggleStatus !== status ? setPanelClicked(status) : setPanelClicked(0)

    }
    const fontAwesome = ["fa fa-gavel customwidth", "fa fa-star customwidth", "fa fa-usd customwidth", "fa fa-weixin customwidth"]
    const extraNode = (index) => <i className={fontAwesome[index]}></i>
    const dataRender = dataArr.map((item, index) => (
        // <div className={toggleStatus - 1 === index ? " " : ""}>
        //     <div className={panelClicked - 1 === index ? "panel " : "panel"} onClick={() => togglePanel(index + 1)}>
        //         <span className={panelClicked - 1 === index ? "panel__name " : "panel__name  "}><i className="fa fa-gavel"></i> {item.home_box_title_vn}</span>
        //     </div>
        //     <div className={toggleStatus - 1 === index ? "panel-body show-text test" : "panel-body "}>
        //         <ReactCSSTransitionGroup transitionName={`panel-toggle${index}`}>
        //             {toggleStatus - 1 === index ? <p style={{
        //                 //  padding: '15px 5px' 
        //             }}> {item.home_box_desc_vn} </p> : null}
        //         </ReactCSSTransitionGroup>
        //     </div>   
        // </div>
        <Panel header={item.home_box_title_vn} key={index + 1} extra={extraNode(index)} showArrow={false}>
            <p>{item.home_box_desc_vn}</p>

        </Panel>

    ))
    return (
        <React.Fragment>
            <TextCenter />
            <div class="row home2nd">
                <ParagraphLeft />
                <div className="col-lg-6 col-md-12">
                    <div >
                        <QueueAnim className="demo-content">
                            <Collapse className="panel-group" accordion
                            >
                                {dataRender}
                            </Collapse>
                        </QueueAnim>

                    </div>
                </div>
            </div>
        </React.Fragment>



    );
};


