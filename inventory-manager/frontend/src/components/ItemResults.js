import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from 'react-bootstrap';
//import fullInventory from '../api/inventory.json';
//Pass the property(ies) from SelectItem to to ItemResults and return all results to the screen
const ItemResults = (selected) => {
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


                <Row key={selected._id} className="show-grid">
                    <Col xs={2}>{selected.Nomenclature}</Col>
                    <Col>{selected.TAMCN}</Col>
                    <Col>{selected.AAC}</Col>
                    <Col>{selected.Account_Number}</Col>
                    <Col>{selected.NIIN}</Col>
                    <Col>{selected.Count_of_Serial_Number}</Col>
                    <Col xs={2}>{selected.Sum_of_Quantity}</Col>
                    <Col xs={2}>{selected.Sum_of_Unit_Price}</Col>
                </Row>
            </Card.Body>
        </Card>
    </>


};
export default ItemResults;