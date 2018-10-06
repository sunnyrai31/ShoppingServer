var Q = require('q');
var DTO = require('../../utility/dto');
var userService = require('./user.service');
var userController ={
    addUsers: function(resquestData){
        var deffered = Q.defer();
        userService.addUser(resquestData.body).then(function(successData){
            DTO.message = 'SUCCESS';
            DTO.data = null;
            DTO.statusCode = successData;
            deffered.resolve(DTO);
        },function(error){
            DTO.message = 'FAILED';
            DTO.data = null;
            DTO.statusCode = error;
            deffered.reject(DTO);
        })
         return deffered.promise
    },
    getUserDataByID:function(requestData){

    },
    getAllUSers:function(){

    }

}
module.exports = userController;