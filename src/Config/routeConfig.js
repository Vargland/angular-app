export default function(myApp) {
  RouterConfig.$inject = ['$stateProvider'];
  function RouterConfig($stateProvider) {
    $stateProvider
      .state('index', {
        abstract: true,
        views: {
          'todo': { template: '<ui-view></ui-view>' },
          'slider': { template: '<ui-view></ui-view>' },
          
        },
      })
      .state('index.slider', {
        template: '<todo></todo>',
        template: '<slider></slider>'
        
      });
  }
  return RouterConfig;
}
