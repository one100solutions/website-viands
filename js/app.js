angular.module('viands',['ui.router'])

.config(function($stateProvider,$urlRouterProvider,$httpProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '../templates/home.partial.html',
			controller: 'HomeController as Home'
		})
		
		.state('app', {
			url: '/app',
            templateUrl: '../templates/app.partial.html'
		})	
});