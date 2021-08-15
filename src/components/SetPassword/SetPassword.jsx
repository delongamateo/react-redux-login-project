import React, {useState} from 'react'
import "../scss/form.scss"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

function SetPassword() {
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [errormessage, setErrorMessage] = useState("")

    const user = useSelector(selectUser)
    
    const error = () => {
        if (passwordRepeat !== password) {
            setErrorMessage("Ooops! Those passwords don't match. Try it again, please")
        } else if (password.length < 9) {
            setErrorMessage("Ooops! That password is too weak. Password must be atleast 9 symbols long.")
        } else if (password !== user.user.password) {
            setErrorMessage("Ooops! Your password is incorrect.")
        }
    }
   
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
                <input type="password" className="input" placeholder="Make it strong!" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" className="input" placeholder="And once again..." onChange={(e) => setPasswordRepeat(e.target.value)}/>
                <p>{errormessage}</p>
            </div>
            <div className="buttonContainer">
                <Link onClick={() => error()} to={password === user?.user?.password && passwordRepeat === user?.user?.password ? "/userprofile" : "/setpassword"} className="button"><strong className="buttonText">Continue</strong><img src="/assets/Next White@1x.png" alt="next" className="next" /></Link>
            </div>
        </>
    )
}

export default SetPassword
