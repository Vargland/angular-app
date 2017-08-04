import uiRouter     from 'angular-ui-router';  
import ngRedux      from 'ng-redux';

angular.module("myApp", [
    uiRouter,
    ngRedux
]);
require('./Components');
require('./Redux');   

//https://github.com/dmachat/redux-ui-router-sample
//https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related