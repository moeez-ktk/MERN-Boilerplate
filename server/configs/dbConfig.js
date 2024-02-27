const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

module.exports =  dbConnection;