const async_handler=require("express-async-handler")
const jwt =require("jsonwebtoken")

const validateToken=async_handler(async(req,res,next)=>{
    let token;
    console.log(process.env.ACCESS_TOKEN)
    let authheader=req.headers.Authorization || req.headers.authorization;
    if(authheader && authheader.startsWith("Bearer")){
        token = authheader.split(" ")[1]
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,decode)=>{
            if(err){
                console.log(err);
                
                throw new Error("User is not authenticated!!!")
            }
            req.user=decode.user
            next();
            console.log(decode);
            
            
        })

    }

    if(!token){
        throw new Error("NA token")
    }
})

module.exports=validateToken