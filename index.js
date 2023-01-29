const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;
const path = require('path')

const openai = require('./routes/openaiRoutes');

const app = express();

//set static file
app.use(express.static(path.join(__dirname,'public')));



//Enable BodyParser 
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//use all the route 
app.use('/openai/',openai);




app.listen(port, (req,res)=>{
    console.log(`server is running on http://localhost:${port}`);
})


