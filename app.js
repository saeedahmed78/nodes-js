// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const config = require('./config/config');

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

// mongoose.connect(config.databaseUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(config.databaseUrl);


app.use('/auth', authRoutes);
app.use('/api', productRoutes);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing
