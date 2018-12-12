var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var studentSchema = new Schema({
    userId: String, //uuid
    firstName: String,
    lastName: String,
    userName: String,
    City: String,
    Country: String,
    Zip: Number,
    email: String,
    description: String
});

// auto append update/created time fields
studentSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;



    if(!this.created_at)
        this.created_at = currentData;

    if(this.name == null || this.code == null)
        return resizeBy.json({success: false, message: 'Missing fields!'});

    next();
});

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;