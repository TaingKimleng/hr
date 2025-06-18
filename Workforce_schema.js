const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['employee', 'manager', 'hr'],
    default: 'employee'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  department: String,
  hireDate: {
    type: Date,
    default: Date.now
  },
  salary: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Person', PersonSchema);
