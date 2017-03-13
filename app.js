angular.module('app',['ui.router']).config(function($stateProvider, $urlRouterProvider){
    // $urlRouterProvider.when('', '')

    // $ulrRouterProvider.otherwise('/404')

    $stateProvider
        .state('home', {
            url: (''),
            templateUrl: 'home/home.html'
        })
})