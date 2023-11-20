const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas')

router.get('/items', async (req, res) => {
  const items = schemas.Items

  //const itemData = await items.find({ ScannerID: '041167066201' }).limit(100).exec()
  const itemData = await items.find({}).exec()

  if(itemData){
    res.end(JSON.stringify(itemData));
  }
    
});


module.exports = router;