import { useState } from "react"


const UseState = () => {
   const[programing, setPrograming]= useState({
    lesson: "React",
    instructor:"Noah Adams",
    time:3,
   })

   const [toggle, setToggle] = useState(true)
    
   const handleToggle= ()=>{
    setToggle(!toggle)
    if(toggle){
        setPrograming({
            lesson: "React",
            instructor:"Noah Adams",
            time:3,
        })
    }else{
        setPrograming({
             lesson:"Javascript",
             instructor:"Anthony",
             time:3,
        })
    }
   }

    return(
        <div className="container text-center mt-4 p-3 bg-body-tertiary">
            <h1 className="text-info p-3">Haftalık Ders Saati Çizelgesi</h1>
            <h2 className="text-info p-3">Lesson: <span className="text-dark">{programing.lesson}</span></h2>
            <h2 className="text-info p-3">Instructor: <span className="text-dark">{programing.instructor}</span></h2>
            <h2 className="text-info p-3">Time: <span className="text-dark">{programing.time}</span></h2>
            <button className="bg-warning border text-white m-2 rounded-2" onClick={()=> setPrograming({...programing, lesson:"Javascript"})}>Change Lesson</button>
            <button className="bg-success border text-white m-2 rounded-2" onClick= {()=> setPrograming({...programing, instructor: "Anthony"})}>Change Instructor</button>
            <button className="bg-danger border text-white m-2 rounded-2" onClick={()=> setPrograming({...programing, time: programing.time +1})}>Inc Time</button>
            <button className="bg-secondary border text-white m-2 rounded-2" onClick={()=> setPrograming({
                lesson:"React",
                instructor:"Noah Adams",
                time:3,
            })}>Reset</button>
            <button className="bg-secondary-subtle border text-white m-2 rounded-2" onClick={handleToggle}>Toggle</button>

        </div>
    )
}

export default UseState