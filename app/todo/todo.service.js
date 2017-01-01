export class TodoService {

  constructor($http, $window, $q) {
    'ngInject';
    this.$http = $http;
    this.db = $window.sessionStorage;
    this.$q = $q;
  }

  getTodos() {
    // return this.$http.get('/api/todos').then(response => response.data);
    return this.$q((resolve)=>{
        resolve(this.db.todos);
    });
  }
}