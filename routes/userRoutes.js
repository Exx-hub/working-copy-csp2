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
	res.send(userController.register(userData));
	// res.send("posting a user")
});

// Retrieve all users
// router.get("/userList", (req, res) => {
// 	res.send("This is a list of all users!");
// });

// // Retrieve specific user by Id
// router.get("/userList/:id", (req, res) => {
// 	res.send("getting a user using a specific id!");
// });

// // Update user details
// router.put("/userList/:id", (req, res) => {
// 	res.send("updating a specific user!");
// });

// // Delete an existing user
// router.delete("/userList/:id", (req, res) => {
// 	res.send("deleting this user!");
// });

// router.get("/", (req, res) => {
// 	res.send("HELLO WORLD");
// });

/* ===================================================================== */
// router.post('/register', userController.register);
// sabi ni sir implicit ito?

module.exports = router; // export to get access outside of this module when imported
