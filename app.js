require("dotenv").config({ path: "./dev.env" });
require("./src/db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const publicRoutes = require("./src/routes/publicRoutes");
const privateRoutes = require("./src/routes/privateRoutes");

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(privateRoutes);
app.use(publicRoutes);

app.listen(port, () => console.log(`Server is runnning on port ${port}`));
