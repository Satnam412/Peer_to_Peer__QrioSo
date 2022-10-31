'use strict'

var mongoose = require ('mongoose');
var db = require('../db_config');

var Question = new mongoose.Schema({
	area : {type: String, required: true},
	question : {type: String, required: true, unique: true},
	answer : {type: Array},
	// answer : {type: Array},
	// likes : {type : Number}
	timestamp : { type: Date, default: Date.now ,required: true},
	username : { type: String, lowercase: true}
	// email_id : {type: String, lowercase: true}
},{ collection : "question" });

Question.index({
    question: 'text'
},{ "background": false });
var aj = db.model('question', Question);
module.exports = aj;
