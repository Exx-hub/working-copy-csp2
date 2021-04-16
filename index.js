const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
	res.status(200).json({
		"message": "Course Booking System Root Route"
	})
})

app.listen(3000, () => {
	console.log(`Server listening on port 3000`);
})