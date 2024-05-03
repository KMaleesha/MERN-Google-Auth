const express = require('express');
const router = express.Router();
const upload = require('../middleware/profileUploadMiddleware');
const uploadController = require('../controller/profileUploadController');

router.post("/upload-files", upload.single("file"), uploadController.uploadFile);

module.exports = router;
