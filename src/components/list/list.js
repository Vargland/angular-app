import _ from 'lodash';
import angular from 'angular';



angular.module("myApp")
    .component("elementList", {
        template: require("./list.html"),
        controller: ['elementList', function(elementList) {
            
            this.getList = function () {
                console.log(elementList.getObj());
            }
        }]
    })

    .service('elementList', function () {
        let arrayList = [
            'Elemento 0', 'Elemento 1', 'Elemento 2','Elemento 3' 
        ];

        let objList = {
            "elementos": {
                objeto: 0,
                objeto: 1,
                objeto: 3,
                objeto: 4,
            }
        };

        this.getArray = function () {
            return arrayList;
        }

        this.getObj = function () {
            return objList;
        }



    })