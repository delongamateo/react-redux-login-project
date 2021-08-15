import React, {useState} from 'react'
import "../scss/form.scss"
import {Link} from "react-router-dom"

function SetUsername(props) {
    const [username, setUsername] = useState("")
    const [errormessage, setErrorMessage] = useState("")

    const error = () => {
        if (/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(username) === false) {
            setErrorMessage("Ooops! Your username must contain only letters, numbers and spaces.")
        } else if (username.length < 3 || username.length > 20) {
            setErrorMessage("Ooops! Your username must be between 3 and 20 characters long.")
        } else if (username !== props?.user?.user?.displayName) {
            setErrorMessage("Ooops! Your username is not correct.")
        }
    }
    

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
                <input type="text" className="input" placeholder="Here, please!" onChange={(e) => setUsername(e.target.value)}/>
                <p>{errormessage}</p>
            </div>
            <div className="buttonContainer">
                <Link onClick={() => error()} to={username === props?.user?.user?.displayName ? "/setpassword" : "/setusername"} className="button"><strong className="buttonText">Continue</strong><img src="/assets/Next White@1x.png" alt="next" className="next" /></Link>
            </div>
        </>
    )
}

export default SetUsername
