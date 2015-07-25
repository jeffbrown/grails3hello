var sampleApp = angular.module("sampleApp",['ngResource']);


    sampleApp.factory('registrationService',['$resource',function($resource){

return $resource('registrationService', {}, {
            createUser : {
                url:"/register/saveUser",
                method: "POST"
            }
    });
}]);

sampleApp.factory('registrationServiceWorking',['$resource',function($resource){

return $resource('registrationServiceWorking', {}, {
            createUser : {
                url:"/register/saveUser",
                method: "POST"
            }
    });
}]);



    sampleApp.controller('sampleController',['$scope','registrationService','registrationServiceWorking',function($scope,registrationService,registrationServiceWorking){
    $scope.userData = {};
      console.log("saving");
    $scope.saveUser = function(){
    registrationService.createUser({username:$scope.userData.username,password:$scope.userData.password}).$promise.then(function(response){
    alert(response.message)

    });
    };
    $scope.saveUserWorking = function(){
        registrationServiceWorking.createUser({username:$scope.userData.username,password:$scope.userData.password}).$promise.then(function(response){
        alert(response.message)
        });
        };

    }]);
