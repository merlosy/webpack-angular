import { TodoController } from './todo.controller';

export const TodoModule = angular
    .module('todos', [
        'ui.router'
    ])
    .config(TodoConfig)
    .controller('TodoController', TodoController)
    .name;
 

TodoConfig.$inject=['$stateProvider'];
function TodoConfig($stateProvider){
	$stateProvider.state('todo', {
        url: '/todo-list',
        views: {
            '': {
                controller: 'TodoController',
                controllerAs: '$ctrl',
                template: `<p>{{$ctrl.message}}</p>`
            }
        }
    });
}
