import todoController from './todoController';
import template from './todo.html';
import styles from './todo.scss';

export default angular
    .module('myApp.todo', [])
    .component('todo', {
        template,
        styles,
        controller: todoController,
    })
    .name;