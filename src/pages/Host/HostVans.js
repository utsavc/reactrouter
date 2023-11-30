import { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

import "../../../src/server"
import { getHostVans, getVans } from "../../api";
import { requireAuth } from "../../utils/utils";


export async function loader({request}){
    await requireAuth(request)
    return getHostVans()
} 

export default function HostVans(){
    const vans=useLoaderData()

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
            {vanElements}

        </div>
        </>

    )
}