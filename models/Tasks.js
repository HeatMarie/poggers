const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tasks extends Model{}

Tasks.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoincrement:true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        //I CHANGED THIS FROM FALSE//
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'games',
                key: 'id'
            },
        },
        title:{
            type:DataTypes.STRING,
            allowNull:true
        },
        description: {
            type: DataTypes.STRING
        },
        task_content:{
            type:DataTypes.TEXT,
            allowNull:true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored:true,
        modelName:'tasks'
    }
);

module.exports = Tasks;