const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require('nodemailer');
const contactRoute = require("./contactRoute");

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mierafabebe12@gmail.com',
    pass: ''
  }
});

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Pass transporter to contactRoute
app.use('/api/contact', contactRoute(transporter));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
