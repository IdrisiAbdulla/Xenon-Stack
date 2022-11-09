const mongoose=require("mongoose");

const db='ContactUs'

const dburl=`mongodb+srv://idrisiabdulla:12345@cluster0.zyjo5fe.mongodb.net/${db}?retryWrites=true&w=majority`

//Asynchronous function - returns promise 
mongoose.connect(dburl)
.then((result) => {
    console.log("database connected Successfully");
    
}).catch((err) => {
    console.log(err);
    
});

module.exports=mongoose;