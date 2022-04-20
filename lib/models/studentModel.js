'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
	name: {
		type: String,
		required: 'Kindly enter the name of the task'
	},
	course: {
		type: String,
		required: 'kindly enter the course description'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	updatedDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('bits-students', StudentSchema);