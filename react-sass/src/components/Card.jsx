import CardStyle from "../scss/card.module.scss"



const Card = ({data}) => {
    console.log(data)
  return (
    <div className={CardStyle.container}>
      {data.map((item)=> {
        const {id, name,  profession, certificate, img} = item
        return(
            <div key={id} className={CardStyle.card}>
              <h1>{name}</h1>
              <h3>{profession}</h3>
              <p>{certificate}</p>
              <img src={img} alt="img" />
              <div>
                <button className={CardStyle.button}>Choose</button>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default Card