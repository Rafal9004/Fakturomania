var firmApp = angular.module('firmApp', ["ui.bootstrap", "ngRoute", "selector", "modelCompany", "repositoryCompany", "modelProduct", "repositoryProduct", "modelInvoice", "repositoryInvoice"]);

firmApp.config(function ($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider
    .when("/", {
        templateUrl : 'company.template.html'
    })
    .when("/product", {
        templateUrl : "product.template.html"
    })
    .when("/invoice", {
        templateUrl : "invoice.template.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});
