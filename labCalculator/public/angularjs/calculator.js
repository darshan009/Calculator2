//loading the 'calculator' angularJS module

var calculator = angular.module('calculator', ['ui.router']);
calculator.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider.state('calculator', {
			url : '/',
			views: {
	            'content': {
	                templateUrl : 'templates/calculator.html',
	            },
			}
		})
		$urlRouterProvider.otherwise('/');
	});



//defining the calculator controller
calculator.controller('calculator', function($scope, $http,$state) {
	//Initializing the 'invalid_login' and 'unexpected_error'
	//to be hidden in the UI by setting them true,
	//Note: They become visible when we set them to false

	var fullString = '';

	$scope.buttonClick = function(buttonValue) {

		$http({
			method: "POST",
			url: "/",
			data: {
				"buttonValue": buttonValue,
				"fullString": fullString
			}
		}).success(function(data){
			fullString = data.fullString;
			$scope.displayAnswer = data.fullString;
		});

	};

	$scope.calculate = function() {

		$http({
			method: "POST",
			url: "/calculate",
			data: {
				"fullString": fullString
			}
		}).success(function(data){
			$scope.displayAnswer = data.calc;
			fullString = data.calc;
		});

	};

	$scope.clearDisplay = function() {
		$scope.displayAnswer = '';
		fullString = '';
	}

})
