const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    isActive: {
      type: Boolean,
      default: true
    },
    createdOn: {
      type: Date,
      default: new Date()
    },
     enrollees: [ { userId: {type: String } }]
});


module.exports = mongoose.model("Course", courseSchema);


// enrollees: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }]






  // enrollees: [{ userId: {type: String } }]