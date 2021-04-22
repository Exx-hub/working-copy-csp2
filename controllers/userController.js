const User = require("../models/User");

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



module.exports.login = (userData) => {
	const {emailAddress, password} = userData;

	return User.findOne({emailAddress}).then((foundUser) => {

		if(foundUser === null){
			return false;
		} else {
			// user document was found
			// check if password is the same as password in found document
			// bcrypt.compareSync(password from frontend, password in document)
			const doesPasswordsMatch = bcrypt.compareSync(password, foundUser.password)

			if(doesPasswordsMatch) {
				return true;
			} else {
				return false;
			}
		}
	})
};

// Retrieve all users

// Retrieve specific user by Id

// Update user details

// Delete an existing user




// Login a user
// module.exports.loginUer = (userData) = {
// 	const {emailAddress,password} = userData;
// 	console.log(emailAddress);
// 	console.log(password);
// 
// 	return User.findOne({emailAddress}).then()
// 
// 	return User.findOne({emailAddress}, (err,foundItem) => {
// 		if(err) console.error(err)
// 			return foundItem;
// 	})
// }