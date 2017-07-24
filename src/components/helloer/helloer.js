import angular from 'angular';

angular.module("myApp") //module: donde se definen los componentes -> podes ponerle todos los comp. que quieras
    .component("helloer", { 
        template: require("./helloer.html"),
        controller: ['reloj', function (reloj) {

            this.iniciar = function () {
                console.log('HOLA!');
                reloj.iniciarReloj(1000);
            }
        }]
    })

    .service("reloj", function () {
        var intervalRef;
        
        this.iniciarReloj = function (ms) {
            intervalRef = setInterval(() => {
                console.log('Tick => ' + new Date().getTime());
            }, ms);
        }

        this.detenerReloj = function () {
            clearInterval(intervalRef);
        }
    })   


