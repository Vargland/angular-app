export default function(myApp) {
  RouterConfig.$inject = ['$stateProvider'];
  function RouterConfig($stateProvider) {
    $stateProvider
      .state('index', {
        abstract: true,
        views: {
          'todo': { template: '<ui-view></ui-view>' },
        },
      })
      .state('index.todo', {
        template: '<todo></todo>',
      });
  }
  return RouterConfig;
}
