import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import H from '../CSS/HomePage.module.css';

export default function HomePage() {
    return (
        <div className={H.homePage}>
            <Navbar />
            <div className={H.container}>
                <h1 className={H.title}>Welcome to our website!</h1>
            </div>
            <Footer />
        </div>
    )
}