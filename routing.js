// to load the perticualr controller based on the url/request.
var express = require("express");
var router = express.Router();

var productController = require('./components/products/product.controller');
var userController = require('./components/user/user.controller');

//routing for products 
router.route('/product').post(function(request, response){
    productController.addProduct(request).then(function(dto){
        response.status(dto.statusCode).send(dto);
    }, function(dto){
        response.status(dto.statusCode).send(dto);
    });
});

router.route('/products').get(function(request, response){
    productController.getAllProducts().then(function(dto){
        response.status(dto.statusCode).send(dto);
    }, function(dto){
        response.status(dto.statusCode).send(dto);
    });
});

router.route('/product/:name').get(function(request, response){
    productController.getProductByName(request.params.name).then(function(dto){
        response.status(dto.statusCode).send(dto);
    }, function(dto){
        response.status(dto.statusCode).send(dto);
    });
});
//routing for users::
router.route('/user').post(function (request,response){
    userController.addUsers(request).then(function(dto){
         response.status(dto.statusCode).send(dto)
    },function(dto){
        response.status(dto.statusCode).send(dto);
    })
    
})
//get all user
router.route('/users').get(function(request,response){
     userController.getAllUsers().then(function(dto){
         response.status(dto.statusCode).send(dto);
     },function(dto){
        response.status(dto.statusCode).send(dto);
     })
})


module.exports = router;
