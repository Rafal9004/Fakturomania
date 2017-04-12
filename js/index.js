var firmApp = angular.module('firmApp', ["ui.bootstrap", "ngRoute", "modelCompany", "repositoryCompany", "modelProduct", "repositoryProduct"]);

firmApp.config(function ($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider
    .when("/", {
        templateUrl : 'company.html'
    })
    .when("/product", {
        templateUrl : "product.html"
    })
    .when("/invoice", {
        templateUrl : "invoice.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});
