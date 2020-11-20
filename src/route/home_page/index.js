const express = require('express');

const route = express.Router();

const Animal = require('../../database/model/Animal');

route.get('/', (require, response) => {
    response.send('HOME_PAGE');
});


module.exports = route;