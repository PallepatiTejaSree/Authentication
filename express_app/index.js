//express-index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
main()
    .then(() => {
        console.log("MongoDB connected successfully")
    })
    .catch((error) => {
        console.error("MongoDB connection error", error);
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ITA");
}

const db = mongoose.connection;
app.use(bodyParser.json());


//emp model
const Employ = mongoose.model('employees',{
    name : String,
    age : Number,
    position :String
})

//create an emp
app.post('/employees',async(req,res)=>{
    try{
        const employ = new Employ(req.body);
        await employ.save();
        res.send(employ);
    }catch(err){
        res.status(400).send(err);
    }
});

//get all emps
app.get('/employees',async(req,res)=>{
    try{
        const employ = await Employ.find();
        res.send(employ);
    }catch(err){
        res.status(400).send(err);
    }
});

//get an emp by id
app.get('/employees/:id',async(req,res)=>{
    try{
        const employ = await Employ.findById(req.params.id);
        res.send(employ);
    }catch(err){
        res.status(400).send(err);
    }
});

//update emp by id
app.put('/employees/:id',async(req,res)=>{
    try{
        const employ = await Employ.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(employ)
    }catch(err){
        res.status(400).send(err);
    }
});

//delete emp by id
app.delete('/employees/:id',async(req,res)=>{
    try{
        const employ = await Employ.findByIdAndDelete(req.params.id)
        res.send('employee deleted successfully');
    }catch(err){
        res.status(400).send(err);
    }
});

//start the server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});

