 var app=angular.module("FinalApp",["lumx","ngRoute","ngResource"]);

 app.config(function($routeProvider){
 	$routeProvider
 	.when('/',{
 		templateUrl: 'templates/home.html',
 		controller: 'MainController'
 	})
 	.when('/post/:id',{
 		templateUrl: 'templates/post.html',
 		controller: 'PostController'
 	})
 	.when('/user/:id',{
 		templateUrl: 'templates/user.html',
 		controller: 'UserController'
 	})
 });