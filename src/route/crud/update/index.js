const express = require('express');

const route = express.Router();

const Animal = require('../../../database/model/Animal');

route.get('/', (require, response) => {
    response.send('UPDATE');
});



module.exports = route;