const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const limits = { fileSize: 2 * 1024 * 1024 };

const upload = multer({ storage: storage, limits: limits });

module.exports = upload;
