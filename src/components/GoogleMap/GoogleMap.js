import React from 'react';

const GoogleMap = () => {
    return (
        <div className="banner" style={{height: '344px', marginTop: '0px',marginBottom:'30px'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.1658816900813!2d108.2364820579333!3d16.048264797223485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d8808e8cef%3A0xb68641142dda5bb7!2zOTEgVsO1IE5oxrAgSMawbmcsIE3hu7kgQW4sIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1479223360893" width="100%" height={400} frameBorder={0} style={{border: 0}} allowFullScreen />
        <br></br>      
      </div>
    );
};

export default GoogleMap;