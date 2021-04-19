// this is a user route
const express = require('express');

const router = express.Router();

// import controller export
const userController = require('../controllers/userController');

// ---Primary user routes---
// root route: /api/users

// ***Create a new user*****
router.post('/register', (req,res) => {
	const userData = req.body;
	res.send(userController.register(userData));
})

// router.post('/register', userController.register);

// Retrieve all users
// router.get('/register', (req,res) => {
// 	res.send({
// 		message: "This is a list of all users!"
// 	})
// });

// Retrieve specific user by Id
// router.get();

// Update user details
// router.put();

// Delete an existing user
// router.delete();

module.exports = router; // export to get access outside of this module when imported