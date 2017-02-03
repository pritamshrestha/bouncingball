// this is for the myapp
var app=angular.module('multiPageApp',['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'view/home.html'
	})
	.when('/about',{
		templateUrl:'view/about.html'
	})
	.when('/contact',{
		templateUrl:'view/contact.html'
	})
	.otherwise({
		redirectTo:'/'
	})
})