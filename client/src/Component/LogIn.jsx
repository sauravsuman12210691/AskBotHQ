import React from "react";
import '../CSS/LogIn.css';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

export default function LogIn() {
    return (
        <>
            <div className="LogInPage">
                <header>
                    <Link to="/"><img src={Logo} alt="logo" className="logo" /></Link>
                </header>
                <div className="overall">
                    <div className="socialmedia">
                        <div className="text" id="socmed">Login using social media account to get quick access</div>
                        <div className="button">
                            <button className="but" id="facebook">
                                <a href="#" className="link facebook">Continue with Facebook</a>
                            </button>
                            <button className="but" id="google">
                                <a href="#" className="link google">Continue with Google</a>
                            </button>
                            <button className="but" id="apple">
                                <a href="#" className="link apple">Continue with Apple</a>
                            </button>
                        </div>
                    </div>
                    <div className="log">
                        <div className="text">Login to your account</div>
                        <div className="text">Don't have an account? <Link to='/signup' className="sign">Sign up for free!</Link></div>
                        <form>
                            <label htmlFor="email" id="Username" className="required">Username</label>
                            <input type="email" name="email" id="email" placeholder="Enter Username" required />
                            <label htmlFor="password" className="required">Password</label>
                            <input type="password" name="password" id="password" required placeholder="Enter Password" />
                            <button className="submit" id="logIn">Log In</button>
                        </form>
                        <button className="submit" id="forpass">Forgot Password</button>
                    </div>
                </div>
            </div>
        </>
    );
}