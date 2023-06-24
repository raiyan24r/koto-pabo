const express = require("express");
const router = express.Router();
const ledgerController = require("../controllers/ledger.controller.js")
const paymentController = require("../controllers/payment.controller.js");
const { paymentCreateValidator } = require("../utils/validationSchema.js");
const { checkValidation } = require("../utils/validationResponse.js");


router.get("/test", (req, res) => {
  res.json({ message: "test" });
});


router.get("/ledgers", ledgerController.getAll);

router.post("/payment", paymentCreateValidator, checkValidation, paymentController.create);

module.exports = router;