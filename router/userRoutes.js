const express = require("express");
const {register,login,current} = require("../controllers/userControls");
const validateToken = require("../middlewares/validator")
const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.get("/current",validateToken,current)

module.exports=router
