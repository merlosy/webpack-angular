import angular from 'angular';

module.exports = angular.module('app', []);

// default params
function printMessage (status='working') {  
	// let
  	let message = 'ES6';                    
	// template string           
  	console.log(`${message} is ${status}`);    
}
printMessage(); 

// AppConfig.$inject=['$locationProvider', '$urlRouterProvider'];
// function AppConfig($locationProvider, $urlRouterProvider){
// 	$locationProvider.html5Mode(true);
//   	$urlRouterProvider.otherwise('/');
// }