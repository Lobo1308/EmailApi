const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());


const sendMail = require('./controller/sendMail');

app.get('/', (req,res)=>{
    res.send('API is Running');
});

app.post('/email', sendMail);

const start = async () =>{
    try {
        app.listen(port, () =>{
            console.log(`Port is Working:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

