

import {ThemeProvider} from "styled-components"
import { GlobalStyled } from "./components/styled/GlobalStyled"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/styled/Container"
import Card from "./components/Card"


function App() {
  const styles = {
    colors:{
      primary: "#038C7F",
      secondary: "#A9D9D0",
    },
    breakpoints: {xs: "300px", sm:"500px", md:"700px"}
  }
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyled/>
      <Nav/>
      <Container>
      <Header/>
      <Card/>
      </Container> 
      <Footer/>
    </ThemeProvider>
  )
}

export default App
