const User = require('./User');
const Tasks = require('./Tasks');
const Games = require('./Games');

User.hasMany(Games, {
    foreignKey:'user_id',
});

Games.belongsTo(User,{
    foreignKey:'user_id',
    onDelete: "CASCADE"
});

Tasks.belongsTo(Games, {
    foreignKey:'games_id',
    onDelete: "CASCADE"
});

Games.hasMany(Tasks, {
    foreignKey: 'games_id',
    onDelete: "CASCADE"
});

Tasks.belongsTo(User, {
    foreignKey:'user_id',
    onDelete: "CASCADE"
});

User.hasMany(Tasks, {
    foreginKey:'user_id',
    onDelete: "CASCADE"
});

module.exports = {User, Tasks, Games};