import React, { useState } from 'react'
import './profile.scss'
import Changeprofile from './changeprofile'
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker";
import {firestore} from './firebase'

function Profile(props) {
    const db = firestore;
    const { date } = props
    const [username, setUsername] = useState("s")
    return (
        <div className="cont">
            <div className="top flex center">
                <div className="pro-cont flex perfect center">
                    <i className="large material-icons">account_circle</i>
                </div>
            </div>
            <ul className="collection flex column">
                <li className="collection-item flex perfect"><i className="material-icons">person</i>{ username }</li>
                <li className="collection-item flex perfect"><i className="material-icons">date_range</i>{ date }</li>
                <li className="collection-item flex perfect"><i className="material-icons">phone</i>phone number</li>
                <li className="collection-item flex perfect"><i className="material-icons">mail</i>seegiii_</li>
                <li className="collection-item flex perfect"><i className="material-icons">mail</i>sergelen020@gmail.com</li>
            </ul>
            <div className="flex center">
                <Link to="/changeprofile"><a href="#a" className="waves-effect btn" >Edit profile</a></Link>
            </div>
            
        </div>
    )
}

export default Profile;