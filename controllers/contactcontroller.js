const async_error = require("express-async-handler")
const Contact = require("../models/contactmodel");

const getcontacts= async_error((async (req,res)=>{
    const Contacts = await Contact.find();
    console.log(Contacts);
    res.json({message:"Hello World"});
}))

const getcontact= async_error((async (req,res)=>{
    const contact = await Contact.findById(req.params
        .id);
    console.log(contact);
    res.json({message:"Hello World"});
}))

const createcontact = async_error(async (req, res) => {
    console.log(req.body);
    const { name, phone } = req.body;
    const contact = await Contact.create(
        {
            name,
            phone
        }
    );
    if (!req.body.name || !req.body.phone) {
        throw new Error("Name and Password are required");
    }

    res.json({ message: contact});
});

const updatecontact = async_error(async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.json({ message: contact });
});

const deletecontact = async_error(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: contact });
});

module.exports = {getcontacts,getcontact,createcontact,updatecontact,deletecontact}; // Exporting the functions to be used in contactRoutes.js  
