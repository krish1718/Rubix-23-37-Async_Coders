const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

// EXPRESS
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// MONGOOSE
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/prac', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("We are connected bro");
})

//Schema
var commSchema = new mongoose.Schema({
  username: String,
  message: String
});

//Model
var Group1 = mongoose.model('Group1', commSchema);
var Group2 = mongoose.model('Group2', commSchema);

app.post("/community", (req, res) => {
    var groupname = req.query.chat;

    if(groupname == 'Group1'){
        var myData = new Group1(req.body)
        myData.save().then(()=>{
            console.log('done');
            res.send('This data has been saved to the database')
        }).catch(()=>{
            console.log('not done');
            res.status(400).send('Item was not saved to the database')
        });
    }
    else{
        var myData = new Group2(req.body)
        myData.save().then(()=>{
            console.log('done');
            res.send('This data has been saved to the database')
        }).catch(()=>{
            console.log('not done');
            res.status(400).send('Item was not saved to the database')
        });
    }
});

app.get("/community", (req, res)=>{
    var groupname = req.query.chat;
    groupname = groupname.toLowerCase();
    let view;
    
    async function viewMessages(){
        view = await db.collection(`${groupname}`).find().toArray();
        res.json(view);
    }
    viewMessages();
})

// listen to server
app.listen(port, () => console.log("Server started on port " + port));
