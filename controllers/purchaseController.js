const fs = require('fs');
const csv = require('csv-parser');
const purchaseService = require('../services/purchaseService');

exports.uploadCsv = (req, res) => {
  const filePath = req.file.path;

  // Parse CSV file and save data
  purchaseService.processCsv(filePath)
    .then(() => {
      res.send('CSV data successfully uploaded and stored in the database.');
    })
    .catch(err => {
      console.error('Error processing CSV:', err);
      res.status(500).send('Error uploading CSV.');
    });
};
