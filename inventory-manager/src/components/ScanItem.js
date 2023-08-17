import {Row, Col} from 'react-bootstrap';
import {useState, useEffect, useRef} from "react";
import "../css/ScanItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemResults from './ItemResults';

const ScanItem = () => {
    const scannerValue = useRef();
    scannerValue.current = "";

    const [select,setSelect] = useState();
    
    useEffect(() => {
      const handleKeydown = (e) => {
        if(e.key !== "Shift"){
          if(e.key !== "Enter"){
            //console.log(e.key);
            scannerValue.current += e.key;
          }else{
            setSelect(scannerValue.current);
            console.log(scannerValue.current);
            scannerValue.current = "";
          }
          
        }
        // Called when browser window is resized
      };
  
      window.addEventListener("keydown", handleKeydown);
      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    }, []);

  return (
    
    <>   
      <Row><h5>Scan Inventory Item:</h5></Row>
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