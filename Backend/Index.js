//importing express module 
const express = require('express');
 const userRouter=require("./routers/userRouter");
 const customerRouter=require("./routers/coustomerRouter");
//  const videoRouter=require("./routers/videoRouter");
//  const productRouter=require("./routers/productRouter");
 const cors=require("cors")

//initializing express app
const app=express();

const port=5000;

//for converting json data into javascript  
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"]
}))

//middleware
app.use("/user",userRouter);
app.use("/customer",customerRouter);

// app.use("/video",videoRouter);
// app.use("/product",productRouter);

//route or endpoint 
app.get(  "/", (req,res)=>{
    res.send("response from express");
})
app.get(  "/home", (req,res)=>{
    res.send("response from home");
})


//starting the server 
app.listen(port,()=>{
    console.log(" express server started...");
});