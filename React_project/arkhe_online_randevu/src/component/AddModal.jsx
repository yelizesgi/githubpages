import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useState } from "react"


const AddModal = ({show, handleClose, apps, SetApps, dnName}) => {
const [name, setName] = useState("")
const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

const handleSubmit = (e) => {
    e.preventDefault()
    SetApps([
        ...apps, 
        {
            id: new Date().getTime(),
            patient: name,
            consulted: false,
            consulmen: dnName
        },
       ])
        setName("")
        handleClose()
    
}




    return(
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Randevu Kayıt {dnName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Danışan İsim</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Tarih</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Kaydet
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Kapat
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    )
}



export default AddModal