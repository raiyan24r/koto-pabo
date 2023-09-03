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

function create(req,res) {
    
    var participant_1 = req.body.participant_1;
    var participant_2 = req.body.participant_2;

    var link =`${participant_1}-${participant_2}-` + Buffer.from(Math.random().toString()).toString("base64").substring(10,16);

    res.send(link)
    return


    const ledgers = Ledger.create({
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
    getAll,
    create,
}













