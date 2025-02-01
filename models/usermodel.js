const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    username: {
        typr: String,
        required: true,
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
)