const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas')

router.get('/items', async (req, res) => {
  const items = schemas.Items

  const itemData = await items.find({}).limit(100).exec()

  if(itemData){
    res.end(JSON.stringify(itemData));
  }
    
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;