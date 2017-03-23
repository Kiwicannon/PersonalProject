angular.module('app',['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/')

    $urlRouterProvider.otherwise('/404')

    $stateProvider
        .state('home', {
            url: ('/'),
            templateUrl: './views/home/home.html',
            // controller: 'homeCtrl'
        })

        .state('sunglasses',{
            url:('/sunglasses'),
            templateUrl: './views/sunglasses/sunglasses.html',
            // controller: 'sunglassesCtrl'
            
        })
        .state('mens-sunglasses', {
            url: ('/mens-sunglasses'),
            templateUrl: './views/sunglasses/mensSunglasses.html',
            controller: 'mainCtrl'
        })
})