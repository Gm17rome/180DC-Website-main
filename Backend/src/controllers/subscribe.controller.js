const MailList = require('../models/mail_list.model.js');

const addEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const emailExists = await MailList.findOne({ email: email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscriber = new MailList({ email: email });
    await newSubscriber.save();

    res.status(200).json({ message: 'Email added successfully', newSubscriber });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  addEmail
};
