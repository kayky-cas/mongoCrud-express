const express = require('express');
const path = require('path');

const route = express.Router();

const Animal = require('../../database/model/Animal');

route.get('/', (require, response) => {
    response.sendFile(path.join(__dirname+'../../../view/home_page/index.html'));
});


module.exports = route;