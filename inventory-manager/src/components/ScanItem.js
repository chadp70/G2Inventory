import {Row} from 'react-bootstrap';
import {useState, useEffect, useRef} from "react";
import "../css/ScanItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemResults from './ItemResults';
import NewItemForm from './NewItemForm';
const ScanItem = ({change}) => {
    const scannerValue = useRef(); //Scanner value object for reference
    scannerValue.current = "";

    const [scan,setScan] = useState();
    const [newItem,setNewItem] = useState(false);
    function handleChange(newValue) {
      setNewItem(newValue);
    }
    
    
    useEffect(() => {

      const handleKeydown = (e) => {
        //Scanner must be set as keyboard emulator 
        //On scan, last event value passed is "Enter" key press
        if(e.key !== "Shift"){        //Ignore a "shift" key press as the correctly capitalized letter is sent anyway
          if(e.key !== "Enter"){      
            //If "Enter" hasn't been reached (last key press sent by scanner), add the charactor to the scannerValue object's "current" attribute
            scannerValue.current += e.key;
          
          }else{
            //Got to enter set the "scan" state
            setScan(scannerValue.current);
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
      <Row><h5>Scan Inventory Item or enter item barcode here and press the {"<Enter>"} key: <input id='scannedItem' type="text" 
       /></h5></Row>

        <ItemResults value={scan} change={handleChange}/>
        <p>&nbsp;</p>
        <NewItemForm display={newItem}/>
    </>
  );
};
export default ScanItem;