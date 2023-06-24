const Ledger = require("../models/ledger.model")
const Payment = require("../models/payment.model")


function getAll(req,res) {
   const ledgers = Ledger.findAll({
    attributes: {exclude: ['password']},
    include: Payment
   })
   .then(data => {
    res.send(data);
   })
   .catch(err => {
    res.status(500).send({
        message:
            err.message || "Error"
    });
   });
}

module.exports = {
    getAll
}













