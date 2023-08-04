import { Container, Row, Col } from "react-bootstrap";
import inventoryData from '../api/inventory.json';
console.log(inventoryData);
const Inventory = (props) => {
    {
        inventoryData.map((inventoryItem, index) => {
            return (
                <Row key={index}>
                    <Col>{inventoryItem.TAMCN}</Col>
                    <Col>{inventoryItem.AAC}</Col>
                    <Col>{inventoryItem.SUC}</Col>
                    <Col>{inventoryItem.Account_Number}</Col>
                    <Col>{inventoryItem.Nomenclature}</Col>
                    <Col>{inventoryItem.NIIN}</Col>
                    <Col>{inventoryItem.Count_of_Serial_Number}</Col>
                    <Col>{inventoryItem.Sum_of_Quantity}</Col>
                    <Col>{inventoryItem.Sum_of_Unit_Price}</Col>
                </Row>
            );
        })
    }
};

export default Inventory;
