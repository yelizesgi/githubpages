
import NavStyled from './styled/NavStyled'
import Button from './styled/Button'

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <img src='./images/logo.png' width="100px" alt='logo'/>
      </div>

      <div>
        <Button>Learn More</Button>
        <Button primary>Information</Button>
      </div>
    </NavStyled>
  )
}

export default Nav