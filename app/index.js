import { TodoModule } from './todo/todo';
import uiRouter from 'angular-ui-router';
import homeTemplate from './home.html';

angular.module('app', [
	uiRouter,
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

/**
 * @see http://stackoverflow.com/questions/34932972/angular-ui-routers-nested-routes-not-working-in-es6-with-bable
 * @see https://github.com/angular-ui/ui-router/issues/2547
 */
function AppConfig($locationProvider, $urlRouterProvider, $stateProvider){
	'ngInject';
	$stateProvider.state('home', {
        url: '/',
		views: {
			'':{
				template: homeTemplate
			}
		}
    });
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
  	$urlRouterProvider.otherwise('/');
}