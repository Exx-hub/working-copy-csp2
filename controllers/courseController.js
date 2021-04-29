const Course = require('../models/Course');

module.exports.getAll = () => {
	return Course.find({}).then(courses => {
		return courses
	})
}

// module.exports.getAll = async () => {
// 	let courses = await Course.find()
// 		return courses;
// }

module.exports.getCourseDetails = (id) => {
	return Course.findById(id).then(course => {
		return course
	})
}

// ??
//  
// module.exports.getOne = (id) => {
// 	return Course.findById(id).then(course => {
// 		return course
// 	})
// }