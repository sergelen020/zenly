import React from 'react'
import './addfriend.scss'
import {Link} from "react-router-dom"

function Addfriend() {
    return (
        <div className="cont">
            <div className="flex req-cont">
                <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" className="validate" />
                    <label for="icon_telephone">Telephone</label>
                </div>
                <a href="#!" className="waves-effect waves-light btn">Invite</a>
            </div>
            <ul className="collection">
                <li className="collection-item avatar flex perfect">
                    <img src="https://images.unsplash.com/photo-1621354236791-260eed20cbe9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" className="circle"/>
                    <span className="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                         <Link to="/"><a href="#!" className="waves-effect waves-light btn flex perfect accept green">accept</a></Link>
                        <a href="#!" className="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
                <li className="collection-item avatar flex perfect">
                    <img src="https://images.unsplash.com/photo-1621349805296-d026d3d26d1f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="circle" alt=""/>
                    <span className="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                        <a href="#!" className="waves-effect waves-light btn flex perfect accept green">accept</a>
                        <a href="#!" className="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
                <li className="collection-item avatar flex perfect">
                    <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="circle" alt=""/>
                    <span className="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                        <a href="#!" className="waves-effect waves-light btn flex perfect accept green">accept</a>
                        <a href="#!" className="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
                <li className="collection-item avatar flex perfect">
                    <img src="https://images.unsplash.com/photo-1621346552452-c24d0eb61762?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="circle" alt=""/>
                    <span className="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                        <a href="#!" className="waves-effect waves-light btn flex perfect accept green">accept</a>
                        <a href="#!" className="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Addfriend;
