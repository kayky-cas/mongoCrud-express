const db_config = require('../../config/db_config.json');

const db = require('../connect-mongo');
    
const animalModel = {
    name: String,
    nationality: String,
    binominal: String
}

const Animal = db.model(db_config.collection[0], animalModel)

module.exports = Animal;