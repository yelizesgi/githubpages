

import {data} from "../data"
import CardStyled from "./styled/CardStyled"


const Card = () => {
 
  return (
    <>
     {data.map(({id, name, text, img}) => (
      <CardStyled key={id}>
        <div>
          <h1>{name}</h1>
          <img src={img} alt="image" />
          <h3>{text}</h3>
        </div>
      </CardStyled>
     ))}
    
    
    </>
  )
}

export default Card

