const Payment = require("../models/payment.model")
const Ledger = require("../models/ledger.model")

async function create(req,res) {
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
      


    if(isValid === true) {
        res.send({
            hmm: isValid
        });
        // res.send('valid');
    } else {
        res.send({
            mh: isValid
        });
        // res.send('not valid');
    }
   
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
 