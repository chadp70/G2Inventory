const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas')

const cors = require("cors");
const app = express();
app.use(cors());

router.get('/items', getItem, (req, res) => {
res.send(res.Item)
})

router.get('/items/:ScannerID', getItem, (req, resp) => {
  resp.send(resp.Item)
})

//Creating one
router.post("/", async (req, resp) => {
  
  try {
      const item = schemas.Items(req.body);
      
      let result = await item.save();
      result = result.toObject();
      if (result) {
          resp.send(req.body);
      } else {
       
      }
      console.log(req.body)

  } catch (e) {
      resp.send(e);
  }
});


//Check out/in
router.patch("/items/:ScannerID", async (req, resp) => {
  const item = schemas.Items(req.body);
  try {
      let scannerId = req.params.ScannerID
      let available = req.params.Available
      await item.findOneAndUpdate( 
        { ScannerID: scannerId },  
        { name: {$set: !available} } 
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