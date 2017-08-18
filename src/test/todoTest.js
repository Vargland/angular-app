import todo from '../index';
import 'angular-mocks/angular-mocks';

describe('TodoController test', () => {
    let $controller;
    let $scope;
    
    beforeEach(function() {
        angular.mock.module(todo);
        angular.mock.module('myApp.todo');
        angular.mock.module('myApp');

        angular.mock.inject(function(_$controller_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            console.log("Controller -->", $controller);
        });

    });

    it('todo load', function () {
       let ctrl = $controller('todoController', { $scope: $scope });
    });    
});

//https://github.com/troianoandres/startup/blob/master/project/test/karma-unit.conf.js TROIMAN BOOTCAMP 