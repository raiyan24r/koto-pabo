const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db").sequelize;


const Payment = sequelize.define(
    "Payment",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false, 
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        paid_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paid_time: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true,
        },
        paid_for_title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ledger_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        paranoid: true,
        tableName: "payments"
    }
)


module.exports = Payment;