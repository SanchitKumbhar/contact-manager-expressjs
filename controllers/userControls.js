const crypto = require("crypto")
const async_error = require("express-async-handler")
const userschema = require("../models/usermodel");
const { model } = require("mongoose");
const jwt = require("jsonwebtoken")

const register = async_error(async (req, res) => {

    if (!req.body.username || !req.body.password) {
        throw new Error("Username or password not provided")
    }
    const { username, password } = req.body
    const user = await userschema.findOne({
        username
    })

    if (user) {
        throw new Error("User already registered")
    }

    const hash = crypto.pbkdf2Sync(req.body.password, "1000", 100000, 64, 'sha512').toString('hex');
    const createusername = await userschema.create({
        username,
        hash

    })
    res.json({
        'message': "created user"
    })
});

const login = async_error(async (req, res) => {
    const { username, password } = req.body
    if (!req.body.username || !req.body.password) {
        throw new Error("Username or password not provided")
    }
    const hash = crypto.pbkdf2Sync(req.body.password, "1000", 100000, 64, 'sha512').toString('hex');

    const user = userschema.findOne({
        username, password
    })
    console.log(hash);

    console.log(user);
    
    

    if (user) {
        if (user.password == hash) {
            console.log("true")
            const accesstoken = jwt.sign({
                user: {
                    username: user.username,
                    id: user.id
                }
            },process.env.ACCESS_TOKEN,
            {
                expireIn:"1m"
            }
        )
            res.json({
                "msg": "LOGIN"
            })
        }
    }
    else{
        res.json({
           "msg": "Kuch to gadbad hai!!!"
        })
    }

})

module.exports = { register,login }; // Exporting the functions to be used in userRoutes.js