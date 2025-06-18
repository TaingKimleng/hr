const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  participants: [{
    type: String  
  }],
  scheduledAt: {
    type: Date,
    required: true
  },
  location: String,
  createdBy: {
    type: String  
  },
  notes: String
});

module.exports = mongoose.model('Meeting', MeetingSchema);
