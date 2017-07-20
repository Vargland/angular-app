import angular from 'angular';

angular.module("myApp")
    .component("chauoer", {
        template: require("./chauoer.html"),
        controller: ['reloj', function(reloj) {

            this.detener = function () {
                console.log('DETENER!');
                reloj.detenerReloj();
            }
        }]
    })