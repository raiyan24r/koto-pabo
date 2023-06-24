const Ledger = require("../models/ledger.model")
const Payment = require("../models/payment.model")


function associate() {
    Ledger.hasMany(Payment, {foreignKey: "ledger_id"})
    Payment.belongsTo(Ledger, {foreignKey: "ledger_id"})
}


module.exports = associate
