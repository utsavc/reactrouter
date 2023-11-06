import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const {vans}=useOutletContext()
    return(
        <>
        <h4>$ {vans.price}/day</h4>
        </>
        
    )
}