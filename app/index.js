import { TodoModule } from './todo/todo';

angular.module('app', [
	'ui.router',
	TodoModule
])
.config(AppConfig);

// default params
function printMessage (status='working') {
	// let
  	let message = 'ES6';
	// template string
  	console.log(`${message} is ${status}`);
}
printMessage();

AppConfig.$inject=['$locationProvider', '$urlRouterProvider'];
function AppConfig($locationProvider, $urlRouterProvider){
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });
  	$urlRouterProvider.otherwise('/todo-list');
}