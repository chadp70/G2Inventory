import "bootstrap/dist/css/bootstrap.min.css";
import {  Row, Col, Form, Button, Card} from 'react-bootstrap';
import { useState } from 'react';


function NewItemForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
//Item Name TAMCN AAC Account_Number NIIN Count Sum of Quantity Sum of Unit Price
  return (
    <>
    
    {props.display && <Card bg='light'>
      <Card.Header as="h5">Add New Inventory Item </Card.Header>
      <Card.Body>
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Item Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>TAMCN</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="TAMCN"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>AAC</Form.Label>
          <Form.Control
            type="text"
            placeholder="ACC"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Account Number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>NIIN</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="NIIN"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Quantity"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Label>Unit Price</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Unit Price"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>  
        <Form.Group as={Col} md="3" controlId="validationCustom08">
          <Form.Label>Barcode Value</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Barcode Value"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>      
        </Row>
      <Form.Group className="mb-3">
        <Form.Check
          label="Mark item as currently unavailable"
        />
      </Form.Group>
      <Button type="submit">Add Item to Inventory</Button>
    </Form>
      </Card.Body>
    </Card>  }  

    </>
  );
}

export default NewItemForm;