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