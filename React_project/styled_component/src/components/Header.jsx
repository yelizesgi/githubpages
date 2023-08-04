import Button from "./styled/Button"
import HeaderStyled from "./styled/HeaderStyled"
import Image from "./styled/Image"



const Header = () => {
  return (
    <HeaderStyled>
        <div>
            <h1>ARKHE FAMILY COUNSELING CENTER </h1>
            <p>Arkhe Family Counseling Center has adopted the principle of rediscovering, organizing and improving yourself and your family.</p>
            <Button primary>Online Appointment</Button>
        </div>
    
    </HeaderStyled>
  )
}

export default Header