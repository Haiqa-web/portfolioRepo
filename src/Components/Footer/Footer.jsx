import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
           <div className="logo-text1 font-extrabold text-2xl cursor-pointer">
      Haiqa
    </div>
          <p>
            2 years of experience building responsive, user-friendly web applications Skilled in HTML, CSS, JavaScript, and modern UI libraries
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Haiqa Khan. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
