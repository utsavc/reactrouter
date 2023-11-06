import { Outlet } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
        <div className="mt-5 container-fluid ">
            <h1>Dashboard</h1>
            <Outlet/>  
      </div>

        </>
    )
}