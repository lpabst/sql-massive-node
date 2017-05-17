const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

var db = massive.connectSync({
    connectionString: 'postgres://sitedvmuehvxqj:6e5588b9f2489c1f12b652893d9648022b49aa88664bd01d03c0bebea49e8a85@ec2-23-23-227-188.compute-1.amazonaws.com:5432/db9kauonju9ri1?ssl=true'
});

var app = module.exports = express();

app.use(bodyParser.json());









app.listen(8000, console.log('hi boyyy'))