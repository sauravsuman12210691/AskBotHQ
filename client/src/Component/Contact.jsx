import React from "react";
import '../CSS/Contact.css';

export default function Contact() {
    return (
        <>
            <section className="contact-section">
                <h1>Contact Us</h1>
                <p>Please provide your company details or contact us via phone or video call.</p>
                <div className="contact-info">
                    <div className="contact-card">
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <p>LPU Phagwara Punjab 144411.</p>
                    </div>
                    <div className="contact-card">
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                        <p>askbotHQ8956@gmail.com</p>
                    </div>
                    <div className="contact-card">
                        <span className="material-symbols-outlined">
                            call
                        </span>
                        <p>022-78563214</p>
                    </div>
                </div>
                <div className="soc">
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="formquery">
                    <h1>Apply Online</h1>
                    <form>
                        <div className="formPro">
                            <div className="userinfo">
                                <input type="text" className="userForm" name="name" id="Name" placeholder="Full name" />
                                <input type="email" name="email" id="Email" placeholder="Email" className="userForm" />
                                <input type="text" name="tilte" id="Title" placeholder="Title" className="userForm" />
                                <input type="number" name="phone" id="Number" className="userForm" placeholder="Phone Number" />
                            </div>
                            <div className="userproblem">
                                <textarea name="problem" id="Problem" className="userForm" placeholder="How can we help you?"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Send" className="userForm" id="Submit" />
                    </form>
                </div>
            </section>
        </>
    )
}