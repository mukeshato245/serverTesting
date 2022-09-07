const Contact = require("../models/contactModel")

// add visitors in contact page
exports.addContact = async(req, res) => {
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        phone: req.body.phone,
        message: req.body.message
    })
    contact = await contact.save()
    if(!contact){
        return res.status(400).json({error:"something went wrong"})
    }
    res.send(contact)
}