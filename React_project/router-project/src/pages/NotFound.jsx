import { useNavigate } from "react-router-dom"
import errorImg from "../img/error.jpg"



const NotFound = () => {
  let navigate = useNavigate()
  return (
    <div className="container text-center bg-light mt-4">
      <img className="w-75" src={errorImg} alt="error"/>
      <div>
        <button onClick={()=> navigate("/")} className="btn btn-success me-2 text-white">Home
        </button>
        <button onClick={()=> navigate("-1")} className="btn btn-warning me-2 text-white">Go Back</button>
      </div>
    </div>
  )
}

export default NotFound