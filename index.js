const mongoose= require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/user-management-system");
const express=require("express")
const app =express()
 

//for user routes
const userRoute=require("./routes/userroutes")
app.use('/',userRoute)
//server
app.listen(3300,()=>{
    console.log("server is live at 3300")
})
 