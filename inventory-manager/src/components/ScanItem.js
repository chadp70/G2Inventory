import {Button, Form, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from "react";
import "../css/ScanItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemResults from './ItemResults';

const ScanItem = () => {
    
    function handleChange(e) {
        document.getElementById("btnScanItem").disabled = false;
        setSelect(e.target.value);
     }

     const allowScan = ()=>{
        setHideText(false);
        document.getElementById("btnScanItem").disabled = true;
        document.getElementById("scanText").value="";
        document.getElementById("scanText").focus();
        
        

     }
    const [select,setSelect] = useState()
    const [hideText, setHideText] = useState();
    
    useEffect(()=>{
        setHideText(true);
    },[])

  return (
    
    <>
    
      <Button variant="primary" id='btnScanItem' onClick={()=>allowScan()}>Scan Item</Button>
      <Form.Control type="text" id='scanText' className={hideText ? "hidden" : ""} onChange={handleChange} placeholder='Scan Item'/>
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
export default ScanItem;