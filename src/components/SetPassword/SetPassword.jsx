import React from 'react'
import "../scss/form.scss"
import { Link } from "react-router-dom";

function SetPassword() {
    return (
        <>
            <div className="logoName">
                <img src="/assets/Logo@1x.png" alt="zentity" className="zentity" />
                <p><img src="/assets/Slash@1x.png" alt="slash" /> John Cena</p>
            </div>
            <div className="iconText">
                <img src="/assets/Password@1x.png" alt="code" className="code" />
                <h4 className="text">Great, now your<h4>password, please.</h4></h4>
            </div>
            <div className="form">
                <input type="password" className="input" placeholder="Make it strong!" />
                <input type="password" className="input" placeholder="And once again..." />
            </div>
            <div className="buttonContainer">
                <Link to="/" className="button"><strong className="buttonText">Continue</strong><img src="/assets/Next White@1x.png" alt="next" className="next" /></Link>
            </div>
        </>
    )
}

export default SetPassword
