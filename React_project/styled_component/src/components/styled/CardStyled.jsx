import styled from "styled-components"


const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 4rem;
  color: ${({theme}) => theme.colors.primary};
  & img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }

`

export default CardStyled;