import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const {vans}=useOutletContext()
    return(
        <>
        <img width={100} src={vans.imageUrl}/>

        </>
    )
}