const users = require("../models/userSchema");

exports.admin = async (req, res) => {

    try {
        const adminMembers = await users.find({ role: 'admin' });
        res.json(adminMembers);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    
}


exports.user = async (req, res) => {

  try {
      const adminMembers = await users.find({ role: 'user' });
      res.json(adminMembers);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  

}

exports.adminDelete = async (req, res) => {
  const id = req.params.id;
  try {
    // console.log(id);
      // await deleteUserFromDatabase(id);
      const deletedUser = await users.findByIdAndDelete(id);


      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
    // console.log(delete);
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
  
}