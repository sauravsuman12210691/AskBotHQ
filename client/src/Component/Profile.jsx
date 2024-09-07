import React, { useEffect, useState } from "react";
import P from '../CSS/Profile.module.css';
import { Link } from "react-router-dom";

export default function Profile() {
    useEffect(() => {
        handleData();

    })
    useEffect(() => {
        if (localStorage.getItem('auth-token') === null) {
            window.location.href = '/';
        }
    })
    const [UserData, setUserData] = useState({
        img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        name: '',
        role: '',
        address: '',
        email: '',
        phone: '',
        links: {
            linkedin: '',
            github: '',
            instagram: '',
            facebook: '',
        }
    })
    const handleData = async (e) => {
        // e.preventDefault();

        // Replace with your API URL
        const apiURL = 'http://localhost:3000/api/auth/dashboard';

        try {
            const response = await fetch(apiURL, {
                method: 'GET',
                headers: {
                    'auth-token': localStorage.getItem('auth-token')
                },

            });

            const data = await response.json();
            console.log(data);

            if (data !== null) {
                UserData.name = data.name;
                UserData.email = data.email;
                // UserData.phone = data.phone;
                // UserData.address = data.address;


            } else {
                // Handle errors
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login');
        }
    };
    const handleLogOut = () => {
        localStorage.removeItem('auth-token');
        window.location.href = '/'
    }


    return (
        <div className={P.Profiles}>
            <div className={P.contain}>
                <div className={P.container}>
                    <div className={P.profileCard}>
                        <div className={P.profileHeader}>
                            <img src={UserData.img} alt="John Doe" className={P.avatar} />
                            <h2>{UserData.name}</h2>
                            <p>{UserData.role}</p>
                            <p>{UserData.address}</p>
                            <div className={P.actions}>
                                <button onClick={handleLogOut} className={`${P.btn} ${P.followBtn}`}>Log Out</button>
                                <Link to='/home'><button className={`${P.btn1} ${P.messageBtn}`}>Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={P.container1}>
                    <div className={P.socialLinks}>
                        <ul>
                            <li>
                                <span className={P.icon}>&#127760;</span>
                                Website <a href={UserData.links.website}>{UserData.links.website}</a>
                            </li>
                            <li>
                                <span className={P.icon}>&#128187;</span>
                                Github <a href={UserData.links.github}>{UserData.links.github}</a>
                            </li>
                            <li>
                                <span className={P.icon}>&#128038;</span>
                                Twitter <a href={UserData.links.twitter}>{UserData.links.twitter}</a>
                            </li>
                            <li>
                                <span className={P.icon}>&#127881;</span>
                                Instagram <a href={UserData.links.instagram}>{UserData.links.instagram}</a>
                            </li>
                            <li>
                                <span className={P.icon}>&#128250;</span>
                                Facebook <a href={UserData.links.facebook}>{UserData.links.facebook}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={P.infoCard}>
                <div className={P.infoItem}>
                    <span className={P.label}>Name</span>
                    <span className={P.value}>{UserData.name}</span>
                </div>
                <div className={P.infoItem}>
                    <span className={P.label}>Email</span>
                    <span className={P.value}>{UserData.email}</span>
                </div>
                <div className={P.infoItem}>
                    <span className={P.label}>Phone</span>
                    <span className={P.value}>{UserData.phone}</span>
                </div>
                <div className={P.infoItem}>
                    <span className={P.label}>Address</span>
                    <span className={P.value}>{UserData.address}</span>
                </div>
                <div className={P.editButtonContainer}>
                    <button className={P.editBtn}>Edit</button>
                </div>
            </div>
        </div>
    );
}