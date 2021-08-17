import React, {useState, useEffect} from 'react'
import "../scss/profile.scss"
import { useSelector, useDispatch } from 'react-redux'
import { updateName, updateSurname, updateUsername, updateAddress, updateAddressNumber, updateCity, updatePostalCode, updateEmail, updatePhone, updateSocialMedia } from '../../features/user/userSlice'
import { Link } from "react-router-dom";


function Profile() {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [showNameInput, setShowNameInput] = useState(false)
    const [username, setUsername] = useState("")
    const [showUsernameInput, setShowUsernameInput] = useState(false)
    const [address, setAddress] = useState("")
    const [addressNumber, setAddressNumber] = useState("")
    const [showAddressInput, setShowAddressInput] = useState(false)
    const [city, setCity] = useState("")
    const [showCityInput, setShowCityInput] = useState(false)
    const [postalCode, setPostalCode] = useState("")
    const [showPostalCodeInput, setShowPostalCodeInput] = useState(false)
    const [email, setEmail] = useState("")
    const [showEmailInput, setShowEmailInput] = useState(false)
    const [phone, setPhone] = useState("")
    const [showPhoneInput, setShowPhoneInput] = useState(false)
    const [socialMedia, setSocialMedia] = useState("")
    const [showSocialMediaInput, setShowSocialMediaInput] = useState(false)
    
    const changeName = () => {
        dispatch(updateName(name))
    }
    const changeSurname = () => {
        dispatch(updateSurname(surname))
    }
    const changeUsername = () => {
        dispatch(updateUsername(username))
    }
    const changeAddress = () => {
        dispatch(updateAddress(address))
    }
    const changeAddressNumber = () => {
        dispatch(updateAddressNumber(addressNumber))
    }
    const changeCity = () => {
        dispatch(updateCity(city))
    }
    const changePostalCode = () => {
        dispatch(updatePostalCode(postalCode))
    }
    const changeEmail = () => {
        dispatch(updateEmail(email))
    }
    const changePhone = () => {
        dispatch(updatePhone(phone))
    }
    const changeSocialMedia = () => {
        dispatch(updateSocialMedia(socialMedia))
    }

    return (
        <div className="profileContainer">
            <div className="navbar">
                <div className="logo">
                    <Link to="/setusername"><img src="/assets/Back@1x.png" alt="back"/></Link>
                    <img src="/assets/Logo@1x.png" alt="zentity" className="zentity" />
                    <img src="/assets/Selfie@1x.png" alt="selfie" className="selfie"/>
                </div>
                <p className="route"><img src="/assets/Slash@1x.png" alt="slash" /> Edit your profile</p>
            </div>
            <div className="userInfo">
                <div className="infoCard">
                    {!showNameInput &&
                        <>
                        <div className="info">
                            <p className="title">Name</p>
                            <h4 className="infoData">{`${user?.user?.name} ${user?.user?.surname}`}</h4>
                        </div>
                        <div className="actions">
                            <button onClick={() => setShowNameInput(true)} className="edit">Edit</button>
                        </div>
                        </>
                    }
                    {showNameInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setName(e.target.value)} className="changeDataInput" value={name} />
                            <input type="text" onChange={e => setSurname(e.target.value)} className="changeDataInput" value={surname} />
                            <button onClick={() => setShowUsernameInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changeName(); changeSurname(); setShowNameInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
                <div className="infoCard">
                    {!showUsernameInput &&
                        <>
                            <div className="info">
                                <p className="title">Username</p>
                                <h4 className="infoData">{user?.user?.displayName}</h4>
                            </div>
                            <div className="actions">
                                <button onClick={() => setShowUsernameInput(true)} className="edit">Edit</button>
                                <p className="delete">Delete</p>
                            </div>
                        </> 
                    }
                    {showUsernameInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setUsername(e.target.value)} className="changeDataInput" value={username} />
                            <button onClick={() => setShowUsernameInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changeUsername(); setShowUsernameInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
                <div className="infoCard">
                    {!showAddressInput &&
                        <>
                        <div className="info">
                            <p className="title">Address</p>
                            <h4 className="infoData">{`${user?.user?.contact?.locations[0]?.address.streetName} ${user?.user?.contact?.locations[0]?.address.streetNumber}`}</h4>
                        </div>
                        <div className="actions">
                            <button onClick={() => setShowAddressInput(true)} className="edit">Edit</button>
                            <p className="delete">Delete</p>
                        </div>
                        </>
                    }
                    {showAddressInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setAddress(e.target.value)} className="changeDataInput" value={address} />
                            <input type="text" onChange={e => setAddressNumber(e.target.value)} className="changeDataInput" value={addressNumber} />
                            <button onClick={() => setShowAddressInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changeAddress(); changeAddressNumber(); setShowAddressInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
                <div className="infoCard">
                    {!showCityInput &&
                    <>
                    <div className="info">
                            <p className="title">City</p>
                            <h4 className="infoData">{user?.user?.contact?.locations[0]?.address?.suburb}</h4>
                    </div>
                    <div className="actions">
                            <button onClick={() => setShowCityInput(true)} className="edit">Edit</button>
                        <p className="delete">Delete</p>
                    </div>
                    </>
                    }
                    {showCityInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setCity(e.target.value)} className="changeDataInput" value={city}/>
                            <button onClick={() => setShowCityInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changeCity(); setShowCityInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
                <div className="infoCard">
                    {!showPostalCodeInput &&
                        <>
                            <div className="info">
                                <p className="title">Postal Code</p>
                                <h4 className="infoData">{user?.user?.contact?.locations[0]?.address?.postalCode}</h4>
                            </div>
                            <div className="actions">
                                <button onClick={() => setShowPostalCodeInput(true)} className="edit">Edit</button>
                                <p className="delete">Delete</p>
                            </div>
                        </>
                    }
                    {showPostalCodeInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setPostalCode(e.target.value)} className="changeDataInput" value={postalCode} />
                            <button onClick={() => setShowPostalCodeInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changePostalCode(); setShowPostalCodeInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
                <div className="infoCard">
                    {!showEmailInput &&
                        <>
                            <div className="info">
                                <p className="title">Email</p>
                                <h4 className="infoData">{user?.user?.contact?.email}</h4>
                            </div>
                            <div className="actions">
                                <button onClick={() => setShowEmailInput(true)} className="edit">Edit</button>
                                <p className="delete">Delete</p>
                            </div>
                        </>
                    }
                    {showEmailInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setEmail(e.target.value)} className="changeDataInput" value={email} />
                            <button onClick={() => setShowEmailInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changeEmail(); setShowEmailInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
                <div className="infoCard">
                    {!showPhoneInput &&
                        <>
                            <div className="info">
                                <p className="title">Phone</p>
                                <h4 className="infoData">{`+420 ${user?.user?.contact?.phoneNumber}`}</h4>
                            </div>
                            <div className="actions">
                                <button onClick={() => setShowPhoneInput(true)} className="edit">Edit</button>
                                <p className="delete">Delete</p>
                            </div>
                        </>
                    }
                    {showPhoneInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setPhone(e.target.value)} className="changeDataInput" value={phone} />
                            <button onClick={() => setShowPhoneInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changePhone(); setShowPhoneInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
                <div className="infoCard">
                    {!showSocialMediaInput &&
                        <>
                            <div className="info">
                                <p className="title">Social Media</p>
                            <h4 className="infoData">{user?.user?.contact?.socialNetworks[0]?.name}</h4>
                            </div>
                            <div className="actions">
                                <button onClick={() => setShowSocialMediaInput(true)} className="edit">Edit</button>
                                <p className="delete">Delete</p>
                            </div>
                        </>
                    }
                    {showSocialMediaInput &&
                        <div className="changeData">
                            <input type="text" onChange={e => setSocialMedia(e.target.value)} className="changeDataInput" value={socialMedia} />
                            <button onClick={() => setShowSocialMediaInput(false)} className="changeDataAction" ><img src="/assets/Cross@1x.png" /></button>
                            <button onClick={() => { changeSocialMedia(); setShowSocialMediaInput(false) }} className="changeDataAction" ><img src="/assets/Next Blue@1x.png" /></button>
                        </div>
                    }
                </div>
            </div>
            <div className="logoutContainer">
                <Link to="/" className="logout"><strong className="buttonText">Logout</strong><img src="/assets/Next@1x.png" alt="next" className="next" /></Link>
            </div>
        </div>
    )
}

export default Profile
