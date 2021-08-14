import React from 'react'
import "../scss/form.scss"
import {Link} from "react-router-dom"

function SetUsername() {
    return (
        <>
            <div className="logoName">
                <img src="/assets/Logo@1x.png" alt="zentity" className="zentity" />
                <p><img src="/assets/Slash@1x.png" alt="slash" /> John Cena</p>
            </div>
            <div className="iconText">
                <img src="/assets/User@1x.png" alt="code" className="code" />
                <h4 className="text">Start by setting up<h4>your username.</h4></h4>
            </div>
            <div className="form">
                <input type="text" className="input" placeholder="Here, please!" />
            </div>
            <div className="buttonContainer">
                <Link to="/setpassword" className="button"><strong className="buttonText">Continue</strong><img src="/assets/Next White@1x.png" alt="next" className="next" /></Link>
            </div>
        </>
    )
}

export default SetUsername
