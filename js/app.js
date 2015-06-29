angular.module('viands',['ui.router'])

.config(function($stateProvider,$urlRouterProvider,$httpProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '../templates/home.partial.html'
		})
		
		.state('app', {
			url: '/app'
		})	
});