import { NavLink } from "react-router-dom";

export default function SubNavLink(){
    return(

        <div className="container mt-3 ">

        <ul className="nav">
            <li className="nav-item">
                <NavLink end className={({isActive}) => isActive ? "nav-link text-danger" : "nav-link " } to=".">Dashboard</NavLink>
            </li>
            <li className="nav-item">

            <NavLink className={({isActive}) => isActive ? "nav-link text-danger" : "nav-link " } to="income">Income</NavLink>
            </li>
            <li className="nav-item"> 
                <NavLink className={({isActive}) => isActive ? "nav-link text-danger" : "nav-link " } to="vans">Vans</NavLink>
            </li>

            <li className="nav-item"> 
                <NavLink className={({isActive}) => isActive ? "nav-link text-danger" : "nav-link " } to="reviews">Reviews</NavLink>
            </li>
        </ul>

        </div>
    )
}