const responseMessage = require("./response.msg");

exports.validateFile = (req,res,next) => {
    console.log(req.file)
    if(!req.file) {
        return next()
    }

    if(req.file.size > 2000000) {
        return res.status(400).send(responseMessage("Too big filesize", "Error"))
    }

    const acceptedFileType = ['png','jpg','jpeg'];

    const fileExtension = req.file.mimetype.split('/').pop();
    if(!acceptedFileType.includes(fileExtension)) {
       return res.status(400).send(responseMessage("Invalid File Type", "Error"))
    }

    return next()
}
