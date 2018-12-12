var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamId: String, //uuid
    teamName: String,
    description: String,
    projId: String
});

// auto append update/created time fields
teamSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentData;

    if(this.name == null || this.code == null)
        return resizeBy.json({success: false, message: 'Missing fields!'});

    next();
});

var Team = mongoose.model('Team', teamSchema);
module.exports = Team;