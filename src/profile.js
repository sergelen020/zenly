import React, { useState } from 'react'
import './profile.scss'
import Changeprofile from './changeprofile'
import { Link } from "react-router-dom"


function Profile(props) {
    const { username, date, phoneNumber } = props;
    return (
        <div className="cont">
            <div className="top flex center">
                <div className="pro-cont flex perfect center">
                    <i className="large material-icons">account_circle</i>
                </div>
            </div>
            <ul class="collection flex column">
                <li class="collection-item flex perfect"><i className="material-icons">person</i>{ username }</li>
                <li class="collection-item flex perfect"><i className="material-icons">date_range</i>{ date }</li>
                <li class="collection-item flex perfect"><i className="material-icons">phone</i>{ phoneNumber }</li>
                <li class="collection-item flex perfect"><i className="material-icons">mail</i>seegiii_</li>
                <li class="collection-item flex perfect"><i className="material-icons">mail</i>sergelen020@gmail.com</li>
            </ul>
            <div className="flex center">
                <Link to="/changeprofile"><a href="#a" class="waves-effect btn" >Edit profile</a></Link>
            </div>
            
        </div>
    )
}

export default Profile;