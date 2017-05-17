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

        if (id && name && desc && price && imageurl){
            db.createProduct([id, name, desc, price, imageurl], function(err, response){
                let id = response[0].id;
                db.getProductById([id], function(err, products){
                    return res.send({"new product": products[0]});
                })
            })
        }else{
            return res.send('Bad request. Please include an id, name, desc, price, & imageurl');
        }

    },

    updateProduct: function(req, res, next){
        let id = req.params.id;
        let name = req.body.name;
        let desc = req.body.description;
        let price = req.body.price;
        let imageurl = req.body.imageurl;

        if (name && desc && price && imageurl){
            db.updateProduct([id, name, desc, price, imageurl], function(err, response){
                 db.getAllProducts(function(err, products){
                    return res.send({"updated item with id": id, "new array": products});
                });
            });

        }else{
            return res.send('Bad request. Please include a name, desc, price, & imageurl');
        }
    },

    deleteProduct: function(req, res, next){
        let id = req.params.id;

        db.deleteProduct([id], function(err, products){
            db.getAllProducts(function(err, products){
                return res.send({"deleted item with id": id,"new array": products});
            })
        })
    }

}



