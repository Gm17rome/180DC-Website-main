const mongoose = require('mongoose');

const mailListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const MailList = mongoose.model('MailList', mailListSchema);

module.exports = MailList;
