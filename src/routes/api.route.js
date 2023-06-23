const express = require("express");
const router = express.Router();
const ledgerController = require("../controllers/ledger.controller.js")
const paymentController = require("../controllers/payment.controller.js")


router.get("/test", (req, res) => {
  res.json({ message: "test" });
});


router.get("/ledgers", ledgerController.getAll);

router.get("/payment", paymentController.create);

module.exports = router;