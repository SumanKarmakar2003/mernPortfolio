const mongoose = require('mongoose');
 
 // List of columns for Employee schema
 const Subscription = new mongoose.Schema({
email: {
    type: String,
    required: true,
     unique: true
 }
 })
 const Subscribe = new mongoose.model('Subscribe', Subscription);
 module.exports = Subscribe;