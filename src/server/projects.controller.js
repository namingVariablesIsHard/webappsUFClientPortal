const mongoose = require('mongoose');
const config = require('./config/config');
const Project = require('./ProjectSchema');

mongoose.connect(config.db.uri);
var myModel = mongoose.model('Project', Project.Project);

exports.getAllProposedProjects = async function(req, res) {
    //test
    res.json({test: "test"});
    // myModel.find({started: false}, function(err, projList){
    //     if(err){
    //         res.send(err);
    //     }
    //     console.log(projList[0]);
    //     res.json(projList);
    // })
}

exports.getAllCurrentProjects = async function(req, res) {
    myModel.find({started: true, archiveDate: null}, function(err, projList){
        if(err){
            res.send(err);
        }
        console.log(projList[0]);
        res.json(projList);
    })
}

exports.getAllArchivedProject = async function(req, res) {
    myModel.find({archiveDate: { $ne: null } }, function(err, projList){
        if(err){
            res.send(err);
        }
        console.log(projList[0]);
        res.json(projList);
    })
}

exports.getSelectedProject = async function(req, res) {
    myModel.findOne({'projId' : req.query.projId}, function(err, proj){
        if(err){
            res.send(err);
        }
        console.log(proj);
        res.json(proj);
    })
}