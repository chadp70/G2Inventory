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
  const [ScannerID, setScannerID] = useState('')

  const [Nomenclature, setNomenclature] = useState('')
  const [TAMCN, setTAMCN] = useState('')
  const [AAC, setAAC] = useState('')
  const [Account_Number, setAccount_Number] = useState('')
  const [NIIN, setNIIN] = useState('')
  const [SUC, setSUC] = useState('')
  const [Available, setAvailable] = useState(true)
  const [CheckedOutTo, setCheckedOutTo] = useState('')
  const scannerValue = useRef(''); //Scanner value object for reference

  const getItem = async (val) => {
    let res = await fetch('http://127.0.0.1:4000/items/' + val)
    let data = await res.json()
    let newText
    console.log(data);
    if(data.length>0){
      setSelected(data[0]);
      setShowSelected(true);
      setHeaderText('')
      newText = `Do you wish to check this item out?`
      setHeaderText(newText)
    }else{
      setScannerID(val)
      newText = `This item with the bar code '${val}' is not in the current Inventory database. Would you like to add it now?`
      setHeaderText(newText)
      setNewChoice(true)
      setShowSelected(false)
      
    }
    
  }


  const addItemToInventory = async (e) => {
      e.preventDefault();
      let result = await fetch(
      'http://localhost:4000/', {
          method: "post",
          body: JSON.stringify({ TAMCN, AAC, SUC, Account_Number, Nomenclature, NIIN, ScannerID, Available, CheckedOutTo }),
          headers: {
              'Content-Type': 'application/json'
          }
      })

    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved succesfully");
        scannerValue.current = ''
        setNomenclature('');
        setTAMCN('');
        setAAC('');
        setAAC('');
        setAccount_Number('');
    }
  }


  const handleCheckItemInOut = async (e) => {
    e.preventDefault();
    let ScannerID = selected.ScannerID
    let Available = selected.Available
    let CheckedOutTo = selected.CheckedOutTo
    try{
      let result = await fetch(
        'http://localhost:4000/', {
            method: "patch",
            body: JSON.stringify({ScannerID, Available, CheckedOutTo }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
      result = await result.json();
      console.warn(result);
      if (result) {
          alert("Data Updated succesfully");
          scannerValue.current = ''
          setAvailable(false)
          setCheckedOutTo(result.CheckedOutTo)
      }
    }catch(e){
      alert(e.message);
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
                <Button variant="primary"  onClick={handleCheckItemInOut}>
                {Available ? "Check out" : "Check in"}
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
                <td><Form.Control type="text" id='barCode' value={ScannerID} disabled/></td>
                <td><Form.Control type="text" id='itemName' placeholder="Item Name" onInput={e => setNomenclature(e.target.value)}/></td>
                <td><Form.Control type="text" id='TAMCN' placeholder="TAMCN" onInput={e => setTAMCN(e.target.value)}/></td>
                <td><Form.Control type="text" id='AAC' placeholder="AAC" onInput={e => setAAC(e.target.value)}/></td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Account Number</th>
                <th>NIIN</th>
                <th colSpan={2}>SUC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Form.Control type="text" id='Account' placeholder="Account Number" onInput={e => setAccount_Number(e.target.value)}/></td>
                <td><Form.Control type="text" id='NIIN' placeholder="NIIN" onInput={e => setNIIN(e.target.value)}/></td>
                <td colSpan={2}><Form.Control type="text" id='SUC' placeholder="ex - YBOATS" onInput={e => setSUC(e.target.value)}/></td>
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

