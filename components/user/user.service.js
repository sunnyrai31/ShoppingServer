var Q = require('q');
var userModel =  require('./user.model');
var userService = {
    addUser : function (requestData){
            var deffered = Q.defer();
            var user =  new userModel();
            user.name = requestData.name;
            user.email = requestData.email;
            user.address = requestData.address;
            user.password = requestData.password;
            user.contactInfo = requestData.contactInfo;
            user.userName  = requestData.userName;

            user.save(function(error){
                if (!error) {
                    deffered.resolve(201);
                } else {
                    console.log(error);
                    deffered.reject(422);
                }
            });
            return deffered.promise;
        },
    getAllUsers: function(){
        var deffered = Q.defer();
        userModel.find({},function(error,users){
            if(!error){
                deffered.resolve(users);
            }else{
                deffered.reject(404);
            }
        })
        return deffered.promise;
    }
}
module.exports = userService;