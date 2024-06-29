const mongoose = require('mongoose');

// create login schema
const contactSchema = new mongoose.Schema({

      firstName: String,
     lastName: String,
     title: String,
     email: String,
     phoneNumber: Number,
     mobileNumber: Number,
     physicalAddress: String,
     mailingAddress: String,
     preferredContactMethod: String,
  
    updatedDate: {
        type: Date,
        default: Date.now
    },
    createdDate: {
        type: Date,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Contact', contactSchema, 'Contact')
