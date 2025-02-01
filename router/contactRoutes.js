const express = require("express");
const {getcontacts,
    createcontact,
    updatecontact,
    deletecontact,getcontact
} = require("../controllers/contactcontroller");

const router = express.Router();

router.route("/").get(getcontacts);
router.route("/:id").get(getcontact);
router.route("/").post(createcontact)
router.route("/:id").put(updatecontact);
router.route("/:id").delete(deletecontact)

module.exports = router; // Exporting the router to be used in index.js  