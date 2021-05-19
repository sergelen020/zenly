import React from 'react'
import './addfriend.scss'

function Addfriend( {setIsFriend} ) {
    return (
        <div>
            <ul class="collection cont">
                <li class="collection-item avatar flex perfect">
                    <img src="https://images.unsplash.com/photo-1621354236791-260eed20cbe9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" class="circle"/>
                    <span class="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                        <a href="#!" class="waves-effect waves-light btn flex perfect accept green" onClick={()=> {setIsFriend(false)}}>accept</a>
                        <a href="#!" class="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
                <li class="collection-item avatar flex perfect">
                    <img src="https://images.unsplash.com/photo-1621349805296-d026d3d26d1f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="circle" alt=""/>
                    <span class="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                        <a href="#!" class="waves-effect waves-light btn flex perfect accept green">accept</a>
                        <a href="#!" class="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
                <li class="collection-item avatar flex perfect">
                <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="circle" alt=""/>
                    <span class="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                        <a href="#!" class="waves-effect waves-light btn flex perfect accept green">accept</a>
                        <a href="#!" class="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
                <li class="collection-item avatar flex perfect">
                    <img src="https://images.unsplash.com/photo-1621346552452-c24d0eb61762?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="circle" alt=""/>
                    <span class="title">Username</span>
                    <div className="secondary-content flex column but-cont">
                        <a href="#!" class="waves-effect waves-light btn flex perfect accept green">accept</a>
                        <a href="#!" class="waves-effect waves-light btn flex perfect red">reject</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Addfriend;
