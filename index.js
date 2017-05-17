const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');

const app = module.exports = express();

var massiveInstance = massive.connectSync({
    connectionString: 'postgres://sitedvmuehvxqj:6e5588b9f2489c1f12b652893d9648022b49aa88664bd01d03c0bebea49e8a85@ec2-23-23-227-188.compute-1.amazonaws.com:5432/db9kauonju9ri1?ssl=true'
});

app.set('db', massiveInstance);
var db = app.get('db');

app.use(bodyParser.json());

// ALWAYS declare/require controllers right above 
// where we do our endpoints!!!
const controller = require('./productsCtrl.js');

app.get('/api/products', controller.getAllProducts);
app.get('/api/products/:id', controller.getProductById);

app.post('/api/products', controller.createProduct);

app.put('/api/products/:id', controller.updateProduct);

app.delete('/api/products/:id', controller.deleteProduct);







app.listen(8000, console.log('yo 8000'))