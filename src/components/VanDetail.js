import React from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import "../server";
import { getHostVans } from "../api";

export function loader({params}){
    return getHostVans(params.id)
}

export default function VanDetail() {
  const location = useLocation();

  const van=useLoaderData()


  const url = location.state?.search || "";
  const typeFilter = location.state?.typeFilter || "";
  // //alternative
  // const search = location.state && location.state.search ? location.state.search : "";

  return (
    <div className="row container-fluid">
      <div className="col-lg-4 container mt-5 ">
        <Link relative="path" to={`..${url}`}>
          Back to {typeFilter}
        </Link>
        {van ? (
          <div className="card">
            <div className="card-header ">{van.name}</div>
            <div className="card-body">
              <img className="img-thumbnail h-50" src={van.imageUrl} alt="" />{" "}
              <br />
              {van.description} <br />
              <button className="btn btn-primary ">Rent this</button>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning ">loading</div>
        )}
      </div>
    </div>
  );
}
