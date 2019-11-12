import React from 'react';

const ParagraphLeft = () => {
    return (
        <div class="col-md-6">
            <h2 class="title">Meet the team - HT Active</h2>
            <div class="row">
                <div class="col-md-6">
                    <img class="imgAboutus" src="/assets/voc/images/section-image-2.png" alt="" />
                    <img class="imgAboutus" src="http://htactive.com/assets/voc/images/section-image-2.png" alt="" />
                </div>
                <div class="col-md-6">
                    <p>We work on the services, product and comunication. We love what we do, and who we do it with. To HT Active, all customers are friends.</p>
                </div>
            </div>
            <p>HT Active wouldn’t be what it is without the incredible and loving contributions of our member. Thanks to everyone who’s put their heart and their energy into this community.</p>
            <a href="/about" class="btn btn-white">Read More</a>
            <div class="space hidden-md hidden-lg"></div>
        </div>
    );
};

export default ParagraphLeft;