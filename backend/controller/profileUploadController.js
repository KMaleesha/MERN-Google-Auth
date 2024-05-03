const mongoose = require('mongoose');
require('../model/profileUploads');
const ProfileUpload = mongoose.model("profileUploads");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ message: 'Please upload a file' });
    }

    if (req.file.size > 2 * 1024 * 1024) {
      return res.status(400).send({ message: 'File size exceeds 2MB limit' });
    }

    console.log(req.file);
    const title = req.body.title;
    const filename = req.file.filename;
    const version = req.body.version;
    const file_name = req.file.originalname;
    const fileLocation = req.file.path;
    const date = Date.now();

    await ProfileUpload.create({
        title:title, 
        pdf:filename,
        version:version,
        file_name:file_name,
        fileLocation:fileLocation,
        date:date,
    });

    res.send({ status: "Ok" });
  } catch (error) {
    res.status(500).json({ status: error.message });
  }
};

module.exports = { uploadFile };
