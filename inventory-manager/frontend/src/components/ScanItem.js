import { Row, Card, Col } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import "../css/ScanItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ScanItem = ({ change }) => {

  const [selected, setSelected] = useState('')
  const scannerValue = useRef(''); //Scanner value object for reference

  const getItem = async (val) => {
    document.getElementsByClassName("clsHeader").InnerText = "Do you wish to check this item out?"
    let res = await fetch('http://127.0.0.1:4000/items/' + val)
    let data = await res.json()
    console.log(data);
    setSelected(data[0]);
  }


  useEffect(() => {

    const handleKeydown = (e) => {
      //Scanner must be set as keyboard emulator 
      //On scan, last event value passed is "Enter" key press

      if (e.key !== "Shift") {        //Ignore a "shift" key press as the correctly capitalized letter is sent anyway
        if (e.key !== "Enter") {
          //If "Enter" hasn't been reached (last key press sent by scanner), add the charactor to the scannerValue object's "current" attribute
          scannerValue.current += e.key;

        } else {
          //Got to enter set the "scan" state
          getItem(scannerValue.current)
          //reset the scannerValue object's "current" attribute to an empty string
          scannerValue.current = "";
          e.target.value = "";
        }

      }

    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);



  return (

    <>
      <Row>
        <h5 className='clsHeader'>Scan an item to begin:</h5>
      </Row>
      <Row>
        {selected !== '' && <Card bg='light'>

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
        </Card>}
      </Row>


      <p>&nbsp;</p>
    </>
  );
};
export default ScanItem;