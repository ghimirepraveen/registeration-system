const express=require("express")
const bodyparser=require("body-parser")
const multer=require("multer")
const path =require("path")
const user_route=express()
user_route.set('view engine','ejs')
user_route.set('views','./view/users')
user_route.use(bodyparser.json())
user_route.use(bodyparser.urlencoded({extended:true}))

const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userimages'))
    },
    filename:function(req,file,cb){
        const name=Date.now()+'-'+file.originalname 
        cb(null,name);

    }
})
const upload=multer({storage:storage})
const userConteroller=require("../controllers/usercontroller")
user_route.get('/register',userConteroller.loadresister)

user_route.post('/register',upload.single('image'),userConteroller.insert_user)


module.exports=user_route;