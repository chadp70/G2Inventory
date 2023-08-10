import { Row,Col} from "react-bootstrap";
import inventoryItem from '../api/inventoryItem.json';
import {useState} from "react";
import ItemResults from './ItemResults';
const SelectItem = () => {
    const [select,setSelect] = useState()

    function handleChange(e) {
       setSelect(e.target.value);
    }

    return (
        <>
        <Row>&nbsp;</Row>
        <Row>
            <Col>
                Select Inventory Item: <select onChange={handleChange}><option>SELECT AN ITEM</option>
                    {inventoryItem.map(data => (<option key={data.ID} value={data.Nomenclature}>{data.Nomenclature}</option>))}
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
        <ItemResults value={select}/>
       
        </>
    );

};

export default SelectItem;
