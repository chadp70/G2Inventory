
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [repos, setRepos] = useState([])
  const [dropDownSelected, setDropDownSelected] = useState('');


  const handleSelectChange = (e)=>{
    setDropDownSelected(e.target.value);
    console.log(dropDownSelected)
  }

  const fetchData = async () => {

    let res = await fetch('http://127.0.0.1:4000/items')
    let data = await res.json()
    
    const unique = Array.from(new Set(data.map((item) => item.Nomenclature)));
    
    setRepos(data)
    console.log(repos);
    var select = document.getElementById("selItems");

    // Iterate the data, create a <option> element and append it to
    // the select
    for (let i = 0; i < unique.length; i++) {
        var option = document.createElement("option");
        option.text = unique[i];
        option.value = unique[i];

        select.appendChild(option);

    }
  }


  useEffect(() => {
    // fetch call used to be here
    fetchData()
  }, [dropDownSelected])


  return (
    <>
      <Row>&nbsp;</Row>
      <Row>
        <Col>
          Select Inventory Item: <select id='selItems' onChange={(e) => handleSelectChange(e)}><option>SELECT AN ITEM</option></select>
        </Col>
      </Row>

      <Row>&nbsp;</Row>

      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/placeholder.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default App;