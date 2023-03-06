const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/bug", require("./routes/api/bug"));
app.use("/api/status", require("./routes/api/status"));

// Connect to MongoDB
// const mongouri = "mongodb + srv://boletorishabh1999:5v2xkelqNtzxigOf@cluster0.eec441u.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect("mongodb+srv://boletorishabh1999:5v2xkelqNtzxigOf@cluster0.eec441u.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
