import React from "react";
import { NavLink, redirect } from "react-router-dom";

export default function Navbar() {
  function fakeLogout() {
    localStorage.removeItem("loggedin");
    const response = redirect("/login");
    response.body = true;
    return response;
    console.log("test")
  }

  return (
    <div className="navbar navbar-expand bg-primary p-3">
      <NavLink to="/" className="navbar-brand text-white fw-bolder ">
        #VanLife
      </NavLink>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
          <NavLink to="/" className="navbar-brand text-white fw-bolder ">
            Home
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink to="about" className="navbar-brand text-white fw-bolder ">
            About
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="blogs" className="navbar-brand text-white fw-bolder ">
            blogs
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink to="host" className="navbar-brand text-white fw-bolder ">
            Host
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="list" className="navbar-brand text-white fw-bolder ">
            vans List
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/login" className="navbar-brand text-white fw-bolder ">
            Log in
          </NavLink>
        </li>
        <li className="nav-item ">
          <button
            onClick={fakeLogout}
            className="navbar-brand btn btn-sm bg-white text-danger fw-bolder "
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}
