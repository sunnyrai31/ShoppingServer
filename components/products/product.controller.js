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

    }

}

module.exports = productController;