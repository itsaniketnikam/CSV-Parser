const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const purchaseController = require('../controllers/purchaseController');

// Route to upload CSV file
router.post('/upload-csv', upload.single('file'), purchaseController.uploadCsv);

module.exports = router;
