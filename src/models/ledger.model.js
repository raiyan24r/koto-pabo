const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db").sequelize;


const Ledger = sequelize.define(
    "Ledger",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false, 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        participant_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        participant_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        paranoid: true,
        tableName: "ledgers"
    }
)

module.exports = Ledger;