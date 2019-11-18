import React from 'react';
import { graphql } from 'gatsby';
import '../Home2nd/Home2nd.css'
import ParagraphLeft from '../Home2nd/ParagraphLeft/ParagraphLeft';
import { Collapse } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TextCenter from '../TextCenter/TextCenter';
const { Panel } = Collapse;
export default ({ color,test }) => {
    const dataUse = test.about.edges[1].node.frontmatter.home_about_vn || {}
    const dataArr = Object.values(dataUse).map(item => item) || []
    const fontAwesome = ["fa fa-gavel customwidth", "fa fa-star customwidth", "fa fa-usd customwidth", "fa fa-weixin customwidth"]
    const extraNode = (index) => <i className={fontAwesome[index]}></i>
    const dataRender = dataArr.map((item, index) => (
        <Panel header={item.home_box_title_vn} key={index + 1} extra={extraNode(index)} showArrow={false}>
            <p>{item.home_box_desc_vn}</p>
        </Panel>
    ))
    return (
        <React.Fragment>
            <TextCenter />
            <div class="row home2nd">
                <ParagraphLeft color={color}/>
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


