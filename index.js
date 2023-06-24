const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/utils/db").sequelize;
const app = express();
const port = 3000;
const apiRouter = require("./src/routes/api.route");
const multer = require('multer');
const upload = multer(); // config


const Ledger = require("./src/models/ledger.model")
const Payment = require("./src/models/payment.model")


const associate = require("./src/models/associations")

associate()


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(upload.array());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use("/api/v1", apiRouter);

sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
