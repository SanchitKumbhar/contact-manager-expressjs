const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,

    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('users', userschema);