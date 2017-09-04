// Import third party libraries
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

// Import config for libraries
import reduxConfig from './Config/reduxConfig';
import routeConfig from './Config/routeConfig';

// Import components
import todo from './Components/todo';
import slider from './Components/slider';


const myApp = angular
    .module("myApp", [
        uiRouter,
        ngRedux,
        ngReduxUiRouter,
        todo,
        slider
    ])
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
    }])

// Load config for ui-router
myApp.config(routeConfig(myApp));

// Load Redux config
myApp.config(reduxConfig);

export default myApp;

//https://github.com/dmachat/redux-ui-router-sample
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related