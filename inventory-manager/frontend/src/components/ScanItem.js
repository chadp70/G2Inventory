import { Button, Table, Form, Row, Card, Col } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import "../css/ScanItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ScanItem = ({ change }) => {
  const [headerText, setHeaderText] = useState('Scan an item to begin:')
  const [selected, setSelected] = useState('')
  const [showSelected, setShowSelected] = useState(false)
  const [newChoice, setNewChoice] = useState(false)
  const [addItem, setAddItem] = useState(false)
  const [newItemBarcode, setNewItemBarcode] = useState('')

  const [name, setName] = useState('')
  const [tamcn, setTAMCN] = useState('')
  const [aac, setAAC] = useState('')
  const [acct, setAcct] = useState('')
  const [niin, setNIIN] = useState('')
  const [suc, setSUC] = useState('')

  const scannerValue = useRef(''); //Scanner value object for reference

  const getItem = async (val) => {
    document.getElementsByClassName("clsHeader").InnerText = "Do you wish to check this item out?"
    let res = await fetch('http://127.0.0.1:4000/items/' + val)
    let data = await res.json()
    console.log(data);
    if(data.length>0){
      setSelected(data[0]);
      setShowSelected(true);
      setHeaderText('')
    }else{
      setNewItemBarcode(val)
      var newText = `This item with the bar code '${val}' is not in the current Inventory database. Would you like to add it now?`
      setHeaderText(newText)
      setNewChoice(true)
      setShowSelected(false)
      
    }
    
  }


  const addItemToInventory = async (e) => {
    e.preventDefault();
    let Available = true
    let ckOut = ''
    let result = await fetch(
    'http://localhost:4000/items', {
        method: "post",
        body: JSON.stringify({ tamcn, aac, suc, acct, name, niin, newItemBarcode, Available, ckOut }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved succesfully");
        setName('');
        setTAMCN('');
        setAAC('');
        setAAC('');
        setAcct('')
    }
  }

  const handleYes = ()=>{
    setAddItem(true)
    setNewChoice(false)
    setHeaderText('')
  }

  const handleCancel = ()=>{
    setAddItem(false)
    setNewChoice(false)
    setHeaderText('Scan an item to begin:')
    setShowSelected(false)
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
        <h5 className='clsHeader'>{headerText}</h5>
      </Row>
      <Row>
        {showSelected && 
        <>
        <Row>
          <Col xs={2}>&nbsp;</Col>
          <Col><h1>Check out Inventory</h1></Col>
        </Row>
        <Row>
          <Col xs={2}>&nbsp;</Col>
          <Col>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Barcode</th>
                <th>Name</th>
                <th>TAMCN</th>
                <th>AAC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selected.ScannerID}</td>
                <td>{selected.Nomenclature}</td>
                <td>{selected.TAMCN}</td>
                <td>{selected.AAC}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Account Number</th>
                <th>NIIN</th>
                <td colSpan={2}>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selected.Account_Number}</td>
                <td>{selected.NIIN}</td>
                <td colSpan={2}>&nbsp;</td>
              </tr>
              <tr>
                <td colSpan={4}>
                <Button variant="primary" type="submit">
                Submit
              </Button>
              &nbsp;              
              <Button variant="danger" onClick={handleCancel}>
                Cancel
              </Button>
              </td>
              </tr>
            </tbody>

          </Table>
          </Col>
          <Col xs={2}>&nbsp;</Col>
        </Row>

        </>
        }

        {addItem && <>
        <Row>
          <Col xs={2}>&nbsp;</Col>
          <Col><h1>Add an Item to Inventory</h1></Col>
        </Row>
        <Row>
          <Col xs={2}>&nbsp;</Col>
          <Col>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Barcode</th>
                <th>Name</th>
                <th>TAMCN</th>
                <th>AAC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form.Control type="text" id='barCode' value={newItemBarcode} disabled/></td>
                <td><Form.Control type="text" id='itemName' placeholder="Item Name" onInput={e => setName(e.target.value)}/></td>
                <td><Form.Control type="text" id='TAMCN' placeholder="TAMCN" onInput={e => setTAMCN(e.target.value)}/></td>
                <td><Form.Control type="text" id='AAC' placeholder="AAC" onInput={e => setAAC(e.target.value)}/></td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Account Number</th>
                <th>NIIN</th>
                <th>TAMCN</th>
                <th>AAC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form.Control type="text" id='Account' placeholder="Account Number" onInput={e => setAcct(e.target.value)}/></td>
                <td><Form.Control type="text" id='NIIN' placeholder="NIIN" onInput={e => setNIIN(e.target.value)}/></td>
                <td><Form.Control type="text" id='SUC' placeholder="ex - YBOATS" onInput={e => setSUC(e.target.value)}/></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td colSpan={4}>
                <Button variant="primary" onClick={addItemToInventory}>
                Add Item to Inventory
              </Button>
              &nbsp;              
              <Button variant="danger" onClick={handleCancel}>
                Cancel
              </Button>
              </td>
              </tr>
            </tbody>

          </Table>
          </Col>
          <Col xs={2}>&nbsp;</Col>
        </Row>

        </>}

        {newChoice && 
        <>
        <Card bg='light'>
        
          <Card.Body>
          <Button variant="primary" onClick={handleYes}>
                Yes</Button>&nbsp;
          <Button variant="danger" onClick={handleCancel}>
                Cancel</Button>
          </Card.Body>
        </Card>
        </>}

      </Row>


      <p>&nbsp;</p>
    </>
  );
};
export default ScanItem;

