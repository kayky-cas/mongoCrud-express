const express = require('express');
const Controller = require('../../../database/controller/Controller');

const route = express.Router();

const Animal = require('../../../database/model/Animal');
const User = require('../../../database/model/User');

const UserController = new Controller(User);
const AnimalController = new Controller(Animal);

route.use(express.urlencoded({ extended: true }));
route.use(express.json());

route.get('/', (require, response) => {

    if(typeof require.query.token === 'undefined') response.json({status: false, error: 101});
    else {

        const token = {token: require.query.token};

        UserController.select(token).then((result) => {
            if(result.length === 0) response.json({status: false, error: 102});

            else {
                AnimalController.select().then((resultA) => {
                    const res = {
                        animais: resultA,
                        status: true
                    }
                    response.json(res);
                });
            }
        });
    }
    
});



module.exports = route;