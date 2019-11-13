import React, { useEffect } from 'react'
import '../FooterTop/FooterTop.css'
const FooterTop = () => {
    const img1 = 'http://htactive.com/assets/voc/images/client-1.png'
    const img2 = 'http://htactive.com/assets/voc/images/client-2.png'
    const img3 = 'http://htactive.com/assets/voc/images/client-3.png'
    const img4 = 'http://htactive.com/assets/voc/images/client-4.png'
    const img5 = 'http://htactive.com/assets/voc/images/client-5.png'
    const img6 = 'http://htactive.com/assets/voc/images/client-6.png'
    const img7 = 'http://htactive.com/assets/voc/images/client-7.png'
    useEffect(() => {
            const element = document.getElementById('float-img')
            let count = 1
            setInterval(() => {
                if(count<5) {
                    element.style.transform = `translate3d(-${count*140}px, 0px, 0px)`
                }
                else {
                    count=1
                }
                count++
            },2000)
           
    },[])
    return (
        <div className="section text-muted footer-top clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="owl-carousel clients owl-theme" style={{ opacity: 1, display: 'block' }}>
                            <div className="owl-wrapper-outer"><div id="float-img" className="owl-wrapper " style={{ width: '2336px', left: '0px', display: 'block', transition: 'all 1000ms ease 0s' }}><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img1} alt="" /></a>
                            </div></div><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img2} alt="" /></a>
                            </div></div><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img3} alt="" /></a>
                            </div></div><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img4} alt="" /></a>
                            </div></div><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img5} alt="" /></a>
                            </div></div><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img6} alt="" /></a>
                            </div></div><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img7} alt="" /></a>
                            </div></div><div className="owl-item" style={{ width: '146px' }}><div className="client">
                                <a href="#"><img src={img1} alt="" /></a>
                            </div></div></div></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <blockquote className="inline">
                            <p className="margin-clear">Design is not just what it looks like and feels like. Design is how it works.</p>
                            <footer><cite title="Source Title">Steve Jobs </cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop