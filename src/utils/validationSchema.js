const { check, body } = require('express-validator');

exports.paymentCreateValidator = [
    check('link', 'Link is required').notEmpty().isString(),
    check('ledger_id', 'Ledger must be valid').notEmpty().isInt(),
    check('amount').custom(value => {
        if(isNaN(value)) {
            throw new Error("Must be a number");
        }
        if (+value <= 0) {
            throw new Error("Must be greater than 0");
        }
        return value
    }),
    check('paid_by').isInt({min:1,max:2}).withMessage("Can only be between 1 and 2"),
    check('paid_time').notEmpty().optional(),
    check('title').notEmpty().optional(),
    check('details').notEmpty().optional(),
    check('details').notEmpty().optional(),
]

exports.ledgerCreateValidator = [
    body('name', 'You must give a name for the ledger').exists().notEmpty(),
    body('participant_1', 'Please provide a name for the first ledger participant').exists().notEmpty(),
    body('participant_2', 'Please provide a name for the second ledger participant').exists().notEmpty(),
]