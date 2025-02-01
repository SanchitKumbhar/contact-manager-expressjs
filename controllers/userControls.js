const async_error = require("express-async-handler")
const userschema = require("../models/contactmodel");
const { model } = require("mongoose");

const register = async_error(async (req, res) => { 

    if(!req.body.username || !req.body.name){
        throw new Error("Username or password not provided")
    }
    const user=userschema.findOne({email})

    
    
});

module.exports = { register }; // Exporting the functions to be used in userRoutes.js