const express = require("express");
const router = express.Router();
const ledgerController = require("../controllers/ledger.controller.js")
const paymentController = require("../controllers/payment.controller.js");
const { paymentCreateValidator } = require("../utils/validationSchema.js");
const { checkValidation } = require("../utils/validationResponse.js");
const { validateFile } = require("../utils/fileValidator.js");


const multer = require('multer');
const storage = multer.memoryStorage();
const uploads = multer({storage});



router.get("/test", (req, res) => {
  res.json({ message: "test" });
});


router.get("/ledgers", ledgerController.getAll);

router.post("/payment", uploads.single('proof'), paymentCreateValidator, checkValidation, validateFile, paymentController.create);

module.exports = router;