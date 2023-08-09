import { Container, Row, Col } from 'react-bootstrap';
import fullInventory from '../api/inventory.json';
//import {useState} from "react";

const ItemResults = (props) => {
    //const [select,setSelect] = useState()
    let arr = []
    let results = []
    Object.keys(fullInventory).forEach(function(key) {
        arr.push(fullInventory[key]);
    });
    console.log(props.value);
    results = arr.filter((data) => {return data.NIIN === props.value;})
    console.log(results);
    const buildTable = (item, index)=>{
        <Row><Col>{item.TAMCN}</Col></Row>
    }
    return(
        <>
        <Container>
            {results.forEach(buildTable)}

        </Container>
        </>
    )

};
        /*         <Col>{data.TAMCN}</Col><Col>{data.AAC}</Col><Col>{data.SUC}</Col><Col>{data.Account_Number}</Col><Col>{data.Nomenclature}</Col><Col>{data.NIIN}</Col><Col>{data.Count_of_Serial_Number}</Col><Col>{data.Sum_of_Quantity}</Col><Col>{data.Sum_of_Unit_Price}</Col>             */

export default ItemResults;