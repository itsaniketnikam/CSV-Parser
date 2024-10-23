const express = require('express');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const purchaseRoutes = require('./routes/purchaseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and form-data requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the purchase routes
app.use('/', purchaseRoutes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
