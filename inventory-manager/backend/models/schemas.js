const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    TAMCN: {type:String},
    AAC: {type:String},
    SUC: {type:String},
    Account_Number: {type:String},
    Nomenclature: {type:String},
    NIIN: {type:String},
    Count_of_Serial_Number: {type:String},
    Sum_of_Quantity: {type:String},
    Sum_of_Unit_Price: {type:String},
    ScannerID: {type:String}
})

const Items = mongoose.model('Items', itemSchema, 'items')
const mySchemas = {'Items':Items}

module.exports = mySchemas