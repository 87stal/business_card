const express = require('express');
const path = require('path');

const { config } = require('./configs');
const createCsv = require('./services/csv.creator');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

const usersRouter = require('./router/users.router');

app.use('/users', usersRouter);

createCsv();

app.listen(config.PORT, () => {
    console.log('Example app listening on port 5000!');
});
