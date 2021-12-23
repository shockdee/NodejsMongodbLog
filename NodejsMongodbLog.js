const express = require("express")
const ejs = require("ejs")
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://172.21.2.236:27017/190110910823');
const schema = {
    name: String,
    age: Number,
    health: String,
    hobby:String,
}
const mydata = mongoose.model('cat1s', schema);
// const kitty = new mydata({name:'test1'});
// kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    // res.send(req.query)
    // console.log(req.query)
    const kitty = new mydata({name:req.query.first,health:req.query.second});
    kitty.save()
    ejs.renderFile("result.html",{returnVal:req.query.first},(err,str)=>{
        res.send(str);
    });
})

app.listen(21921)