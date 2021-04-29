const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
	firstName: {type: String},
	lastName: {type: String},
	emailAddress: {type: String},
	password: {type: String},
	isAdmin: {type: Boolean, default: false},
	mobileNumber: {type: String},
	enrollments: [{
		courseId: {type: String},
		enrolledOn: {
			type: Date, 
			default: new Date() 
		},
		status: {type: String, default: "active"}
	}]
})


module.exports = mongoose.model('user', userSchema);