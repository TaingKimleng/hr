const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  assignedTo: {
    type: String,  // or ObjectId
    required: true
  },
  dueDate: Date,
  budget: {
    type: Number,
    default: 0
  },
  cost: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);
