import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../server"

export default function VanDetail(){
    const[van,setVan]=React.useState(null);
    const location=useLocation();
    console.log(location)
    const params=useParams()

    React.useEffect(function(){
        async function getVan(){
            const res=await fetch(`/api/vans/${params.id}`)
            const data=await res.json()
          setVan(data.vans)
        }

        getVan()
    },[params.id])


    const url=location.state?.search || "" 
    const typeFilter=location.state?.typeFilter||""
    // //alternative
    // const search = location.state && location.state.search ? location.state.search : "";




    return(
        <div className="row container-fluid">
            <div className="col-lg-4 container mt-5 ">
                <Link relative="path" to={`..${url}`}>Back to {typeFilter}</Link>
         {van? (
         <div className="card">
            <div className="card-header ">{van.name}</div>
            <div className="card-body">
                <img className="img-thumbnail h-50" src={van.imageUrl} alt="" /> <br/>
                {van.description} <br/>

                <button className="btn btn-primary ">Rent this</button>
            </div>

         </div>
         ):<div className="alert alert-warning ">loading</div>}


            </div>

        </div>
    )
}