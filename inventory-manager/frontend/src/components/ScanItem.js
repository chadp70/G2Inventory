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

  const [ID, setID] = useState('')
  const [Nomenclature, setNomenclature] = useState('')
  const [TAMCN, setTAMCN] = useState('')
  const [AAC, setAAC] = useState('')
  const [Account_Number, setAccount_Number] = useState('')
  const [NIIN, setNIIN] = useState('')
  const [SUC, setSUC] = useState('')
  const [Available, setAvailable] = useState(true)
  const [CheckedOutTo, setCheckedOutTo] = useState('')


  const scannerValue = useRef(''); //Scanner value object for reference


  //getItem function received the scanned item's code and searches the database for a match
  const getItem = async (val) => {
    let res = await fetch('http://127.0.0.1:4000/items/' + val) // Results of the fetch call are assigned to res variable

    let data = await res.json() //return the results in JSON format and assign them to the data variable 
    let newText

    if (data.length > 0) { //If data is returned, this is executed
      setSelected(data[0]); //Set the state of the "selected" object to the value returned from the fetch (JSON dataset's first object (there's always only one but still have to account for it))
      setShowSelected(true); //set "showSelected" state to true which will cause the display form to render
      setHeaderText('') //Clear the header text 

      newText = `Do you wish to check this item out?`
      setHeaderText(newText) //Set the header text

    } else {            //If no data is returned, this is executed
      setScannerID(val) //Assign the scanned barcode to the "scannerID" state

      newText = `This item with the bar code '${val}' is not in the current Inventory database. Would you like to add it now?`

      setHeaderText(newText)
      setNewChoice(true) //Set "newChoice" state to true which renders the empty form for data entry of new item
      setShowSelected(false) // hide the "showSelected" form

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
    let id = selected._id
    let Available = selected.Available
   // let CheckedOutTo = selected.CheckedOutTo
    try {
      let result = await fetch(
        'http://localhost:4000/', {
        method: "patch",
        body: JSON.stringify({ id, Available }),
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
    } catch (e) {
      alert(e.message);
    }

  }

  const handleYes = () => {
    setAddItem(true)
    setNewChoice(false)
    setHeaderText('')
  }

  const handleCancel = () => {
    setAddItem(false)
    setNewChoice(false)
    setHeaderText('Scan an item to begin:')
    setShowSelected(false)
  }

  useEffect(() => {

    const handleKeydown = (e) => {
      //Scanner must be set as a keyboard emulator 
      //On scan, the last event value passed to the app is the "Enter" key press

      if (e.key !== "Shift") {        //Ignore a "shift" key press as the correctly capitalized letter is sent anyway
        if (e.key !== "Enter") {
          //If "Enter" hasn't been reached (last key press sent by scanner), add the charactor to the scannerValue object's "current" attribute
          scannerValue.current += e.key;

        } else {
          //Go look for the scanned value in the database
          getItem(scannerValue.current)
          //reset the scannerValue object's "current" attribute to an empty string
          scannerValue.current = "";
          e.target.value = "";
        }

      }

    };
    //This is the event listener waiting for a keypress
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
        {showSelected &&    //if showSelected is true, this block of JSX will trigger and display on the screen (show selected is triggered in getItem() function)
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
                      <th>ID</th>
                      <th>Barcode</th>
                      <th>Name</th>
                      <th>TAMCN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selected._id}</td>
                      <td>{selected.ScannerID}</td>
                      <td>{selected.Nomenclature}</td>
                      <td>{selected.TAMCN}</td>
                      
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>AAC</th>
                      <th>Account Number</th>
                      <th>NIIN</th>
                      <td>&nbsp;</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selected.AAC}</td>
                      <td>{selected.Account_Number}</td>
                      <td>{selected.NIIN}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <Button variant="primary" onClick={handleCheckItemInOut}>
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
                    <td><Form.Control type="text" id='barCode' value={ScannerID} disabled /></td>
                    <td><Form.Control type="text" id='itemName' placeholder="Item Name" onInput={e => setNomenclature(e.target.value)} /></td>
                    <td><Form.Control type="text" id='TAMCN' placeholder="TAMCN" onInput={e => setTAMCN(e.target.value)} /></td>
                    <td><Form.Control type="text" id='AAC' placeholder="AAC" onInput={e => setAAC(e.target.value)} /></td>
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
                    <td><Form.Control type="text" id='Account' placeholder="Account Number" onInput={e => setAccount_Number(e.target.value)} /></td>
                    <td><Form.Control type="text" id='NIIN' placeholder="NIIN" onInput={e => setNIIN(e.target.value)} /></td>
                    <td colSpan={2}><Form.Control type="text" id='SUC' placeholder="ex - YBOATS" onInput={e => setSUC(e.target.value)} /></td>
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

        {newChoice && ////if newChoice is true, this block of JSX will trigger and display on the screen (newChoice is triggered in getItem() function when no value is returned from the database search)
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

