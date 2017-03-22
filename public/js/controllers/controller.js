angular.module('app').controller('mainCtrl', function($scope, mainSvc){
   mainSvc.getProducts().then(function(response){
       $scope.products = response
       console.log($scope.products)
    
   })
})