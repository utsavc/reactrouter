import { NavLink, Outlet } from "react-router-dom";
import SubNavLink from "./SubNavLink";

export default function HostLayout(){
    return(
        <>

            <SubNavLink/>
            <Outlet/>
        
        </>
    )
}