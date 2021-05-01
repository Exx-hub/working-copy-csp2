const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
     enrollees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});


module.exports = mongoose.model("Course", courseSchema);




// enrollees: [ { userId: {type: String } }]

// enrollees: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }]
  


  // enrollees: [{ userId: {type: String } }]