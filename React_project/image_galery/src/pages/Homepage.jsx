import Picture from "../components/Picture";
import data from "../helper/data";



const Homepage = () => {

    return(
        <div>
            <h1>Photo Gallery</h1>
            {data.map((item)=>(<Picture key={item.id} {...item}/>))}
        </div>
    )
}


export default Homepage