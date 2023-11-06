import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
    const {vans}=useOutletContext()
    return(
        <>

        <section>
            <h5>Name: {vans.name}</h5>
            <h5>Category: {vans.type}</h5>
            <h5>Description: </h5> <p>{vans.description}</p>
            <h5>Visibility: public</h5>
        </section>


        </>
    )
}