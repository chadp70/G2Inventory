import { Container, Row, Col } from "react-bootstrap";
import Inventory from "./Inventory";
const Body = (props) => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col className="bg-secondary text-light">TAMCN</Col>
        <Col className="bg-secondary text-light">AAC</Col>
        <Col className="bg-secondary text-light">SUC</Col>
        <Col className="bg-secondary text-light">Account Number</Col>
        <Col className="bg-secondary text-light">Nomenclature</Col>
        <Col className="bg-secondary text-light">NIIN</Col>
        <Col className="bg-secondary text-light">Count of Serial #</Col>
        <Col className="bg-secondary text-light">Sum of Quantity</Col>
        <Col className="bg-secondary text-light">Sum of Unit Price</Col>
      </Row>
      <Inventory />
    </>
  );
};

export default Body;
