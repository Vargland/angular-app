class todoController {
    constructor($ngRedux, $scope) {
        let disconnect = $ngRedux.connect (state => ({router: state.router}))(this);
    }
}