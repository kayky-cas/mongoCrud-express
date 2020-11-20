const express = require('express');

const route = express.Router();

const Animal = require('../../../database/model/Animal');

route.get('/', (require, response) => {
    Animal.find({}, (error, result) => {
        if (error) response.send({status: false});
        
        response.send(result);
    });
});



module.exports = route;