import React from "react";
import plane from '../assets/plane.png';
import { Link } from "react-router-dom";
import '../CSS/Error404.css'

export default function Error404() {
    return (
        <div className="error404">
            <div className="error">
                <div className="sky">
                    <h2>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h2>
                    <div className="grass"></div>
                    <img src={plane} alt="plane" className="plane" />
                </div>
                <div className="field">
                    <h2>Opps...looks like you got lost</h2>
                    <Link to='/' className="a">Go Home</Link>
                </div>
            </div>
        </div>
    )
}
