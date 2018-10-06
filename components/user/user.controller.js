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
    getAllUsers:function(){
        var deffered =  Q.defer();
        userService.getAllUsers().then(function(successData){
            DTO.message = 'SUCCESS';
            DTO.data = successData;
            DTO.statusCode = 200;
            deffered.resolve(DTO);
        },function(error){
            DTO.message = 'FAILED';
            DTO.data = null;
            DTO.statusCode = error;
            deffered.reject(DTO);
        })
        return deffered.promise;
    },
    deleteRecordById : function(requestData){
        var deffered = Q.defer();
        userService.deleteRecordById(requestData.params._id).then(
            function(successData){
                DTO.message = 'DELETE SUCCESSFULL!';
                DTO.data = null;
                DTO.statusCode = 200;
                deffered.resolve(DTO);
        },
        function(error){
            DTO.message = 'DELETE FAILED!';
                DTO.data = null;
                DTO.statusCode = 400;
                deffered.resolve(DTO);
        });
        return deffered.promise;
    }

}
module.exports = userController;