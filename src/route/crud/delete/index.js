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
    response.send('DELETE');
});

route.post('/', (require, response) => {
    console.log(require.body)
    if(typeof require.body.token === 'undefined') response.json({status: false, error: 101});
    else if (typeof require.body.id === 'undefined') response.json({status: false, error: 105});
    else {
        
        const token = {token: require.body.token};

        UserController.select(token).then((result) => {
            if(result.length === 0) response.json({status: false, error: 102});

            else {
                if (!result[0].permission) response.json({status: false, error: 103});
                else {
                    AnimalController.select().then((resultA) => {
                        if (resultA.length === 0) response.json({status: false, error: 106});
                        else {
                            AnimalController.delete(require.body.id).then(() => {
                                response.json({status: true});
                            });
                        }
                    });
                    
                }
            }
        });
    }
});



module.exports = route;