import './todo.scss';
import _ from 'lodash';
import angular from 'angular';


angular.module("myApp")
    .component('todo', {
        template: require('./todo.html') 
    })

    .controller('todoController', function($scope) {
        $scope.todo = [];
        $scope.editedTodo = null;
       
        $scope.addAct = () => {
            $scope.todo.push({
                description: _.get($scope.newAct, 'description', 'none'),
                done: false,
                important: false,
                editable: false               
            });  
            $scope.newAct = {};
        },

        $scope.editAct = (index) => {
            $scope.todo[index].editable = true;
        },

        $scope.saveAct = (index) => {
            $scope.todo[index].editable = false;
        },
        
        $scope.doneAct = (index) => {
            $scope.todo[index].done = !$scope.todo[index].done;
        },

        $scope.importantAct = (index) => {
            $scope.todo[index].important = !$scope.todo[index].important
        }

        $scope.deleteAct = (index) => {
            $scope.todo.splice(index, 1);
        }
    })