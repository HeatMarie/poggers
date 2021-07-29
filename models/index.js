const User = require('./User');
const Tasks = require('./Tasks');
const Games = require('./Games');

User.hasMany(Games, {
    foreignKey:'user_id',
});

Games.belongsTo(User,{
    foreignKey:'user_id',
});

Tasks.belongsTo(Games, {
    foreignKey:'game_id',
    onDelete: 'cascade'
});

Games.hasMany(Tasks, {
    foreignKey: 'game_id',
    onDelete: "CASCADE"
});

Tasks.belongsTo(User, {
    foreignKey:'user_id',
});

User.hasMany(Tasks, {
    foreignKey:'user_id',
    onDelete: "CASCADE"
});

module.exports = {User, Tasks, Games};