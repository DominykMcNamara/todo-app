require("dotenv").config;
const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server is listening on port ${port}`));
