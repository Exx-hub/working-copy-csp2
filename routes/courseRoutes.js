// const router = require('express').Router(); // short hand

const express = require("express");

const router = express.Router();

const courseController = require('../controllers/courseController');

router.get("/", (req,res) => {
	courseController.getAll().then(courses => {
		res.send({
			courses
		})
	})
})

// router.get("/", async (req,res) => {
// 	let courses = await courseController.getAll()
// 		res.send({
// 			courses
// 		});
// })

module.exports = router;