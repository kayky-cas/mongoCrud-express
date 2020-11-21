const db_config = require('../../config/db_config.json');

const db = require('../connect-mongo');
    
const errorModel = {
    code: Number,
    error: String,
}

const Error = db.model(db_config.collection[2], errorModel)

module.exports = Error;