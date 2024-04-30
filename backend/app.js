require('dotenv').config();
require('./db/conn');

const express = require('express');
const cros = require('cors');

const app = express();

app.use(cros({
    origin:"http://localhost:3000/",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json("sever start")
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})