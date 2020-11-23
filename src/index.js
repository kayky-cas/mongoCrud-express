const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config/api_config.json');

const home_page = require('./route/home_page');
const error_route = require('./route/error');

const select_route = require('./route/crud/select');
const delete_route = require('./route/crud/delete');
const insert_route = require('./route/crud/insert');
const update_route = require('./route/crud/update');

app.locals.title = 'API de Animais'

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', home_page);
app.use('/error', error_route);

app.use('/select', select_route);
app.use('/delete', delete_route);
app.use('/update', update_route);
app.use('/insert', insert_route);


app.listen(config.port, () => {
    console.log(`${config.url}:${config.port}`);
});