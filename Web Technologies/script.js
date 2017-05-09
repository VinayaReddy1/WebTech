    var myApp = angular.module('myApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {

        // create a message to display in our view
       // $scope.message = "Everyone come and see how good I look!";
    });
	myApp.config(function($routeProvider) {
	$routeProvider
            // route for the home page
        
        .when('/', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        
});
myApp.controller('contactController', function($scope) {
	$scope.message = 'Reach Us At';
});