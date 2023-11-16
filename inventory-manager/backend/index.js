const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST"]
}))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

mongoose.connect(process.env.DB_URI)
.then(()=>console.log('DB Connected'))
.catch(err => console.log(err))

const PORT = process.env.PORT// || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});