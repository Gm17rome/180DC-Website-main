const cors = require("cors");
const express = require("express");
const routes = require('./src/routes/routes');
const cookieParser=require("cookie-parser");

const app = express();

app.use(cors());
app.use(cookieParser());

app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

app.use(express.json());
app.use('/api/v1/', routes);

module.exports = app;
