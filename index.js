const express = require('express');
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

// DB and Models
const dbconnect = require('./dbconnect.js');
const PersonModel = require('./Workforce_schema.js');
const TaskModel = require('./meeting_schema.js');
const SubmitTaskModel = require('./finance_schema.js');

// GET /finance - View financial data 
app.get('/finance', (req, res) => {
    console.log("INSIDE HR /finance API");
    TaskModel.find()
        .then(data => {
            res.status(200).json(data); // Send task data as financial report
        })
        .catch(err => {
            res.status(500).json({ message: err.message || 'Error fetching finance data' });
        });
});

// GET /workforce - View all employee data
app.get('/workforce', (req, res) => {
    console.log("INSIDE HR /workforce API");
    PersonModel.find()
        .then(data => {
            res.status(200).json(data); // Send list of all employees
        })
        .catch(err => {
            res.status(500).json({ message: err.message || 'Error fetching workforce data' });
        });
});

// GET /meetingschedule - View scheduled meetings
app.get('/meetingschedule', (req, res) => {
    console.log("INSIDE HR /meetingschedule API");
    SubmitTaskModel.find() // Reuse model for simplicity; can replace with dedicated MeetingModel
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message || 'Error fetching meeting schedule' });
        });
});

// Start Express server on PORT 5005
app.listen(5005, () => {
    console.log('HR Server started on port 5005');
});
