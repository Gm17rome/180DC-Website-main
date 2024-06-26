const dotenv = require("dotenv");
const connectDb = require("./src/database/db.js"); // Corrected import
const app = require("./app.js"); // Corrected import

dotenv.config({
  path: "./.env"
});

connectDb()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error in running port", err);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on Port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection failed", err);
  });
