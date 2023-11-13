
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [repos, setRepos] = useState([])

  const fetchData = async () => {

    let res = await fetch('http://127.0.0.1:4000/items')
    let data = await res.json()
    setRepos(data)

  }


  useEffect(() => {
    // fetch call used to be here
    fetchData()
  }, [])


  return (
    <>
      <Row>&nbsp;</Row>
      <Row>
        <Col>
          Select Inventory Item: <select><option>SELECT AN ITEM</option>
            {repos.map(data => (<option key={data.ID} value={data.Nomenclature}>{data.Nomenclature}</option>))}
          </select>
        </Col>
      </Row>
      <Row>&nbsp;</Row>
      <Row className="bg-secondary text-white">
        <Col xs={3}>Nomenclature</Col>
        <Col>TAMCN</Col>
        <Col>AAC</Col>
        <Col>Account_Number</Col>
        <Col>NIIN</Col>
        <Col>Count of Serial</Col>
        <Col>Sum of Quantity</Col>
        <Col>Sum of Unit Price</Col>
      </Row>
    </>
  )
}

export default App;