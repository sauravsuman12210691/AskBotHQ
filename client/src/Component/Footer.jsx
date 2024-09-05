import React from "react";
import '../CSS/Footer.css';
import Logo from '../assets/logo.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="logoandadver">
                <img src={Logo} alt="logo" className="logo" />
                <div className="adver">Contact us and start project with us. We will get back to you soon</div>
            </div>
            <div className="footerinfo">
                <div className="a">
                    <div className="navv">Navigation</div>
                    <div className="de">Home</div>
                    <div className="de">About</div>
                    <div className="de">Title</div>
                    <div className="de">Services</div>
                </div>
                <div className="a">
                    <div className="navv">Licence</div>
                    <div className="de">Privacy Policy</div>
                    <div className="de">Copyright</div>
                    <div className="de">Terms of use</div>
                </div>
            </div>
        </div>
    )
}