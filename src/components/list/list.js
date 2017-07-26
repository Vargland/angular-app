import _ from 'lodash';
import angular from 'angular';



angular.module("myApp")
    .component("elementList", {
        template: require("./list.html"),
        controller: ['elementList', function(elementList) {            
            this.getList = () => {
                this.elements = elementList.getArray();
            };
        }]
    })

    .service('elementList', function () {
        let arrayList = [
            'Elemento 0', 'Elemento 1', 'Elemento 2','Elemento 3' 
        ];

        this.getArray = function () {
            return arrayList;
        };
    })