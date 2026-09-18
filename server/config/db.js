const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`MongoDB not available: ${error.message}`);
    console.warn('Server running without database. Forms will send emails only.');
  }
};

const getDBStatus = () => isConnected;

module.exports = connectDB;
module.exports.getDBStatus = getDBStatus;
