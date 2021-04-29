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

// router.get("/", async (req,res) => {
// 	let courses = await courseController.getAll()
// 		res.send({
// 			courses
// 		});
// })

// get specific course via id

// router.get("/", (req,res) => {
// 	console.log(req.query)
// 	courseController.getOne(req.query.id).then(course => {
// 		res.send(course);
// 	})
// })



module.exports = router;