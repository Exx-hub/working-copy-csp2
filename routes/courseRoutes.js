// const router = require('express').Router(); // short hand

const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
	res.send("GET /api/courses HELLO");
})

module.exports = router;