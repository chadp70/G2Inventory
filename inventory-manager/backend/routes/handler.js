const express = require('express');
const schemas = require('../models/schemas')

const cors = require("cors");
const router = express();
router.use(cors());



//GET all items in the database (result when no scannerID is sent)
router.get('/items', getItem, (req, res) => {
res.send(res.Item)
})


//GET the data item based on the fetch call values
router.get('/items/:ScannerID', getItem, (req, resp) => {
  resp.send(resp.Item)
})

//Creating one
router.post("/", async (req, resp) => {
  
  try {
      const item = schemas.Items(req.body); // get the request and format it based on the ITEMS schema
      
      let result = await item.save(); // Wait until the information is saved to the database before proceeding
      result = result.toObject();
      if (result) {
          resp.send(req.body);
      } else {
       
      }
      console.log(req.body)

  } catch (e) {
      resp.send(e); //If there is an error, send the error details back
  }
});


//Check out/in  function 
//!!! THIS DOES NOT WORK !!! There is a CORS error (cross domain origin that needs to be addressed)
router.patch("/items/:ScannerID", async (req, resp) => {
  const item = schemas.Items(req.body);
  console.log(item)
  try {
      
      let scannerId = req.params.ScannerID  //Get requested scanner id
      let available = req.params.Available // Get value of the available key
      await item.findOneAndUpdate( 
        { ScannerID: scannerId },  
        { name: {$set: !available} } //Update the database with the opposite of the current value of available
    ); 

  } catch (e) {
      
      resp.send(e.message);
  }
});


async function getItem(req, res, next){
  const items = schemas.Items
  let Item
  try{
    Item = await items.find(req.params)
      if(Item == null){
          return res.status(404).json({ message: 'Cannot find Item' })
      }
  }catch(err){
      return res.status(500).json({ message: err.message})
  }  

  res.Item = Item
  next()
}

module.exports = router;