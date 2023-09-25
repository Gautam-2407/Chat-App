const NewTasks = require('../models/newTaskSchema');

exports.Task = async (req, res) => {

    const {title, description, id }= req.body;

    if (!title || !description || !id) {
        return res.status(400).json({
            error: 'Please provide a title and description'
        });
    }
    try{

        const newTask = new NewTasks({
            title,
            description,
            id
        });
        const storeTask = await newTask.save();
        res.status(200).json({success: storeTask});
        console.log(storeTask);
    }
    catch(err){
        res.status(500).json({error: err});
    }

}

exports.taskDelete = async (req, res) => {
    const id = req.params.id;
    try {

        const Deletedtask = await NewTasks.findByIdAndDelete(id);
  
  
        if (!Deletedtask) {
          return res.status(404).json({ message: 'Task not found' });
        }
      // console.log(delete);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete Task' });
    }
    
  }

  exports.taskUpdate = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body; // Assuming you send the updated task data in the request body
  
    try {
      const updatedTask = await NewTasks.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Failed to update Task' });
    }
  }
  