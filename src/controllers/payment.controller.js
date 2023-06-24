const Payment = require("../models/payment.model")
const Ledger = require("../models/ledger.model")

const responseMessage = require("../utils/response.msg")

async function create(req,res) {

    res.send(req.body)
    return
    // const id = req.body.id;
    // const link = req.body.link;

    const id = 1;
    const link = "raiyan-zarif-sdfdsf6dsf";
    const isValid = await Ledger.findOne({ 
            where: 
                {
                    id:id,
                    link:link
                }
        });
    

    if(isValid === null) {
       res.status(404).send(responseMessage("Not found","invalid"))
       return
    }


    

    var paymentEntry = req.body

    if(paymentEntry.hasOwnProperty('amount') && paymentEntry.hasOwnProperty)


    delete
   
    Payment.create()

    // const ledgers = Ledger.findAll({
    //  attributes: {exclude: ['password']}
    // })
    // .then(data => {
    //  res.send(data);
    // })
    // .catch(err => {
    //  res.status(500).send({
    //      message:
    //          err.message || "Error"
    //  });
    // });
 }

 module.exports = {
    create
 }
 