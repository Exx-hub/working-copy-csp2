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