var Q = require('q');
var ProductModel = require('./product.model');

var productService = {
    addProduct: function(productData){
        var deffered = Q.defer();
        var product = new ProductModel();
        product.name = productData.name;
        product.description = productData.description;
        product.category = productData.category;
        product.price = productData.price;
        product.stock = productData.stock;
        product.image = productData.image;
        product.brand = productData.brand;

        product.save(function(error){
            if (!error) {
                deffered.resolve(201);
            } else {
                console.log(error);
                deffered.reject(422);
            }
        });

        return deffered.promise;
    }

}

module.exports = productService;