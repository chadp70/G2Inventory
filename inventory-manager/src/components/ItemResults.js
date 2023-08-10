import "bootstrap/dist/css/bootstrap.min.css";
import {  Row, Col } from 'react-bootstrap';
import fullInventory from '../api/inventory.json';

//Pass the property(ies) from SelectItem to to ItemResults and return all results to the screen
const ItemResults = (selectedItem) => {

    let results = [];
    //filter the full inventory list based on selected components
    results = fullInventory.filter((data) => {return data.Nomenclature === selectedItem.value;})

        return (
                
                <>
                 {results.map(( listValue, index ) => {
                    
                    return(
                    <Row key={index} className="show-grid">
                        <Col xs={3}>{listValue.Nomenclature}</Col>
                        <Col>{listValue.TAMCN}</Col>
                        <Col>{listValue.AAC}</Col>
                        <Col>{listValue.Account_Number}</Col>
                        <Col>{listValue.NIIN}</Col>
                        <Col>{listValue.Count_of_Serial_Number}</Col>
                        <Col>{listValue.Sum_of_Quantity}</Col>
                        <Col>{listValue.Sum_of_Unit_Price}</Col>
                    </Row>
                )})}
                </>
        );

};
export default ItemResults;