const express = require('express');

const route = express.Router();

const Animal = require('../../database/model/Animal');

route.get('/', (require, response) => {
    response.send('INSERT');
});

route.post('/:id', (require, response) => {
    Animal.findByIdAndDelete(require.params.id, (error, result) => {
        if (error) response.send({status: false});
        
        response.send(result);
    });
});



module.exports = route;