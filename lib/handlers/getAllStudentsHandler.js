const studentModel = require('../models/studentModel');

const getAllStudentsHandler = async function (request, response) {
	const students = await studentModel.find({});

	try {
		response.status(200).json({ value: students });
	} catch (error) {
		response.sendStatus(500).json({ error });
	}
	return;
}

module.exports = getAllStudentsHandler;