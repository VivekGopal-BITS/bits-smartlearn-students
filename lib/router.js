const saveStudentHandler = require('./handlers/saveStudentHandler');
const getAllStudentsHandler = require('./handlers/getAllStudentsHandler');

const express = require('express');
const app = express();

app.post('/saveStudent', saveStudentHandler);
app.get('/getAllStudents', getAllStudentsHandler);

module.exports = app;