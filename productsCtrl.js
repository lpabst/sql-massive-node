var app = require('./index.js');
var db = app.get('db');

module.exports = {

    getAllProducts: function(req, res, next){
        db.getAllProducts(function(err, products){
            return res.send(products);
        })
    },

    getProductById: function(req, res, next){
        let id = req.params.id;

        db.getProductById([id], function(err, products){
            return res.send(products);
        })
    },

    createProduct: function(req, res, next){
        let id = req.body.id;
        let name = req.body.name;
        let desc = req.body.description;
        let price = req.body.price;
        let imageurl = req.body.imageurl;

        db.createProduct([id, name, desc, price, imageurl], function(err, products){
            return res.send('ok');
        })
    },

    updateProduct: function(req, res, next){
        let id = req.params.id;
        let name = req.body.name;
        let desc = req.body.description;
        let price = req.body.price;
        let imageurl = req.body.imageurl;

        db.updateProduct([id, name, desc, price, imageurl], function(err, products){
            return res.send(products);
        })
    },

    deleteProduct: function(req, res, next){
        let id = req.params.id;

        db.deleteProduct([id], function(err, products){
            return res.send(products);
        })
    }

}



