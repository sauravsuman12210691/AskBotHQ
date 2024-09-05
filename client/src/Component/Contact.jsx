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
                        <h3>India</h3>
                        <p>LPU phagwara Punjab 800023.</p>
                    </div>
                    <div className="contact-card">
                        <h3>Email</h3>
                        <p>vedsinghpratap@gmail.com</p>
                        <p>Suravsuman320@gmail.com</p>
                        <p>Aditya03125kumar@gmail.com</p>
                    </div>
                    <div className="contact-card">
                        <h3>Phone</h3>
                        <p>9798741907</p>
                        <p>9113198281</p>
                        <p>9507909802</p>
                    </div>
                </div>

                <div className="apply-online">
                    <h2>Apply online</h2>
                    <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Title" />
                        <input type="tel" placeholder="Phone number" />
                        <textarea placeholder="How we can help you"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}