import React from 'react'
import './profile.scss'


function Profile() {
    return (
        <div className="cont">
            <div className="top flex center">
                <div className="pro-cont flex perfect center">
                    <i className="large material-icons">account_circle</i>
                </div>
            </div>
            <ul class="collection flex column">
                <li class="collection-item flex perfect"><i className="material-icons">person</i><input type="" placeholder="Username" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">date_range</i><input type="" placeholder="Birthday" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">phone</i><input type="" placeholder="Phone number" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">mail</i><input type="" placeholder="Instagram account" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">mail</i><input type="" placeholder="Email" /></li>
                <li class="collection-item flex perfect"><i className="material-icons">visibility</i><input type="" placeholder="Password" /></li>
            </ul>
            <div className="flex center">
                <a class="waves-effect btn">Save profile</a>
            </div>
            
        </div>
    )
}

export default Profile
