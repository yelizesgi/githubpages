import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";



const TestCard = ({name, img, information}) => {
   const [showImage, setShowImage] = useState(true);

    return(
        <Col>
           <Card onClick={()=>setShowImage(!showImage)} className="test-card" role="button">
        {showImage ? (
          <Card.Img
            variant="top"
            src={img}
            height="350px"
          />
        ) : (
          <ul 
          className="m-auto"
          >
            {information.map((item, i) => (
              <li className="list-unstyled h5 text-start" key={i}>
                {" "}
                {item}
              </li>
            ))}
          </ul>
        )}
        <Card.Footer>
          <Card.Title className="text-success bg-success-subtle p-2">{name}</Card.Title>
        </Card.Footer>
      </Card>
        </Col>
    )
}

export default TestCard;