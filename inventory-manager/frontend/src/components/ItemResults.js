import "bootstrap/dist/css/bootstrap.min.css";
import {  Row, Col, Card } from 'react-bootstrap';
//import fullInventory from '../api/inventory.json';
//Pass the property(ies) from SelectItem to to ItemResults and return all results to the screen
const ItemResults = (props) => {
            <>
            <Card bg='light'>
            <Card.Header as="h5">Results of Inventory Scan:</Card.Header>
            <Card.Body>
            <Row>
                <Col xs={2}><strong>Item Name</strong></Col>
                <Col><strong>TAMCN</strong></Col>
                <Col><strong>AAC</strong></Col>
                <Col><strong>Account_Number</strong></Col>
                <Col><strong>NIIN</strong></Col>
                <Col><strong>Count</strong></Col>
                <Col xs={2}><strong>Sum of Quantity</strong></Col>
                <Col xs={2}><strong>Sum of Unit Price</strong></Col>
            </Row>
             {props.map(( listValue, index ) => {
                
                return(
                
                <Row key={index} className="show-grid">
                    <Col xs={2}>{listValue.Nomenclature}</Col>
                    <Col>{listValue.TAMCN}</Col>
                    <Col>{listValue.AAC}</Col>
                    <Col>{listValue.Account_Number}</Col>
                    <Col>{listValue.NIIN}</Col>
                    <Col>{listValue.Count_of_Serial_Number}</Col>
                    <Col xs={2}>{listValue.Sum_of_Quantity}</Col>
                    <Col xs={2}>{listValue.Sum_of_Unit_Price}</Col>
                </Row>
                
            )})}
            </Card.Body>
            </Card>
            </>


};
export default ItemResults;