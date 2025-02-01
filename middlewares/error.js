const errorHandeler=(err,req,res,next)=>{
    console.log(err.message);
    res.json({message:err.message});
    next();
}

module.exports = errorHandeler; // Exporting the function to be used in index.js    