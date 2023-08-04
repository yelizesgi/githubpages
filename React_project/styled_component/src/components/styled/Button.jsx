import styled from "styled-components"


const Button = styled.button`
  background-color: ${({primary}) =>(primary ? "#027373" : "#F2E7DC")};
  color: ${({primary}) => (primary ? "#F2E7DC" : "#027373")};
  border: 1px solid #005148;
  border-radius: 5px;
  box-shadow: 0 0 10px #0D0D0D;
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin-right: 0%.5rem;
  margin: 1rem 0.5rem;
  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
    cursor: pointer;
  }
`
export default Button