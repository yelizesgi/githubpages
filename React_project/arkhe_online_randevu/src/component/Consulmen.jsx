import Container from "react-bootstrap/Container"
import { consulmenData } from "../helper/data"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddModal from "./AddModal"
import { useState } from "react"


const Consulmen = ({apps, setApps}) => {
   const [show, setShow] = useState(false)
   const [dnName, setDnName] = useState("")

    return(
        <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Danışmanlarımız
      </h3>

      <Row className="justify-content-center">
        {consulmenData.map(({ id, img, dep, name }) => (
          <Col xs={6} sm={4} md={3} key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail consulmen-img"
              onClick={() => {
                setDnName(name)
                setShow(true)
              }}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        apps={apps}
        setApps={setApps}
        drName={dnName}
      />
    </Container>
    )
}


export default Consulmen