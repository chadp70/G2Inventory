//import { Container, Row, Col } from "react-bootstrap";
import inventoryData from '../api/NIIN.json';
import {useState} from "react";
import ItemResults from './ItemResults';
const SelectItem = () => {
    const [select,setSelect] = useState()
    let arr = []
    //console.log(inventoryData)
    Object.keys(inventoryData).forEach(function(key) {
        arr.push(inventoryData[key]);
      });
    
    function handleChange(e) {
       //console.log(e.target.value);
       setSelect(e.target.value);
    }
    return (
        <>
        <select onChange={handleChange}>
        {arr.map(data => (<option key={data.ID} value={data.NIIN}>{data.Nomenclature}</option>))}
        </select>
        <ItemResults value={select}/>
        </>
    );

};

export default SelectItem;
