const User = require("../models/User");
const Course = require("../models/Course");

const bcrypt = require('bcrypt'); // used to encrpyt data like passwords

// Create a new user

module.exports.register = (userData) => {
	let { firstName, lastName, password, emailAddress, mobileNumber } = userData;

	password = bcrypt.hashSync(password, 10);

	let newUser = new User({
		firstName,
		lastName,
		password,
		emailAddress,
		mobileNumber
	})

	
	return newUser.save().then((savedUser,err) => {
		if(err) return false;

		return true;
	})

};

// Check is user already exists

module.exports.verifyEmail = (emailObj) => {
	return User.find(emailObj).then(userArr => {
		return userArr.length > 0 ? true : false;
	})
};


// LOGIN USER
module.exports.login = (userData) => {
	const {emailAddress, password} = userData;

	return User.findOne({emailAddress}, 'password').then((foundUser) => {
		// console.dir(foundUser);

		if(foundUser === null){
			return {
				data: false,
				userDetails: "Username/Email not registered."
			}
		} else {
			// user document was found
			// check if password is the same as password in found document
			// bcrypt.compareSync(password from frontend, password in document)
			const doesPasswordsMatch = bcrypt.compareSync(password, foundUser.password)

			if(doesPasswordsMatch) {
				let userUpdated = foundUser.toObject();
				delete userUpdated.password

				return {
					data: true,
					userDetails: userUpdated
				}
			} else {
				return {
					data: false,
					userDetails: "Password incorrect."
				};
			}
		}
	})
};

// Retrieve specific user by Id
module.exports.getUserDetails = (userId) => {
	return User.findById(userId, "-password").then(foundUser => {
		return foundUser; // use password in projection to return only the password
	});
}

// enroll a user to a course

module.exports.enroll = (userId, courseName) => {
	return User.findById(userId).then((foundUser,err) => {
			if(err) return console.error(err);

				foundUser.enrollments.push({courseName});

				return foundUser.save().then((savedUser,err) => {
					if(err) return console.error(err);

					return Course.findOne({name: courseName}).then((course,err) => {
						if(err) return console.error(err);

						course.enrollees.push({
							userId: userId, 
							lastName: savedUser.lastName
						});

						return course.save().then((savedCourse,err) => {
							return err ? false : true;
						})
					})
				 })
 			})
		};
