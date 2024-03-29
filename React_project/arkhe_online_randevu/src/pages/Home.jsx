
import AppointmentList from "../component/AppointmentList"
import Consulmen from "../component/Consulmen"
import { appointmentData } from "../helper/data"
import { useState } from "react"


const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData)
    console.log(appointments)
    return(
        <main className="text-center mt-2">
            <h1 className="display-5 text-success">ARKHE AİLE DANIŞMANLIK MERKEZİ</h1>
        <Consulmen apps={appointments} setApps={setAppointments}/>
        <AppointmentList apps={appointments} setApps={setAppointments}/>  
        </main>
    )
}


export default Home