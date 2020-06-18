import React from "react";
import "./login.css"
import {NavLink} from "react-router-dom";
const login = () => {
    return (
        <div >
            <div className="society">Welcome To Better World</div>
            <div className="login">
                <input type="text" placeholder="Enter username"></input>
                <input type="password" placeholder="Enter password"></input>
                <button ><NavLink className="nav-element" to="/home">Login</NavLink></button>
            </div>
        </div>
    )
}

export default login;