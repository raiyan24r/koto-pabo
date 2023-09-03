const Payment = require("../models/payment.model")
const Ledger = require("../models/ledger.model")

const responseMessage = require("../utils/response.msg")
const sharp = require("sharp")

async function create(req,res) {
    var uploadedFile = await imageProcess(req,req.body.id)
   
    if (uploadedFile != '') {
        req.body.image = uploadedFile
    }

    // res.send(req.body)
    // return
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
    
    // res.send(paymentEntry)
    Payment.create(paymentEntry)
      .then(data => {
        res.send('log');
       })
       .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error"
        });
       });

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



 const imageProcess = async (req, uniqueId = (Math.random() * (9999 - 100) + 100)) => {

    if(!req.file) {
        return ''
    }

    const formatedName = req.file.originalname.split(' ').join('-');
    const fileName = `${uniqueId}-${formatedName}`;

    try {
        await sharp(req.file.buffer)
        .metadata()
        .then(({ width }) => sharp(req.file.buffer)
            .resize(Math.round(width * 0.6))
            .toFile(`./data/uploads/${fileName}`)
        );

        return fileName
    } catch (err) {
        console.log('error',err)
        return 'error'
    }


 }

 module.exports = {
    create
 }
 