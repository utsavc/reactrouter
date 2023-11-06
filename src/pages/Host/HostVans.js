import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../../src/server"

export default function HostVans(){
    const[vans,setVans]=useState([])

    useEffect(function(){
        async function getAllVans(){
            const res=await fetch("/api/host/vans")
            const data=await res.json()
           setVans(data.vans)
        }
        getAllVans()
    },[])

    console.log(vans)


    const vanElements=vans.map((van,index)=>(
        
            <div className="container p-2 m-2 " key={index}>
                <NavLink to={van.id}>

                <div className="row">
                    <div className="col-lg-4">
                        <img src={van.imageUrl} className="img-thumbnail "/>
                    </div>
                    <div className="col-lg-8">
                        <h2>{van.name}</h2>
                        <p>${van.price} /day</p>
                </div>
              </div>
                
                </NavLink>
            <hr/>
            </div>
           
        
    ))
    


    return(
        <>
        <div className="container mt-2  p-3 ">
            <h3>Your Listed Vans</h3>
            {vans.length>0 ? vanElements: "Loading...."}

        </div>
        </>

    )
}