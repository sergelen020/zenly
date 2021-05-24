import React, { useState } from 'react'
import './changeprofile.scss'
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import firebase, { firestore } from './firebase';


function Changeprofile() {
    const [username, setUsername] = useState('username');
    const [date, setDate] = useState(new Date());
    const [phoneNumber, setPhoneNumber] =useState('phone number');
    const db = firestore;
    const getValue = (event) => {
        setUsername(event.target.value);
        setPhoneNumber(event.target.value);
      };
    const addData = () => {
        db.collection("values")
            .doc(username,phoneNumber)
            .set({
                username: username,
                phoneNumber: phoneNumber,
            })
            .then(function () {
                console.log("Value successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing Value: ", error);
            });
        };
    return (
        <div className="cont">
            <div className="top flex center">
                <div className="pro-cont flex perfect center">
                    <i className="large material-icons">account_circle</i>
                </div>
            </div>
            <ul class="collection flex column">
                <li class="collection-item flex perfect"><i className="material-icons">person</i><input type="" placeholder="Username" onBlur={getValue}/></li>
                <li class="collection-item flex perfect"><i className="material-icons">date_range</i><DatePicker selected={date} onChange={date => setDate(date)} /></li>
                <li class="collection-item flex perfect"><i className="material-icons">phone</i><input type="number" placeholder="Phone number" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">mail</i><input type="" placeholder="Instagram account" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">mail</i><input type="" placeholder="Email" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">visibility</i><input type="" placeholder="Password" /></li>
            </ul>
            <div className="flex center">
                <Link to="/profile"><a href="#a" class="waves-effect btn" onClick={addData}>Save profile</a></Link>
            </div>
            
        </div>
    )
}

export default Changeprofile
