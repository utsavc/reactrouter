//This is for displaying error and will be passed as a prop in Route in errorElement

import { useRouteError } from "react-router-dom"

export default function ErrorDisplay(){
    const error=useRouteError()
    return(
        <>
        <h1>Error Occured: </h1>
        {error.message} <br />
        <span className="text-info">{error.statusText} : {error.status}</span>
        </>
    )
}