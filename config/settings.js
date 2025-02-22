const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const connectDB = async () => {
    try{
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
        "Database Connected",
        conn.connection.host,
        conn.connection.name
    );
    
} catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
}
}

module.exports = connectDB
