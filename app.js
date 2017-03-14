angular.module('app',['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/')

    $urlRouterProvider.otherwise('/404')

    $stateProvider
        .state('home', {
            url: ('/'),
            templateUrl: 'home/home.html'
        })

        .state('sunglasses',{
            url:('/sunglasses'),
            templateUrl: 'sunglasses/sunglasses.html'
            
        })
        .state('mens-sunglasses', {
            url: ('/mens-sunglasses'),
            templateUrl: 'sunglasses/mensSunglasses.html'
        })
})