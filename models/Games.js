const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model { }

Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        title: {
            type:DataTypes.STRING,
            allowNull:false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'games'
    }
);

module.exports = Games;
