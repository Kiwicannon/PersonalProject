angular.module('app').service('mainSvc', function($http){
    this.getProducts= function(){
        return $http.get('/api/products').then(function(res){
            
            return res.data

        })
    }
    
    
})