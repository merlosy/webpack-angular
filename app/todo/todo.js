import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import uiRouter from 'angular-ui-router';

export const TodoModule = angular
    .module('todos', [
        uiRouter
    ])
    .config(TodoConfig)
    .component('todo', TodoComponent)
    .service('TodoService', TodoService)
    .name;
 

function TodoConfig($stateProvider){
    'ngInject';
	$stateProvider.state('todos', {
        url: '/todos',
        component: 'todo',
        resolve: {
          todoData: TodoService => TodoService.getTodos()
        }
    });
}
