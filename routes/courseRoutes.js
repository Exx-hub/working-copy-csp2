// const router = require('express').Router(); // short hand

const express = require("express");

const router = express.Router();

const courseController = require('../controllers/courseController');

router.get("/", (req,res) => {
	
	if(req.query.id){
		courseController.getCourseDetails(req.query.id).then(course => {
			res.send({course});
		})
	} else {
		courseController.getAll().then(courses => {
		res.send({
			courses
		});
	})
	}
})


module.exports = router;