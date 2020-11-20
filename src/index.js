const express = require('express');
const api = express();
const config = require('./config/api_config.json');

const home_page = require('./route/home_page');

const selectRoute = require('./route/crud/select');
const deleteRoute = require('./route/crud/delete');
const insertRoute = require('./route/crud/insert');
const updateRoute = require('./route/crud/update');

api.use('/select', selectRoute);

api.use('/delete', deleteRoute);

api.use('/update', updateRoute);

api.use('/insert', insertRoute);


api.listen(config.port, () => {
    console.log(`${config.url}:${config.port}`);
});