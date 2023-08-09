//import { Container, Row, Col } from "react-bootstrap";
import inventoryData from '../api/NIIN.json';

const Inventory = () => {
    let arr = []
    console.log(inventoryData)
    Object.keys(inventoryData).forEach(function(key) {
        arr.push(inventoryData[key]);
      });
    return (
        <select onChange={(e) => alert(e.target.value)}>
        {arr.map(data => (<option key={data.NIIN}>{data.Nomenclature}</option>))}
        </select>
        //         <Col>{data.TAMCN}</Col><Col>{data.AAC}</Col><Col>{data.SUC}</Col><Col>{data.Account_Number}</Col><Col>{data.Nomenclature}</Col><Col>{data.NIIN}</Col><Col>{data.Count_of_Serial_Number}</Col><Col>{data.Sum_of_Quantity}</Col><Col>{data.Sum_of_Unit_Price}</Col>             

    );

};

export default Inventory;
