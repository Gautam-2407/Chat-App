const mongoose = require('mongoose');

const newTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: true
        },
    date: {
        type: Date,
        default: Date.now
    }
});

const NewTasks = mongoose.model('NewTasks', newTaskSchema);

module.exports = NewTasks;