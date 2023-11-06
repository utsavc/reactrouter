import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
        <div className="container mt-5 ">
            <div className="alert  alert-danger ">
                <h3>404 Eror!! Page Not Found</h3>
            </div>
            <Link to="/" className="btn btn-sm  btn-primary ">Return Home</Link>

        </div>
        </>
    )
}