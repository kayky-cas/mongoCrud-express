const express = require('express');
const Controller = require('../../database/controller/Controller');

const Error = require('../../database/model/Error');

const ErrorController = new Controller(Error);

const route = express.Router();

route.use(express.urlencoded({ extended: true }));
route.use(express.json());


route.get('/', (require, response) => {
    var code;
    if(typeof require.query.code === 'undefined') code = null;
    else code = {code: require.query.code};

    ErrorController.select(code).then((result) => {
        response.json(result);
    });
});


module.exports = route;