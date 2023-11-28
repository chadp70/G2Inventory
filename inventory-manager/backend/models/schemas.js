const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    TAMCN: { type: String },
    AAC: { type: String },
    SUC: { type: String },
    Account_Number: { type: String },
    Nomenclature: { type: String },
    NIIN: { type: String },
    ScannerID: { type: String },
    Available: {type: Boolean},
    CheckedOutTo: { type: String }  
})

const Items = mongoose.model('Items', itemSchema, 'items')
const mySchemas = { 'Items': Items }

module.exports = mySchemas