const User=require("../models/usermodel")
const loadresister=async(req,res)=>{
    try{
      res.render('registeration')
    }catch(error)
    {
        console.log(error.message)
    }
}

const insert_user=async(req,res)=>{
    try{
    const user=new  User({
       
        name:req.body.name, 
        email:req.body.email, 
        mobile:req.body.mno,
        image:req.file.filename, 
        password:req.body.password, 
        is_admin:0
        
    })
    const userData=await user.save();
    if(userData){
res.render('registration',{message:"Registered Sucessfully !!!"})
    }
    else{
        res.render('registration',{message:"Registered failed !!!"}) 
    }
    }
    catch(error){

     console.log(error.message);
    }
}


module.exports={
loadresister,
insert_user
}