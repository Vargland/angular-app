import todoCtrl from './todoController';
import template from './todo.html';
import styles from './todo.scss';

const todoController = angular
    .module('myApp.todo', [])
    .component('todo', {
        template,
        styles,
        controller: todoCtrl,
    })
    .name;

    export default todoController;