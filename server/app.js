const express = require("express");

const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(express.json());
app.use(cookieParser());

app.use("/", express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// app.use(cors())
app.use(cors({
  origin: ['https://laughing-space-sniffle-qrgjvqpvg6h5x9-5173.app.github.dev/',],
  credentials: true
}));


app.use("/test", (req, res) => {
  res.send("Working!");
});

const user = require("./controller/user")

app.use("/api/v2", user)


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
  }
  

module.exports = app