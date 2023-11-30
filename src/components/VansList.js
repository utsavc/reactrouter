import React, { useState } from "react";
import {
  Link,
  useLoaderData,
  defer,
  useSearchParams,
  Await,
} from "react-router-dom";
import "../server";
import { getHostVans, getVans } from "../api";

export function loader() {
  return defer({ vans: getVans() });
}

export default function VansList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const vansPromise = useLoaderData();
  console.log(vansPromise);

  //     //method to generate URL parameter
  //   function generateSearchParam(key,value){
  //     const sp=new URLSearchParams(searchParams)
  //     if(value===null){
  //         sp.delete(key)
  //     }else{
  //         sp.set(key,value)
  //     }
  //     return `?${sp.toString()}`
  //   }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  return (
    <>
      <div className="container-fluid p-5">
        {/* Hard Coded Parameter gernerration 
         <Link to="?type=simple" className="btn btn-sm  btn-primary">Simple</Link> &nbsp;
          <Link to="?type=rugged" className="btn btn-sm btn-primary ">Rogged</Link> &nbsp;
          <Link to="." className="btn btn-sm btn-primary ">All</Link> &nbsp; */}

        {/* <Link to={generateSearchParam("type","simple")} className="btn btn-sm  btn-primary">Simple</Link> &nbsp;
          <Link to={generateSearchParam("type","rugged")} className="btn btn-sm btn-primary ">Rogged</Link> &nbsp;
          <Link to={generateSearchParam("type",null)} className="btn btn-sm btn-primary ">All</Link> &nbsp; */}

        {/*           
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className="btn btn-sm btn-primary mr-2"
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className="btn btn-sm btn-primary mr-2"
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="btn btn-sm btn-primary "
        >
          Clear
        </button> */}
        <h1>Explore Van Options</h1>

        <Await resolve={vansPromise.vans}>


          {(vansData) => {
            const filteredData = typeFilter
              ? vansData.filter(
                  (char) => char.type.toLowerCase() === typeFilter
                )
              : vansData;

            const vanElements = filteredData.map((van) => (
              <div className="col-lg-3 p-2" key={van.id}>
                <Link
                  className="d-inline "
                  to={van.id}
                  state={{
                    search: `?${searchParams.toString()}`,
                    typeFilter: typeFilter,
                  }}
                >
                  <img className="img-thumbnail " src={van.imageUrl} />
                  <h3>{van.name}</h3>
                  <p>${van.price}</p>

                  <button
                    className={`btn ${
                      van.type === "simple" ? "btn-primary" : "btn-danger"
                    }`}
                  >
                    {van.type}
                  </button>
                </Link>
              </div>
            ));

            return (
              <>
                <button
                  onClick={() => handleFilterChange("type", "simple")}
                  className={`btn btn-sm mr-2 ${
                    typeFilter === "simple" ? "btn-danger" : "btn-primary"
                  }`}
                >
                  Simple
                </button>

                <button
                  onClick={() => handleFilterChange("type", "rugged")}
                  className={`btn btn-sm mr-2 ${
                    typeFilter === "rugged" ? "btn-danger" : "btn-primary "
                  }`}
                >
                  Rugged
                </button>

                <button
                  onClick={() => handleFilterChange("type", "luxury")}
                  className={`btn btn-sm mr-2 ${
                    typeFilter === "luxury" ? "btn-danger" : "btn-primary "
                  }`}
                >
                  Luxury
                </button>

                {typeFilter ? (
                  <button
                    onClick={() => handleFilterChange("type", null)}
                    className="btn btn-sm btn-primary "
                  >
                    Clear
                  </button>
                ) : (
                  ""
                )}

                <div className="row ">
                  {error ? (
                    <div className="alert alert-danger h4 col-lg-5 mt-5 ">
                      {error.message}
                    </div>
                  ) : (
                    vanElements
                  )}
                </div>
              </>
            );
          }}
        </Await>
      </div>
    </>
  );
}
