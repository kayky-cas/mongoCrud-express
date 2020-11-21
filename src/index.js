const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/api_config.json');

const home_page = require('./route/home_page');

const selectRoute = require('./route/crud/select');
const deleteRoute = require('./route/crud/delete');
const insertRoute = require('./route/crud/insert');
const updateRoute = require('./route/crud/update');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', home_page);

app.use('/select', selectRoute);
app.use('/delete', deleteRoute);
app.use('/update', updateRoute);
app.use('/insert', insertRoute);


app.listen(config.port, () => {
    console.log(`${config.url}:${config.port}`);
});