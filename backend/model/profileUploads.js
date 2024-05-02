const mongoose = require('mongoose');

const profielUploadSchema = new mongoose.Schema({
    username: String,
    file_name: String,
    file_location: String,
    dateTime: Date,
    version: String
    
});

module.exports = mongoose.model('profile_uploads', profielUploadSchema);
