var Q = require('q');
var productService = require('./product.service');
var DTO = require('../../utility/dto');

var productController = {

    addProduct: function(requestData){
        var deffered = Q.defer();
        productService.addProduct(requestData.body).then(function(successData){
            DTO.message = 'SUCCESS';
            DTO.data = null;
            DTO.statusCode = successData;
            deffered.resolve(DTO);
        },function(error){
            DTO.message = 'FAILED';
            DTO.data = null;
            DTO.statusCode = error;
            deffered.reject(DTO);
        });
        return deffered.promise;
    },
    getAllProducts:function(){
        var deffered = Q.defer();
        productService.getAllProducts().then(function(successData){
            DTO.message = 'SUCCESS';
            DTO.data = successData;
            DTO.statusCode = 200;
            deffered.resolve(DTO);
        },function(error){
            DTO.message = 'FAILED';
            DTO.data = null;
            DTO.statusCode = error;
            deffered.reject(DTO);
        });
        return deffered.promise;
    },
    getProductByName:function(requestData){
         var deffered  = Q.defer();
         productService.getProductByName(requestData).then(function(successData){
            DTO.message = 'SUCCESS';
            DTO.data = successData;
            DTO.statusCode = 200;
            deffered.resolve(DTO);
         },function(errpr){
            DTO.message = 'FAILED';
            DTO.data = successData;
            DTO.statusCode = 400;
            deffered.resolve(DTO);
         })
         return deffered.promise;

    }
}

module.exports = productController;