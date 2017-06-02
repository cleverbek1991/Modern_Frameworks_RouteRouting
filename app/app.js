'use strict';

var app = angular.module('route', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/oneCtrl', {
		templateUrl: 'partials/one.html',
		controller: 'oneCtrl'
	}).
	when('/twoCtrl', {
		templateUrl: 'partials/two.html',
		controller: 'twoCtrl'
	}).
	otherwise('/');
});