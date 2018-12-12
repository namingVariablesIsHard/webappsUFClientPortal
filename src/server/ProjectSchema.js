var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var projectSchema = new Schema({
    projId: String, //uuid
    projTitle: String,
    companyName: String,
    description: String,
    started: Boolean,
    archiveDate: Date,
    dueBy: Date,
    oneLineAddress: String
});

// auto append update/created time fields
projectSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentData;

    if(this.name == null || this.code == null)
        return resizeBy.json({success: false, message: 'Missing fields!'});

    next();
});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;