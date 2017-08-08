import todoController from './todoController';
import template from './todo.html';

export default angular
    .module('myApp.todo', [])
    .component('todo', {
        template,
        controller: todoController,
    })
    .name;