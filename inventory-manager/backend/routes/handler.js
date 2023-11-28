const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas')

router.get('/items', getItem, (req, res) => {
res.send(res.Item)
})

router.get('/items/:ScannerID', getItem, (req, res) => {
  res.send(res.Item)
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