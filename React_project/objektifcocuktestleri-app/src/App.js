import { Container } from "react-bootstrap";
import ContainerCard from "./components/ContainerCard"
import Header from "./components/Header"

function App() {
  return (
    <div className="text-center mt-5">
      <Container>
        <Header/>
        <ContainerCard/>
      </Container>
    </div>
  )
}

export default App
