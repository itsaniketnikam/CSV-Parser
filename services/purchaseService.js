const fs = require('fs');
const csv = require('csv-parser');
const { Purchase } = require('../models');

exports.processCsv = (filePath) => {
  return new Promise((resolve, reject) => {
    const purchases = [];

    // Read CSV and process each row
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        purchases.push({
          status: row.status,
          totalSaleAmount: parseFloat(row.totalSaleAmount), // Make sure it's a number
          purchaseDate: new Date(row.purchaseDate),
          vendor: row.vendor,
          createdAt: new Date(row.createdAt),
          updatedAt: new Date(row.updatedAt),
          deletedAt: row.deletedAt ? new Date(row.deletedAt) : null,
          customerId: row.customerId,
          merchantId: row.merchantId,
          orderNumber: row.orderNumber
        });
      })
      .on('end', async () => {
        try {
          // Bulk insert into Purchase table
          await Purchase.bulkCreate(purchases);
          console.log('CSV data successfully saved to database');
          resolve();
        } catch (err) {
          console.error('Error inserting CSV data:', err);
          reject(err);
        }
      })
      .on('error', (err) => {
        console.error('Error reading CSV file:', err);
        reject(err);
      });
  });
};
