// this is a user route
const express = require("express");

const router = express.Router();

// import controller export
const userController = require("../controllers/userController");

// ---Primary user routes---
// root route: /api/users

// ***Create a new user*****

router.post("/register", (req, res) => {
	const userData = req.body;
	
	let newUserSaved = userController.register(userData);
	console.dir(newUserSaved);
	res.json({
		message: "User saved successfully",
		data: newUserSaved
	})
});

module.exports = router; // export to get access outside of this module when imported
