var sampleApp = angular.module("sampleApp",['ngResource']);


    sampleApp.factory('registrationService',['$resource',function($resource){

return $resource('registrationService', {}, {
            createUser : {
                headers: {'Content-Type':'application/json'},
                url:"/register/saveUser",
                params : {
                username : "@userInfo.username",
                password : "@userInfo.password",
                },
                method: "POST"
            }
    });
}]);

sampleApp.factory('registrationServiceWorking',['$resource',function($resource){

return $resource('registrationServiceWorking', {}, {
            createUser : {
                headers: {'Content-Type':'application/json'},
                url:"/register/saveUser",
                params : {
                username : "@username",
                password : "@password",
                },
                method: "POST"
            }
    });
}]);



    sampleApp.controller('sampleController',['$scope','registrationService','registrationServiceWorking',function($scope,registrationService,registrationServiceWorking){
    $scope.userData = {};
      console.log("saving");
    $scope.saveUser = function(){
    registrationService.createUser({userInfo:$scope.userData}).$promise.then(function(response){
    alert(response.message)

    });
    };
    $scope.saveUserWorking = function(){
        registrationServiceWorking.createUser({username:$scope.userData.username,password:$scope.userData.password}).$promise.then(function(response){
        alert(response.message)
        });
        };

    }]);
