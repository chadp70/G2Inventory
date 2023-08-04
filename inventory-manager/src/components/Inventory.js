import { Container, Row, Col } from "react-bootstrap";
import inventoryData from '../api/inventory.json';

const Inventory = () => {
    return (
        // inventoryData.forEach(function (data) {
        <Row>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
            <Col>Foo</Col>
        </Row>

        //         <Col>{data.TAMCN}</Col>
        //         <Col>{data.AAC}</Col>
        //         <Col>{data.SUC}</Col>
        //         <Col>{data.Account_Number}</Col>
        //         <Col>{data.Nomenclature}</Col>
        //         <Col>{data.NIIN}</Col>
        //         <Col>{data.Count_of_Serial_Number}</Col>
        //         <Col>{data.Sum_of_Quantity}</Col>
        //         <Col>{data.Sum_of_Unit_Price}</Col>             
        // })

    );

};

export default Inventory;
