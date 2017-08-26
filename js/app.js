var App = angular.module('App', ['ngRoute']);

App.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/listagem.html',
			controller: 'ListagemCtrl'
		})
		.when('/listagem', {
			templateUrl: 'views/listagem.html',
			controller: 'ListagemCtrl'
		})
		.when('/cadastro', {
			templateUrl: 'views/cadastro.html',
			controller: 'CadastroCtrl'
		})
	 	.when('/cadastro/:id', {
			templateUrl: 'views/cadastro.html',
			controller: 'CadastroCtrl'
		}) 

});

App.value('API', 'http://localhost:3000/api/');