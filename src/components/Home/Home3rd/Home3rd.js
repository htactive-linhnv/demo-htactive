import React, { useState } from 'react';
import '../Home3rd/Home3rd.css'
import TextCenter from '../TextCenter/TextCenter'
const Home3rd = ({ test }) => {
    const [toggleStatus, setToggleStatus] = useState(0)
    const toggleTab = (status) => {
        toggleStatus !== status ? setToggleStatus(status) : setToggleStatus(0)
    }
    const resetAnimation = () => {
        const element = document.getElementById('tab-pane')
        element.classList.remove("fade-in--quick");
        void element.offsetWidth;
        element.classList.add("fade-in--quick");
    }
    const dataUse = test.why.edges[1].node.frontmatter.home_why_vn || {}
    const dataArr = Object.values(dataUse).map(item => item) || []
    const tabSelect = toggleStatus !== 0 ? dataArr[toggleStatus - 1] : dataArr[0] || { tab_title_vn: "Hello" }

    const navTabs = dataArr.map((item, index) => {
        const position = index + 1
        return (
            <li key={index} onClick={() => {
                toggleTab(position)
                resetAnimation()
            }} className={toggleStatus === position ? "active" : ""}>
                <a role="tab" data-toggle="tab">{item.tab_title_vn}</a>
            </li>
        )
    }
    )

    return (
        <div className="container">
        <TextCenter />
            <div className="vertical hc-tabs col-md-12">
                <div className="arrow hidden-sm hidden-xs"><i className="fa fa-caret-up" /></div>
                <ul className="nav nav-tabs" role="tablist">
                    {navTabs}
                </ul>
                <div className="tab-content tab-custom">
                    <div className="tab-pane fade in active fade-in--quick " id="tab-pane">
                        <h1 className="text-center title">{tabSelect.tab_title_vn || null}</h1>
                        <div className="row">
                            <div className="col-md-12">
                                <p>{tabSelect.tab_desc_vn || null}}</p>
                                <img src="http://htactive.com/assets/voc/images/studio.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home3rd;