const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors()); 

// EXPRESS
// app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// MONGOOSE
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/prac', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("We are connected bro");
})

//Schema
var surveySchema = new mongoose.Schema({
  username: String,
  dob: String,
  gender: String,
  med: String,
  type: String
});

//Model
var Survey = mongoose.model('Survey', surveySchema);
app.post('/survey', (req, res)=>{
    var details = {};
    details.name = req.body.fname.username;
    details.dob = req.body.dob;
    details.gender = req.body.gender;
    details.med = req.body.med;
    details.type = req.body.type;

    var myData = new Survey(details);
    myData.save().then(()=>{
        console.log('done');
        res.send('This data has been saved to the database')
    }).catch(()=>{
        console.log('not done');
        res.status(400).send('Item was not saved to the database')
    });
})

app.listen(port, () => console.log("Server started on port " + port));
