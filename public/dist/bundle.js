'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html'
    }).state('sunglasses', {
        url: '/sunglasses',
        templateUrl: './views/sunglasses/sunglasses.html'
    }).state('mens-sunglasses', {
        url: '/mens-sunglasses',
        templateUrl: './views/sunglasses/mensSunglasses.html',
        controller: 'mainCtrl'
    });
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSvc) {
   mainSvc.getProducts().then(function (response) {
      $scope.products = response;
      //    console.log($scope.products)
      //     $scope.$watch('products', function(){
      //         console.log($scope.products);
      //     })
   });
});
// //defining filter
// app.filter('selectedProducts', function($filter){
//     return function(products) {
//         var i, len;

//        //get products that have been checked
//        var checkedProducts = $filter('filter')(products, {checked:true});


//        //add in a check to see if any customers were selected if none, return them all without filters
//        if(checkedProducts.length === 0){
//            return products
//        }

//        //get all the unique products that come from those checked customers
//        var framecolors = {};
//        for(i = 0, len = checkedProducts.length; i < len; ++i){
//            //if this checked products framecolor isn't already in the cities object 
//            //add cities
//            if(!framecolors.hadOwnProperty(checkedProducts[i].framecolor)){
//                framecolors[checkedProducts[i].framecolor] = true;
//            }
//        }

//        //now that we have the cities that come from the checked products, we can get all products from those framecolors and return them
//        var ret = [];
//        for(i=0, len = customers.length; i < len; ++i){
//            //if this products framecolor exists in the framecolors object, add it to the return array
//            if(framecolors[products[i].framecolor]){
//                ret.push(products[i]);
//            }
//        }
//        return ret;
//     }
// })
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, mainSvc) {});
'use strict';

angular.module('app').controller('sunglassesCtrl', function ($scope, mainSvc) {});
"use strict";

$(document).ready(function () {});
'use strict';

angular.module('app').service('mainSvc', function ($http) {
    this.getProducts = function () {
        return $http.get('/api/products').then(function (res) {

            return res.data;
        });
    };
});