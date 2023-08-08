import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const data = [
  {
    id: 1,
    name: "BDT",
    text: "Certificate of Expertise",
    img: "https://cdn.pixabay.com/photo/2017/12/27/12/41/picture-frame-3042585_640.jpg",
  },
  {
    id: 2,
    name: "Solution Focused Therapy",
    text: "Certificate of Expertise",
    img: "https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009_640.jpg",
  },
  {
    id: 3,
    name: "Fairy Tale Therapy",
    text: "Certificate of Expertise",
    img: "https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_1280.jpg",
  },
];
const Courses = () => {
  return (
    <Container className="text-center mt-4 p-4 text-success">
      <h1>Our Schools</h1>
      <Row className="justify-content-center gap-4 align-items-center mt-4">
        {data.map((course) => {
          const { id, img, name, text } = course;
          return (
            <Col className="col d-flex justify-content-center" key={id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="success">Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Courses;
