import { useEffect, useState } from "react"
import "../../../src/server"
import { Link, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom"
import { getVans } from "../../api"
import { requireAuth } from "../../utils/utils"

export async function loader({params,request}){
    await requireAuth(request)
    return getVans(params.id)
}

export default function HostVansDetail(){
    
    // const[vans,setVans]=useState(null)
    const param=useParams()

    const vans=useLoaderData();

    return(
        vans?(

            <div style={{background:"lavender"}} className="container p-2 m-2 p-5">
          
            <div className="row">

        <Link relative="path" to="..">Back to All Vans</Link>
                <div className="col-lg-2">
                    <img width={200} src={vans.imageUrl} className="img-thumbnail "/>
                </div>
                <div className="col-lg-10">
                    <h2>{vans.name}</h2>
                    <p>${vans.price} /day</p>
            </div>



        <ul className="nav">
          
            <li className="nav-item"> 
            <NavLink end className={({isActive}) => isActive ? "nav-link text-danger" : "nav-link " } to=".">Details</NavLink>
            </li>
            <li className="nav-item"> 
                <NavLink className={({isActive}) => isActive ? "nav-link text-danger" : "nav-link " } to="pricing">Pricing</NavLink>
            </li>

            <li className="nav-item"> 
                <NavLink className={({isActive}) => isActive ? "nav-link text-danger" : "nav-link " } to="photos">Photos</NavLink>
            </li>
        </ul>            
          </div>
          <Outlet context={{vans}}/>
        </div>
        ):"Loading"
        
    )
        }