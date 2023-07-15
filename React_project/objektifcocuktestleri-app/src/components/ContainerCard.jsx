import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {data} from "../helpers/data";
import TestCard from './TestCard';


const ContainerCard = () => {
   const [search, setSearch] = useState("")
   console.log(data)
   const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
   }

   const filteredData = data.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))

    return(
        <>
          <Form.Control
        type="search"
        placeholder="Search Tests..."
        onChange={handleChange}
        className='bg-success-subtle'
      />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row xs={1} sm={2} lg={4} className="justify-content-center g-3">
         
          {filteredData.map((tests, i) => (
            <TestCard key={i} {...tests} />
          ))}
        </Row>
      </Container>
        </>
    )
}


export default ContainerCard