const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`DB connected successfully`);
  } catch (error) {
    console.error("There is an error in connecting the database", error);
    throw error; // Re-throw the error to handle it in the caller
  }
};

module.exports = connectDb;
