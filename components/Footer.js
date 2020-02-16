import React from 'react';
const Footer = () => {
    return (
        <div className="footer">
        <div id="button"></div>
      <div id="container">
      <div id="cont">
      <div className="footer_center">
            <div className = "footer-animation">

             <div className="bg"></div>
              <div className="bg bg2"></div>
              <div className="bg bg3"></div>
            </div>
             <h3>Contact me:</h3>
             <a href="https://www.linkedin.com/in/rui-yuan-5953aa168/"><img className="myContactLogo" src='/icons/linkedin.png'/></a>
             <a href="https://github.com/abc123yuanrui"><img className="myContactLogo" src='/icons/github.png'/></a>
             <a href="https://www.facebook.com/profile.php?id=100013714845427"><img className="myContactLogo" src='/icons/fb.png'/></a>
      </div>
      </div>
      </div>
      </div>
    );
  };
  
export default Footer;