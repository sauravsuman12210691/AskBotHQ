import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import '../CSS/Sign.css'

const length = 10;
export default function SignUp() {
    return (
        <div className="signUp">
            <header>
                <Link to="/"><img src={Logo} alt="logo" className="logo" /></Link>
            </header>
            <div className="signnn">
                <form className="form">
                    <label htmlFor="name" id="Name" className="required">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" required />
                    <label htmlFor="number" id="Number" className="required">Phone Number</label>
                    <input type="number" name="number" id="number" placeholder="Enter your phone number" required maxLength={length} minLength={length} />
                    <label htmlFor="email" id="Email" className="required">Email ID</label>
                    <input type="email" name="email" id="Email" placeholder="Enter your Email ID" required />
                    <label htmlFor="password" className="required">Password</label>
                    <input type="password" name="password" id="password" required placeholder="Enter Password" />
                    <label htmlFor="confirmPassword" className="required">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="cpassword" required placeholder="Confirm Password" />
                    <button className="submit" id="logIn">Sign Up</button>
                </form>
                <div className="text">Already have an Account... <Link to='/login' className="sign">LogIn</Link></div>
            </div>
        </div>
    )
}