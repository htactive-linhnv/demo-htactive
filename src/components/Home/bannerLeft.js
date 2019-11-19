import React from "react"



class BannerLeft extends React.Component {
    constructor() {
        super();
        this.state = {
            fadeOut: false
        }
    }
    componentDidMount() {
        this.timerID = setTimeout(() => {
            this.setState({
                fadeOut: true
            })
        }, 9000);
    }
    componentWillUnmount() {
        clearTimeout(this.timerID)
    }

    render() {
        const { title, lead, more } = this.props;
        const { fadeOut } = this.state;
        const leads = lead.split("+")
        return (
            <div className="banner-left-heading ">
                <h2 className={`banner-title default_bg  ${fadeOut ? "fade-out-right-1" : ""}`}>
                    {title}
                </h2>
                <ul>
                    {leads.map((item, index) => (
                        <li key={index}>
                            <span className={`icon-check dark_gray_bg tp-resizeme  ${fadeOut ? `fade-out-left-${index + 1}` : `fade-in-left-${index + 1}`}`}>
                                <i className="fa fa-check"></i>
                            </span>
                            <span className={`right-text white_bg tp-resizeme  ${fadeOut ? `fade-out-right-${index + 1}` : `fade-in-right-${index + 1}`}`}>
                                {item}
                            </span>
                        </li>
                    ))}
                    <li>
                        <span className={`dark_gray_bg right-text tp-resizeme  ${fadeOut ? "fade-out-right-4" : "fade-in-left-5"}`}>
                            {more}
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}





export default BannerLeft