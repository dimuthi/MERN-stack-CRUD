const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student=new Schema({
    student_name:{
        type:String
    },
    institute:{
        type:String
    },
    age:{
        type:Number
    }
},{
collection:'student'
    
});
module.exports = mongoose.model('Student', Student);