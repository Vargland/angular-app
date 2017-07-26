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
        }   

        $scope.deleteAct = (index) => {
            $scope.todo.splice(index, 1);
        }
    })

    







    /*  $scope.checkAct = () => {
            $scope.toDo.push({
                done: true
            })
        }, 

        $scope.removeAct = () => {
            let oldList = $scope.toDo;

            $scope.toDo = [];
            angular.forEach(oldList, (x) => {
                (!x.done) ? $scope.toDo.push(x) : alert('Nothing to clear');
                console.log($scope.toDo);
            })
        }
     */
   


