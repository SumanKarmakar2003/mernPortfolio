const mongoose = require('mongoose');
 
 // List of columns for Employee schema
 const Employee = new mongoose.Schema({
 name: {
     type: String,
     required: true
 },
email: {
    type: String,
    required: true,
     unique: true
 },
 subject: {
    type: String,
     required: true
 },
 message: {
    type: String,
    required: true
 }
 })
 const Register = new mongoose.model('Register', Employee);
 module.exports = Register;