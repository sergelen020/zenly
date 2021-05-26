import React, { useState } from 'react'
import './changeprofile.scss'
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import firebase, { firestore } from './firebase';


function Changeprofile({input}) {
    const [date, setDate] = useState(new Date());
    const [profile, setProfile] = useState({});

    function changeprofile () {
        console.log(input)
    }
    return (
        <div className="cont">
            <div className="top flex center">
                <div className="pro-cont flex perfect center">
                    <i className="large material-icons">account_circle</i>
                </div>
            </div>
            <ul class="collection flex column">
                <li className="collection-item flex perfect"><i className="material-icons">person</i><input type="" placeholder="Username"/></li>
                <li className="collection-item flex perfect"><i className="material-icons">date_range</i><DatePicker selected={date} onChange={date => setDate(date)} /></li>
                <li className="collection-item flex perfect"><i className="material-icons">phone</i><input type="number" placeholder="Phone number" value={input}/></li>
                <li className="collection-item flex perfect"><i className="material-icons">mail</i><input type="" placeholder="Instagram account" /></li>
                <li className="collection-item flex perfect"><i className="material-icons">mail</i><input type="" placeholder="Email" /></li>
                <li className="collection-item flex perfect"><i className="material-icons">visibility</i><input type="" placeholder="Password" /></li>
            </ul>
            <div className="flex center">
                <Link to="/home"><a href="#!" className="waves-effect btn" onClick={changeprofile}>Save profile</a></Link>
            </div>
            
        </div>
    )
}

export default Changeprofile
