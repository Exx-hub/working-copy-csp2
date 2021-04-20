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
	
	userController.register(userData).then(result => {
		res.send({
			message: "New user has been created.",
			data: result
		})
	})
	// res.send("hello")
});

module.exports = router; // export to get access outside of this module when imported
