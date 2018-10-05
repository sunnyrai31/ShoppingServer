// to load the perticualr controller based on the url/request. 
var express = require("express");
var router = express.Router();

var productController = require('./components/products/product.controller');

router.route('/product').post(function(request, response){
    console.log("this is the routing file ", request);
    productController.addProduct(request).then(function(dto){
        response.status(dto.statusCode).send(dto);
    }, function(dto){
        response.status(dto.statusCode).send(dto);
    });
});



router.route('/products/:id/:name').get(function(request, response){
    console.log(request.params.id);
    console.log(request.params.name);
    response.send('Hi I m product get api');
});

router.route('/product/:id').get(function(request, response){
    response.send('Hi I m product get api with id: '+request.params.id);
});

module.exports = router;


