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
        
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        task_content:{
            type:DataTypes.TEXT,
            allowNull:true,
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
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