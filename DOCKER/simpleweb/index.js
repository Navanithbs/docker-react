const express = require('express');
const app=express();

app.get('/',(req,res)=>{
res.send("hello GOOD MORNING!!!!!")
})

app.get('/meghana',(req,res)=>{
res.send("GOOD BYE!!!!!")
})


app.listen(8001,()=>{
    console.log("server started...!!!!!!!!")
})
