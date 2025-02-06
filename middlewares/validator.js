const async_handler=require("express-async-handler")
const jwt =require("jsonwebtoken")

const validateToken=async_handler(async(req,res,next)=>{
    let token;
    let authheader=req.headers.Authorization || req.headers.authorization;
    if(authheader && authheader.startsWith("Bearer")){
        token = authheader.split(" ")
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,decode)=>{
            if(err){
                throw new Error("User is not authenticated!!!")
            }
        })
    }
})