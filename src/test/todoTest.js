import mock from 'angular-mocks/angular-mocks';
import todo from '../index';
import todoController from '../Components/todo/todoController.js';

describe('TodoController test', () => {
    let $controller;
    let $scope;
    
    beforeEach(function() {
        angular.mock.module('myApp');

        angular.mock.inject(function(_$controller_, _$rootScope_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
        });
    });

    it('todo load', function () {
        $controller('todoController', {})
    });    
});

//https://github.com/troianoandres/startup/blob/master/project/test/karma-unit.conf.js TROIMAN BOOTCAMP 