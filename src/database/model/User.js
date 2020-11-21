const db_config = require('../../config/db_config.json');

const db = require('../connect-mongo');
    
const userModel = {
    name: String,
    token: String,
    permission: Boolean
}

const User = db.model(db_config.collection[1], userModel)

module.exports = User;