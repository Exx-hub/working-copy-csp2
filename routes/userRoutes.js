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
});


// ****CHECK IF USER ALREADY EXISTING using email****

router.post('/check-email', (req,res) => {
	const emailObj = {emailAddress: req.body.emailAddress}

	userController.verifyEmail(emailObj).then((result,err) => {
		  
		  if(err) res.status("404").send("error");

		  if(result){
			   res.json({message: "email already exists", data: true});
		   } else {
			   res.json({message: "Your email can be used", data: false});
		   }

		// if no else clause gets error cannot set headers after they
		// are sent to the client.
	});	
})

module.exports = router; // export to get access outside of this module when imported
