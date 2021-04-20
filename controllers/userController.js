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

	
	newUser.save((err,savedUser) => {
		if(err) return console.error(err);

		if(!savedUser) {
			return "Save unsuccessful!"
		}

		return savedUser
	})

};

// Retrieve all users

// Retrieve specific user by Id

// Update user details

// Delete an existing user


