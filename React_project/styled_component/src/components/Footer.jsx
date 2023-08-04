

import React from 'react'
import FooterStyled from './styled/FooterStyled'

const Footer = () => {
  return (
    <FooterStyled>
      <p>Copyright {new Date().getFullYear()}</p>
    </FooterStyled>
  )
}

export default Footer