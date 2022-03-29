const studentModel = require('../models/studentModel');

const saveStudentHandler = async function (request, response) {
	const students = new studentModel(request.body);
	console.log(students);
	try {
		await students.save();
		response.status(200).json({ students });
	} catch (error) {
		response.status(500).json({ error: error });
	}
	return;
}

module.exports = saveStudentHandler;