import React from 'react'
import "../scss/form.scss"
import { Link } from "react-router-dom";

function Intro() {
    return (
        <>
            <div className="logoName">
                <img src="/assets/Logo@1x.png" alt="zentity" className="zentity" />
                <p><img src="/assets/Slash@1x.png" alt="slash" /> John Cena</p>
            </div>
            <div className="iconText">
                <img src="/assets/Code@1x.png" alt="code" className="code" />
                <h4 className="text">Welcome to testing<h4>assigment at ZENTITY.</h4></h4>
            </div>
            <div className="form">

            </div>
            <div className="buttonContainer">
                <Link to="/setusername" className="button"><strong className="buttonText">Start</strong><img src="/assets/Next White@1x.png" alt="next" className="next" /></Link>
            </div>
        </>
    )
}

export default Intro
