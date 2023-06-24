
function responseMessage(message, status = 'ok', data = [], error = []) {
 
    return {
        status : status,
        msg : message,
        data : data,
        error : error
    };
}


module.exports = responseMessage