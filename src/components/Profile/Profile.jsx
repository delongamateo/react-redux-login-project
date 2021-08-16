import React from 'react'
import "../scss/profile.scss"
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, updateCity } from '../../features/user/userSlice'
import { Link } from "react-router-dom";


function Profile() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    console.log(dispatch(updateCity))

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
                    <div className="info">
                        <p className="title">Name</p>
                        <h4>{`${user?.user?.name} ${user?.user?.surname}`}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                    </div>
                </div>
                <div className="infoCard">
                    <div className="info">
                        <p className="title">Username</p>
                        <h4>{user?.user?.displayName}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                    </div>
                </div>
                <div className="infoCard">
                    <div className="info">
                        <p className="title">Address</p>
                        <h4>{`${user?.user?.contact?.locations[0]?.address.streetName} ${user?.user?.contact?.locations[0]?.address.streetNumber}`}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                        <p className="delete">Delete</p>
                    </div>
                </div>
                <div className="infoCard">
                    <div className="info">
                        <p className="title">City</p>
                        <h4>{user?.user?.contact?.locations[0]?.address?.suburb}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                        <p className="delete">Delete</p>
                    </div>
                </div>
                <div className="infoCard">
                    <div className="info">
                        <p className="title">Postal Code</p>
                        <h4>{user?.user?.contact?.locations[0]?.address?.postalCode}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                        <p className="delete">Delete</p>
                    </div>
                </div>
                <div className="infoCard">
                    <div className="info">
                        <p className="title">E-mail</p>
                        <h4>{user?.user?.contact?.email}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                        <p className="delete">Delete</p>
                    </div>
                </div>
                <div className="infoCard">
                    <div className="info">
                        <p className="title">Phone</p>
                        <h4>{`+420 ${user?.user?.contact?.phoneNumber}`}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                        <p className="delete">Delete</p>
                    </div>
                </div>
                <div className="infoCard">
                    <div className="info">
                        <p className="title">Social Media</p>
                        <h4>{user?.user?.contact?.socialNetworks[0]?.name}</h4>
                    </div>
                    <div className="actions">
                        <p className="edit">Edit</p>
                        <p className="delete">Delete</p>
                    </div>
                </div>
            </div>
            <div className="logoutContainer">
                <Link to="/" className="logout"><strong className="buttonText">Logout</strong><img src="/assets/Next@1x.png" alt="next" className="next" /></Link>
            </div>
        </div>
    )
}

export default Profile
