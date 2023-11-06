import React from "react";
import { Link } from "react-router-dom";


export default function Home(){
    const style={
        backgroundImage: "url('https://picsum.photos/id/22/1000/1000')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        width:"100%",
        height:"700px"
    }

    const innerContent={
       paddingTop:"300px",
       paddingLeft:"500px"

    }
    return(
        <>
            <div style={style} className="container-fluid ">
                <div style={innerContent}>                    
                <h1 className="text-dark-emphasis ">Life Style Unmatched</h1>
                <Link className="btn btn-lg btn-info w-25 p-3">Find More</Link>
                </div>
            </div>
            
        </>

    )
}