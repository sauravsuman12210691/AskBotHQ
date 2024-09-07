import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import '../CSS/Sign.css';

const length = 10;

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Clear previous errors
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                setSuccess("Registration successful! Please log in.");
                setFormData({
                    name: '',
                    number: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            } else {
                const errorResult = await response.json();
                setError(errorResult.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            setError("Network error. Please try again.");
        }
    };

    return (
        <div className="signUp">
            <header>
                <Link to="/"><img src={Logo} alt="logo" className="logo" /></Link>
            </header>
            <div className="signnn">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name" id="Name" className="required">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="number" id="Number" className="required">Phone Number</label>
                    <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="Enter your phone number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        maxLength={length}
                        minLength={length}
                    />
                    <label htmlFor="email" id="Email" className="required">Email ID</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password" className="required">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="confirmPassword" className="required">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button className="submit" type="submit">Sign Up</button>
                </form>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
                <div className="text">Already have an Account... <Link to='/login' className="sign">Log In</Link></div>
            </div>
        </div>
    );
}
