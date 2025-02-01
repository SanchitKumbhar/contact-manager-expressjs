const express = require("express");
const errorHandeler = require("./middlewares/error");
const connectDB = require("./config/settings");
const app = express();
connectDB();
const port = 8000;

app.use(express.json());
app.use("/api/contacts", require("./router/contactRoutes"));
app.use("/api/users", require("./router/userRoutes"));
app.use(errorHandeler)

app.listen(port, () => {
    console.log("Server is running on port 8000");

})