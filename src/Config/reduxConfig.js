import reducers from '../Redux/reducers';
import thunk from 'redux-thunk';

store.$inject = ['$ngReduxProvider'];
export default function store($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(
    reducers,
    ['ngUiRouterMiddleware', thunk],
    [window.devToolsExtension ? window.devToolsExtension() : f => f]
  );
}