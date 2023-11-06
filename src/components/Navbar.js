import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar navbar-expand bg-primary p-3">
            <NavLink to="/" className="navbar-brand text-white fw-bolder ">#VanLife</NavLink>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                <NavLink to="/" className="navbar-brand text-white fw-bolder ">Home</NavLink>
                </li>

                <li className="nav-item ">
                <NavLink to="about" className="navbar-brand text-white fw-bolder ">About</NavLink>
                </li>
                <li className="nav-item ">
                <NavLink to="blogs" className="navbar-brand text-white fw-bolder ">blogs</NavLink>
                </li>

                <li className="nav-item ">
                <NavLink to="host" className="navbar-brand text-white fw-bolder ">Host</NavLink>
                </li>
                <li className="nav-item ">
                <NavLink to="list" className="navbar-brand text-white fw-bolder ">vans List</NavLink>
                </li>

            </ul>
        </div>
    )
}