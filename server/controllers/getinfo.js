const users = require("../models/userSchema");

exports.admin = async (req, res) => {

    try {
        const adminMembers = await users.find({ role: 'admin' });
        res.json(adminMembers);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    

}