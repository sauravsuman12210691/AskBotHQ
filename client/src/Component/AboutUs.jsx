import React from "react";
import '../CSS/About.css'

export default function AboutUs({ item }) {
    return (
        <>
            <h1 className="aboutHead">About Us</h1>
            <div className="aboutData">
                {item.map((val) => (
                    <div className="container" key={val.id}>
                        <div className="card">
                            <div className="lines"></div>
                            <div className="imgBx">
                                <img src={val.imgSrc} alt="nothing" height="100cm" width="100cm" />
                            </div>
                            <div className="content">
                                <div className="detail">
                                    <div className="name">{val.name}</div>
                                    <div className="number">{val.pnumber}</div>
                                    <div className="email">{val.email}</div>
                                    <div className="role">({val.role})</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}