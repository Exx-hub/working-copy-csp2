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


// ******LOGIN A USER*******
router.post('/login',(req,res) => {
	const userData = req.body;
	userController.login(userData).then((result,err) => {
		if(err) res.status("404").send("error");

		const {data, userDetails} = result;

		res.send({
			data,
			userDetails
		});
	});
})

// ******RETRIEVE SPECIFIC USER BY ID*******
router.get('/details', (req,res) => {
	const {id: userId} = req.query;

	userController.getUserDetails(userId).then((result,err) => {
		if(err) res.status("404").send("error");

		res.send({
			userDetails: result
		});
	});
});


//enroll a to course
router.post("/enroll", (req,res) => {
	// console.log(req.body)
	const {userId, courseId} = req.body;

	userController.enroll(userId,courseId).then(result => {
		res.send( {data: result} );
	})
})

module.exports = router; // export to get access outside of this module when imported
