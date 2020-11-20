const db_config = require('../../config/db_config.json');

const db = require('../connect-mongo')();
    
const animalModel = {
    nome: String,
    nacionalidade: String,
    imagem: String
}

const Animal = db.model(db_config.collection, animalModel)

module.exports = Animal;