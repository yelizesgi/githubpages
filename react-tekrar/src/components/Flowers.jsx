import Genus from "./Genus";

const Flowers = ({genus, img, adet}) =>{
    return(
        <div>
        <Genus genus= {genus}/>
        <img src={img} alt="flowers-img"/>
        <p>Adet: {adet}</p>
        </div>
    )
}

export default Flowers