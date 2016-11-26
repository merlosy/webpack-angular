
class TodoConfig {

    constructor($stateProvider){
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

}

export {TodoConfig};