import "../styles/style.css"


const Picture = ({photographer, src}) =>{


    return(
        <div className="morePicture">
          
            <ul>
                <div className="button imageContainer">
                <li className="pictures"><img className="picture" src={src.large} alt="foto" /></li>
                </div>
                <div>
                <li><a>{photographer}</a></li>
                </div>
                
            </ul>
        </div>
    )
}


export default Picture