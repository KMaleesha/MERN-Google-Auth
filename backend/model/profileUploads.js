const mongoose = require('mongoose');

const profielUploadSchema = new mongoose.Schema(
  {
    title: String,
    file_name: String,
    pdf: String,
    fileLocation: String,
    version: String,
    date: { type: Date, default: Date.now },
    username: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

  },
  {collation:"profileUploads"}
);

module.exports = mongoose.model('profileUploads', profielUploadSchema);
