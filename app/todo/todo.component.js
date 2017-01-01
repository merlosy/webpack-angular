import templateUrl from './todo.html';


export const TodoComponent = {
    bindings: {
        todoData: '<'
    },
    templateUrl,
    controller: class TodoComponent {

        constructor($log) {
            'ngInject';
            this.message = 'CLASS is working';
            $log.debug('CLASS constructor is working');
        }

        $onInit() {
            this.newTodo = {
                title: '',
                selected: false
            };
        }

        $onChanges(changes) {
            if (changes.todoData) {
                this.todos = Object.assign({}, this.todoData);
            }
        }

        addTodo({ todo }) {
            if (!todo) return;
            this.todos.unshift(todo);
            this.newTodo = {
                title: '',
                selected: false
            };
        }

    }
};

// export const TodoComponent = {
//   templateUrl,
//   controller: TodoComponentController
// }